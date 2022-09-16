import { useNotificationStore } from 'stores';
import { Notification } from './Notification';

export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore();

  return (
    <div aria-live="assertive" className="z-50 flex flex-col inset-0 items-end px-4 py-6 sm:p-6 sm:items-start">
      {notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} onDismiss={dismissNotification} />
      ))}
    </div>
  );
};
