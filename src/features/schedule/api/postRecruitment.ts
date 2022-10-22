import { useMutation } from 'react-query';

import { axios } from 'lib/axios';
import { MutationConfig, queryClient } from 'lib/react-query';
import { useNotificationStore } from 'stores';

import { Recruitment } from '../types';

export type CreateRecruitmentDTO = {
  data: Omit<Recruitment, 'owner'>;
};

export const createRecruitment = ({ data }: CreateRecruitmentDTO): Promise<null> => {
  return axios.post(`private/user/me/recruitments`, data);
};

type UseCreateRecruitmentOptions = {
  config?: MutationConfig<typeof createRecruitment>;
};

export const useCreateRecruitment = ({ config }: UseCreateRecruitmentOptions = {}) => {
  const { addNotification } = useNotificationStore();
  return useMutation({
    onMutate: async (newRecruitment) => {
      // 事前に走っているリクエストがある場合はキャンセルする
      await queryClient.cancelQueries('recruitment');
      // 更新前の現在のデータを取得
      const previousDiscussions = queryClient.getQueryData<Recruitment[]>('recruitment');

      queryClient.setQueryData('recruitment', [...(previousDiscussions || []), newRecruitment.data]);
      return { previousDiscussions };
    },
    onError: (_, __, context: any) => {
      if (context?.previousDiscussions) {
        queryClient.setQueryData('recruitment', context.previousDiscussions);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('recruitment');
      addNotification({
        type: 'success',
        title: 'Recruitment Created',
      });
    },
    ...config,
    mutationFn: createRecruitment,
  });
};
