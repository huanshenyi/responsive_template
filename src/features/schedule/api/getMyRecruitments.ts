import { useQuery } from 'react-query';

import { axios } from 'lib/axios';
import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';

import { Recruitments, RecruitmentType } from '../types';

export const getMyRecruitments = ({
  page,
  limit,
  type,
}: {
  page?: number;
  limit?: number;
  type?: RecruitmentType;
}): Promise<Recruitments> => {
  return axios.get('/private/user/me/recruitments', {
    params: {
      page,
      limit,
      type,
    },
  });
};

type QueryFnType = typeof getMyRecruitments;

type UseMyRecruitmentsOptions = {
  page?: number;
  limit?: number;
  type?: RecruitmentType;
  config?: QueryConfig<QueryFnType>;
};

export const useMyRecruitments = ({ page, limit, type, config = {} }: UseMyRecruitmentsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['recruitment', page, limit, type],
    queryFn: () => getMyRecruitments({ page, limit, type }),
    staleTime: Infinity,
    ...config,
  });
};
