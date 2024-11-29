import { IProps } from '../../../pages/components/components/DocPropTable/types';
import { NotificationComponentsValuesEnum } from './components';

const notificationRootProps: IProps[] = [
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Pass in the children that will be rendered within the Notification',
    defaultValue: 'null',
  },
];

const notificationIconProps: IProps[] = [
  {
    name: 'icon',
    type: 'ElementType',
    description: 'Insert a main icon to the notification',
    defaultValue: 'null',
  },
];

const notificationContentProps: IProps[] = [
  {
    name: 'text',
    type: 'ReactNode',
    description: 'Insert text into the notification content',
    defaultValue: 'null',
  },
];

const notificationActionsProps: IProps[] = [
  {
    name: 'children',
    type: 'ReactNode',
    description: 'Pass in the children that will be rendered within the Notification',
    defaultValue: 'null',
  },
];

const notificationActionProps: IProps[] = [
  {
    name: 'icon',
    type: 'ElementType',
    description: 'Insert a icon into the notification action',
    defaultValue: 'null',
  },
  {
    name: 'rest',
    type: 'string',
    description: 'Can apply styles using the className attribute',
    defaultValue: '""',
  },
];

const notificationComponentsProps = {
  [NotificationComponentsValuesEnum.ROOT]: notificationRootProps,
  [NotificationComponentsValuesEnum.ICON]: notificationIconProps,
  [NotificationComponentsValuesEnum.CONTENT]: notificationContentProps,
  [NotificationComponentsValuesEnum.ACTIONS]: notificationActionsProps,
  [NotificationComponentsValuesEnum.ACTION]: notificationActionProps,
};

export { notificationComponentsProps };
