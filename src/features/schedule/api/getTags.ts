import { useQuery } from 'react-query';

import { axios } from 'lib/axios';
import { ExtractFnReturnType, QueryConfig } from 'lib/react-query';
import { Tags } from '../types';

export const getTags = ({
  keyword,
  limit,
  status,
}: {
  keyword?: string;
  limit?: number;
  status?: number;
}): Promise<Tags> => {
  return axios.get('public/tags', {
    params: {
      keyword,
      limit,
      status,
    },
  });
};

type QueryFnType = typeof getTags;

type UseTags = {
  keyword?: string;
  limit?: number;
  status?: number;
  config?: QueryConfig<QueryFnType>;
};

export const useTags = ({ keyword, limit, status, config = {} }: UseTags = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['tags', keyword, limit, status],
    queryFn: () => getTags({ keyword, limit, status }),
    staleTime: Infinity,
    ...config,
  });
};
