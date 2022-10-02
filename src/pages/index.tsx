import type { ReactElement } from 'react';
import Image from 'next/image';

import Layout from 'components/Layout';
import type { NextPageWithLayout } from './_app';
import { useRecruitments } from 'features/home/api/getRecruitments';
import { useNotificationStore } from 'stores';
import { Spinner } from 'components/Elements';
import { formatDate, relativeDate } from 'utils/format';

const Home: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useRecruitments({ type: 'recruitment' });

  if (isLoading) {
    return (
      <div className="space-y-2 md:space-y-6">
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      </div>
    );
  }

  if (isError) {
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message: 'ネットワークエラー',
    });
  }

  if (!data?.recruitments.length) {
    return (
      <div className="space-y-2 md:space-y-6">
        <h4>No Recruitments Found</h4>
      </div>
    );
  }

  return (
    <div className="space-y-2 md:space-y-6">
      {data.recruitments.map((recruitment) => {
        return (
          <div className="card card-side bg-base-200 shadow-xl" key={recruitment.recruitment.id}>
            <div className="card-body">
              <h2 className="card-title">{recruitment.recruitment.title}</h2>
              <div className="flex justify-start">
                <div className="avatar pr-2">
                  <div className="w-7 rounded-full">
                    <img src={recruitment.owner.icon} />
                  </div>
                </div>
                <div className="text-lg font-bold pr-2">{recruitment.owner.userName}</div>
                <div className="text-slate-400">{relativeDate(new Date(recruitment.recruitment.created))}</div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="pr-1">
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  {recruitment.recruitment.place}
                </div>
                <div className="flex">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <div className="pl-1">{recruitment.recruitment.memberLimit}人</div>
                </div>
              </div>
              <div className="justify-start">
                {recruitment?.recruitment?.tags?.map((tag) => {
                  return (
                    <div className="btn btn-xs btn-primary mr-2" key={tag.id}>
                      {tag.name}
                    </div>
                  );
                })}
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="stats stats-vertical md:stats-horizontal bg-base-200">
                    <div className="stat place-items-center gap-0 bg-transparent">
                      <div className="stat-title tabular-nums">開始予定時間</div>
                      <div className="text-primary">
                        {formatDate(new Date(recruitment.recruitment.start).getTime())}
                      </div>
                    </div>
                    <div className="stat place-items-center gap-0 bg-transparent">
                      <div className="stat-title tabular-nums">終了予定時間</div>
                      <div className="text-primary">{formatDate(new Date(recruitment.recruitment.end).getTime())}</div>
                    </div>
                    <div className="stat place-items-center gap-0 bg-transparent">
                      <div className="stat-title tabular-nums">報酬</div>
                      <div className="text-orange-400">
                        {recruitment.recruitment.place ? recruitment.recruitment.reward : '無報酬'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure>
              <Image src="https://api.lorem.space/image/movie?w=200&amp;h=280" alt="Movie" width={200} height={280} />
            </figure>
          </div>
        );
      })}
      <div className="flex justify-center">
        <div className="btn-group">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn btn-disabled">...</button>
          <button className="btn">99</button>
          <button className="btn">100</button>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
