import type { ReactElement } from 'react';
import { EventInput } from '@fullcalendar/react';
import { useState } from 'react';
import { DateClickArg, EventDragStartArg } from '@fullcalendar/interaction';

import { Calender, useMyJoinRecruitments, useMyRecruitments, CreateRecruitmentForm } from 'features/schedule';
import { Modal } from 'components/Modal';
import { Spinner } from 'components/Elements';
import Layout from 'components/Layout';
import type { NextPageWithLayout } from 'pages/_app';
import { useNotificationStore } from 'stores';
import { MY_RECRUITMENT_COLOR, JOINED_RECRUITMENT_COLOR } from 'config';

const Schedule: NextPageWithLayout = () => {
  const { data, isLoading, isError } = useMyJoinRecruitments();
  const [addFormOpen, setAddFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState<string>('募集追加');
  const myRecruitmentsStore = useMyRecruitments();
  const [selectedDate, setSelectedDate] = useState<DateClickArg>();
  const [selectedEvent, setSelectedEvent] = useState<EventDragStartArg>();

  const handelOpenModal = () => {
    setAddFormOpen((value) => !value);
  };

  const handelSetFormTitle = (value: string) => {
    setFormTitle(value);
  };

  const handelSetSelectedDate = (arg: DateClickArg) => {
    setSelectedDate(arg);
    console.log('dataclick:', arg);
  };

  const handelSetSelectEvent = (arg: EventDragStartArg) => {
    setSelectedEvent(arg);
    console.log('Eventclick:', arg);
  };

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
          <Calender
            eventList={evevtList}
            handelOpenModal={handelOpenModal}
            handelSetFormTitle={handelSetFormTitle}
            handelSetSelectedDate={handelSetSelectedDate}
            handelSetSelectedEvent={handelSetSelectEvent}
          />
        </div>
      </div>
      <Modal title={formTitle} isOpen={addFormOpen} handelOpenModal={handelOpenModal}>
        <CreateRecruitmentForm selectedDate={selectedDate} />
      </Modal>
    </div>
  );
};

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Schedule;
