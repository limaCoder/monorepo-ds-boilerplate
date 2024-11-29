enum NotificationComponentsValuesEnum {
  ROOT = 'root',
  ICON = 'icon',
  CONTENT = 'content',
  ACTIONS = 'actions',
  ACTION = 'action',
}

const NotificationComponentsNamesEnum = {
  [NotificationComponentsValuesEnum.ROOT]: 'Notification.Root',
  [NotificationComponentsValuesEnum.ICON]: 'Notification.Icon',
  [NotificationComponentsValuesEnum.CONTENT]: 'Notification.Content',
  [NotificationComponentsValuesEnum.ACTIONS]: 'Notification.Actions',
  [NotificationComponentsValuesEnum.ACTION]: 'Notification.Action',
} as const;

const notificationComponents = [
  {
    value: NotificationComponentsValuesEnum.ROOT,
    name: NotificationComponentsNamesEnum[NotificationComponentsValuesEnum.ROOT],
  },
  {
    value: NotificationComponentsValuesEnum.ICON,
    name: NotificationComponentsNamesEnum[NotificationComponentsValuesEnum.ICON],
  },
  {
    value: NotificationComponentsValuesEnum.CONTENT,
    name: NotificationComponentsNamesEnum[NotificationComponentsValuesEnum.CONTENT],
  },
  {
    value: NotificationComponentsValuesEnum.ACTIONS,
    name: NotificationComponentsNamesEnum[NotificationComponentsValuesEnum.ACTIONS],
  },
  {
    value: NotificationComponentsValuesEnum.ACTION,
    name: NotificationComponentsNamesEnum[NotificationComponentsValuesEnum.ACTION],
  },
];

export {
  NotificationComponentsValuesEnum,
  NotificationComponentsNamesEnum,
  notificationComponents,
};
