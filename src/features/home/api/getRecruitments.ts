import { useQuery } from 'react-query';

import { axios } from 'lib/axios';
import { QueryConfig, ExtractFnReturnType } from 'lib/react-query';

import { Recruitments, RecruitmentType, RECRUITMENT } from '../types';

export const getRecruitments = ({
  page,
  limit,
  tag,
  type,
}: {
  page?: number;
  limit?: number;
  tag?: string;
  type: RecruitmentType;
}): Promise<Recruitments> => {
  return axios.get(`/public/recruitment`, {
    params: {
      page,
      limit,
      tag,
      type,
    },
  });
};

type QueryFnType = typeof getRecruitments;

type UseRecruitmentsOptions = {
  page?: number;
  limit?: number;
  tag?: string;
  type: RecruitmentType;
  config?: QueryConfig<QueryFnType>;
};

export const useRecruitments = ({ page, limit, tag, type = RECRUITMENT, config }: UseRecruitmentsOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['home/getRecruitments', page, limit, tag],
    queryFn: () => getRecruitments({ page, limit, tag, type }),
    staleTime: 3000,
    ...config,
  });
};
