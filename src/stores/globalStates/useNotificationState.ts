// // alertの表示管理用
// import { atomFamily, useRecoilState } from 'recoil';
// import { nanoid } from 'nanoid';

export type Notification = {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message?: string;
};

// const notificationsState = atomFamily<Notification[], string>({
//   key: 'global/notifications',
//   default: [],
// });

// export const useNotificationsState = (id: string) => {
//   const [notifications, setNotifications] = useRecoilState(notificationsState(id));

//   const addNotification = (notification: Omit<Notification, 'id'>) => {
//     setNotifications([...notifications, { id: nanoid(), ...notification }]);
//   };
//   const dismissNotification = (id: string) => {
//     setNotifications(notifications.filter((notification) => notification.id !== id));
//   };

//   return {
//     notifications,
//     addNotification,
//     dismissNotification,
//   };
// };
