import { INotificationRootProps } from './types';

export function NotificationRoot({ children }: INotificationRootProps) {
  return (
    <div className="bg-zinc-200 rounded dark:bg-zinc-800 px-8 py-4 flex items-center gap-6 max-w-2xl">
      {children}
    </div>
  );
}
