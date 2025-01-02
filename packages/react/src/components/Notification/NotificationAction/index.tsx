import { INotificationActionProps } from './types';
import { twMerge } from 'tailwind-merge';

export function NotificationAction({ icon: Icon, ...rest }: INotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'w-8 h-8 flex rounded items-center justify-center transition-colors bg-zinc-500 hover:bg-zinc-400',
        rest.className,
      )}
    >
      <Icon className="w-3 h-3 text-zinc-50 " />
    </button>
  );
}
