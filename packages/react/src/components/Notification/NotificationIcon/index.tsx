import { INotificationIconProps } from './types';

export function NotificationIcon({ icon: Icon }: INotificationIconProps) {
  return <Icon className="w-6 h-6 text-yellow-400 mt-3" />;
}
