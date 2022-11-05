import { BaseEntity } from 'types';
import { number } from 'zod';

export type Recruitment = {
  title: string;
  place: string;
  start: string;
  end: string;
  content: string;
  paid: boolean;
  reward: string;
  memberLimit: number;
  type: RecruitmentType;
  created?: string;
  tags?: any[];
  owner: {
    id: number;
    userName: string;
    icon: string;
  };
} & BaseEntity;

export type Owner = {
  icon: string;
  userName: string;
} & BaseEntity;

export type RecruitmentOwner = {
  owner: Owner;
  recruitment: Recruitment;
};

export type JoinRecruitments = {
  joinListRecruitments: RecruitmentOwner[];
  totalCount: number;
  totalPage: number;
};

export type Recruitments = {
  recruitments: RecruitmentOwner[];
  totalCount: number;
  totalPage: number;
};

export const RECRUITMENT = 'recruitment';
export const FREETIME = 'freetime';
export type RecruitmentType = typeof RECRUITMENT | typeof FREETIME;

export type Tag = {
  id: number;
  name: string;
  status: number;
};

export type Tags = Tag[];
