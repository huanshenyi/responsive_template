import { useQuery } from 'react-query';

import { axios } from 'lib/axios';
import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';

import { JoinRecruitments, RecruitmentType } from '../types';

export const getMyJoinRecruitments = ({
  page,
  limit,
  type,
}: {
  page?: number;
  limit?: number;
  type?: RecruitmentType;
}): Promise<JoinRecruitments> => {
  return axios.get('/private/user/me/join-recruitments', {
    params: {
      page,
      limit,
      type,
    },
  });
};

type QueryFnType = typeof getMyJoinRecruitments;

type UseMyJoinRecruitmentsOptions = {
  page?: number;
  limit?: number;
  type?: RecruitmentType;
  config?: QueryConfig<QueryFnType>;
};

export const useMyJoinRecruitments = ({ page, limit, type, config = {} }: UseMyJoinRecruitmentsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['schedele/getMyJoinRecruitments', page, limit, type],
    queryFn: () => getMyJoinRecruitments({ page, limit, type }),
    staleTime: Infinity,
    ...config,
  });
};
