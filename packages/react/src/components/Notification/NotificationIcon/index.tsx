import { INotificationIconProps } from './types';

export function NotificationIcon({ icon: Icon }: INotificationIconProps) {
  return <Icon className="w-6 h-6 text-violet-500 mt-3" />;
}
