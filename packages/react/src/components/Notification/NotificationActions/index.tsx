import { INotificationActionsProps } from './types';

export function NotificationActions({ children }: INotificationActionsProps) {
  return <div className="flex gap-2 self-center">{children}</div>;
}
