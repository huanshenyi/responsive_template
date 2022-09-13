import * as React from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

type DinnerType = 'Beef' | 'Chicken' | null;
type TodaysDinnerState = {
  dinnerType: DinnerType;
};

const todaysDinnerRecoilState = atom<TodaysDinnerState>({
  key: 'todaysDinnerState',
  default: { dinnerType: null },
  effects_UNSTABLE: [persistAtom],
});

export const useTodaysDinnerState = () => {
  return useRecoilValue(todaysDinnerRecoilState);
};

export const useTodaysDinnerMutators = () => {
  const setState = useSetRecoilState(todaysDinnerRecoilState);

  const setDinner = React.useCallback((dinnerType: DinnerType) => setState({ dinnerType }), [setState]);

  return { setDinner };
};
