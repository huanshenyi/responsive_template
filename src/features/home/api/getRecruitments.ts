import { useQuery } from 'react-query';

import { axios } from 'lib/axios';

import { Recruitment } from '../types';

export const getRecruitments = (): Promise<Recruitment[]> => {
  return axios.get(`/public/recruitments`);
};

export const useRecruitments = () => {
  return useQuery({ queryKey: ['home/getRecruitments'], queryFn: getRecruitments });
};
