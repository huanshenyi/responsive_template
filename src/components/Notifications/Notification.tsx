export type NotificationProps = {
  notification: {
    id: string;
    type: 'info' | 'success' | 'warning' | 'error';
    title: string;
    message?: string;
  };
  onDismiss: (id: string) => void;
};

export const Notification = ({ notification: { id, type, title, message }, onDismiss }: NotificationProps) => {
  return (
    <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
      <div className={`alert alert-${type} shadow-lg`}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">{title}</h3>
            <div className="text-xs">{message}</div>
          </div>
        </div>
        <div className="flex-none">
          <div
            onClick={() => {
              onDismiss(id);
            }}
          >
            x
          </div>
        </div>
      </div>
    </div>
  );
};
