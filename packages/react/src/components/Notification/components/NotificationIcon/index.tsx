import { INotificationIconProps } from './types';

export function NotificationIcon({ icon: Icon }: INotificationIconProps) {
  return <Icon data-testid="notification-icon" className="w-6 h-6 text-slate-500 mt-3" />;
}
