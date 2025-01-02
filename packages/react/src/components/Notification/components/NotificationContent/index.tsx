import { INotificationContentProps } from './types';

export function NotificationContent({ text }: INotificationContentProps) {
  return (
    <div data-testid="notification-content" className="flex-1 flex flex-col gap-2">
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">{text}</p>
      <div className="text-xs text-zinc-200 flex items-center gap-1">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  );
}
