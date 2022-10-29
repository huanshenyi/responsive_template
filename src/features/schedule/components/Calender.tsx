import { useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/react';
import interactionPlugin, { DateClickArg, EventDragStartArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { MY_RECRUITMENT_COLOR, JOINED_RECRUITMENT_COLOR } from 'config';

type CalenderProps = {
  eventList: EventInput[];
  handelOpenModal: () => void;
  handelSetFormTitle: (value: string) => void;
  handelSetSelectedDate: (arg: DateClickArg) => void;
  handelSetSelectedEvent: (arg: EventDragStartArg) => void;
};

export const Calender = ({
  eventList,
  handelOpenModal,
  handelSetFormTitle,
  handelSetSelectedDate,
  handelSetSelectedEvent,
}: CalenderProps) => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    handelSetSelectedDate(arg);
    handelSetFormTitle('募集追加');
    handelOpenModal();
  }, []);

  const handleEventClick = useCallback((arg: EventDragStartArg) => {
    handelSetSelectedEvent(arg);
    handelSetFormTitle('募集詳細');
    handelOpenModal();
  }, []);

  return (
    <>
      <div className="flex justify-end">
        <div className="badge badge-xs mr-1" style={{ backgroundColor: MY_RECRUITMENT_COLOR }}>
          <span className="text-white">予定</span>
        </div>
        <div className="badge badge-xs" style={{ backgroundColor: JOINED_RECRUITMENT_COLOR }}>
          <span className="text-white">応募内容</span>
        </div>
      </div>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        locale="ja"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        businessHours={true}
        editable={true}
        eventDisplay="block"
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        }}
        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        }}
        buttonText={{
          today: '今日',
          month: '月',
          week: '週',
          day: '日',
        }}
        eventSources={[eventList]}
        displayEventEnd
      />
      <div className="overflow-x-auto w-full">
        <div className="flex items-center space-x-3">
          <div>
            <div className="text-sm opacity-50 text-transparent">
              sample sample sample sample sample sample sample sample sample. sample sample sample sample sample sample.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
