import { DocPropTable } from '../../../pages/components/components/DocPropTable';
import { IComponentPropsTable } from '../../../pages/components/components/DocPropTableTabs/types';
import { AccordionComponentsValuesEnum } from './components';
import { accordionComponentsProps } from './props';

const accordionPropsTable: IComponentPropsTable[] = [
  {
    componentName: AccordionComponentsValuesEnum.ROOT,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.ROOT]} />
    ),
  },
  {
    componentName: AccordionComponentsValuesEnum.ITEM,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.ITEM]} />
    ),
  },
  {
    componentName: AccordionComponentsValuesEnum.TRIGGER,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.TRIGGER]} />
    ),
  },
  {
    componentName: AccordionComponentsValuesEnum.CONTENT,
    component: (
      <DocPropTable props={accordionComponentsProps[AccordionComponentsValuesEnum.CONTENT]} />
    ),
  },
];

export { accordionPropsTable };
