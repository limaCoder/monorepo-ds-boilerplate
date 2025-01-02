import '../../styles/index.css';

import { NotificationAction } from './components/NotificationAction';
import { NotificationActions } from './components/NotificationActions';
import { NotificationContent } from './components/NotificationContent';
import { NotificationIcon } from './components/NotificationIcon';
import { NotificationRoot } from './components/NotificationRoot';

import type { INotificationActionProps } from './components/NotificationAction/types';
import type { INotificationActionsProps } from './components/NotificationActions/types';
import type { INotificationContentProps } from './components/NotificationContent/types';
import type { INotificationIconProps } from './components/NotificationIcon/types';
import type { INotificationRootProps } from './components/NotificationRoot/types';

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
