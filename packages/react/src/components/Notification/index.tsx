import { NotificationAction } from './NotificationAction';
import { NotificationActions } from './NotificationActions';
import { NotificationContent } from './NotificationContent';
import { NotificationIcon } from './NotificationIcon';
import { NotificationRoot } from './NotificationRoot';

import type { INotificationActionProps } from './NotificationAction/types';
import type { INotificationActionsProps } from './NotificationActions/types';
import type { INotificationContentProps } from './NotificationContent/types';
import type { INotificationIconProps } from './NotificationIcon/types';
import type { INotificationRootProps } from './NotificationRoot/types';

export type {
  INotificationActionProps,
  INotificationActionsProps,
  INotificationContentProps,
  INotificationIconProps,
  INotificationRootProps,
};

export const Notification = {
  Root: NotificationRoot,
  Actions: NotificationActions,
  Action: NotificationAction,
  Icon: NotificationIcon,
  Content: NotificationContent,
};
