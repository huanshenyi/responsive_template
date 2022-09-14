import { BaseEntity } from 'types';

export type Recruitment = {
  title: string;
  place: string;
  start: string;
  end: string;
  content: string;
  paid: boolean;
  reward: string;
  memberLimit: number;
  type: string;
  tags: string[];
} & BaseEntity;
