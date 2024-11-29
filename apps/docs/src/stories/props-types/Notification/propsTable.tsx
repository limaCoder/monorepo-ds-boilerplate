import { DocPropTable } from '../../../pages/components/components/DocPropTable';
import { IComponentPropsTable } from '../../../pages/components/components/DocPropTableTabs/types';
import { NotificationComponentsValuesEnum } from './components';
import { notificationComponentsProps } from './props';

const notificationPropsTable: IComponentPropsTable[] = [
  {
    componentName: NotificationComponentsValuesEnum.ROOT,
    component: (
      <DocPropTable props={notificationComponentsProps[NotificationComponentsValuesEnum.ROOT]} />
    ),
  },
  {
    componentName: NotificationComponentsValuesEnum.ICON,
    component: (
      <DocPropTable props={notificationComponentsProps[NotificationComponentsValuesEnum.ICON]} />
    ),
  },
  {
    componentName: NotificationComponentsValuesEnum.CONTENT,
    component: (
      <DocPropTable props={notificationComponentsProps[NotificationComponentsValuesEnum.CONTENT]} />
    ),
  },
  {
    componentName: NotificationComponentsValuesEnum.ACTIONS,
    component: (
      <DocPropTable props={notificationComponentsProps[NotificationComponentsValuesEnum.ACTIONS]} />
    ),
  },
  {
    componentName: NotificationComponentsValuesEnum.ACTION,
    component: (
      <DocPropTable props={notificationComponentsProps[NotificationComponentsValuesEnum.ACTION]} />
    ),
  },
];

export { notificationPropsTable };
