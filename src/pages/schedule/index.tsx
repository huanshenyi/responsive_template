import type { ReactElement } from 'react';
import { EventInput } from '@fullcalendar/react';

import { Calender, useMyJoinRecruitments, useMyRecruitments } from 'features/schedule';
import { Spinner } from 'components/Elements';
import Layout from 'components/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import { useNotificationStore } from 'stores';
import { MY_RECRUITMENT_COLOR, JOINED_RECRUITMENT_COLOR } from 'config';

const Schedule: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useMyJoinRecruitments();
  const myRecruitmentsStore = useMyRecruitments();

  if (isLoading || myRecruitmentsStore.isLoading) {
    return (
      <div className="space-y-2 md:space-y-6">
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      </div>
    );
  }

  if (isError || myRecruitmentsStore.isError) {
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message: 'ネットワークエラー',
    });
  }

  const evevtList: EventInput[] = [];
  if (data?.joinListRecruitments.length) {
    data?.joinListRecruitments.forEach((item) => {
      if (item.owner.id) {
        evevtList.push({ ...item.recruitment, backgroundColor: JOINED_RECRUITMENT_COLOR });
      }
    });
  }
  if (myRecruitmentsStore.data?.recruitments.length) {
    myRecruitmentsStore.data?.recruitments.forEach((item) => {
      evevtList.push({ ...item, backgroundColor: MY_RECRUITMENT_COLOR });
    });
  }

  return (
    <div className="space-y-2 md:space-y-6">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h1 className="md:text-3xl font-extrabold">schedule</h1>
        </div>
      </div>
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex justify-end">
            <div className="badge badge-xs mr-1" style={{ backgroundColor: MY_RECRUITMENT_COLOR }}>
              <span className="text-white">予定</span>
            </div>
            <div className="badge badge-xs" style={{ backgroundColor: JOINED_RECRUITMENT_COLOR }}>
              <span className="text-white">応募内容</span>
            </div>
          </div>
          <Calender eventList={evevtList} />
          <div className="overflow-x-auto w-full">
            <table className="table-normal w-full">
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="text-sm opacity-50 text-transparent">
                      sample sample sample sample sample sample sample sample sample. sample sample sample sample sample
                      sample.
                    </div>
                  </div>
                </div>
              </td>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Schedule;
