import { useCallback, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventInput } from '@fullcalendar/react';
import interactionPlugin, { DateClickArg, EventDragStartArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

type CalenderProps = {
  eventList: EventInput[];
};

export const Calender = ({ eventList }: CalenderProps) => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    console.log(arg);
  }, []);

  const handleEventClick = useCallback((arg: EventDragStartArg) => {
    console.log(arg);
  }, []);

  return (
    <>
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        locale="ja"
        initialEvents={[{ title: 'initial event', start: new Date() }]}
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
    </>
  );
};
