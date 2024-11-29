import { AccordionRoot } from './AccordionRoot';
import { AccordionItem } from './AccordionItem';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionContent } from './AccordionContent';

import type { IAccordionRootProps } from './AccordionRoot/types';
import type { IAccordionItemProps } from './AccordionItem/types';
import type { IAccordionTriggerProps } from './AccordionTrigger/types';
import type { IAccordionContentProps } from './AccordionContent/types';

export type {
  IAccordionRootProps,
  IAccordionItemProps,
  IAccordionTriggerProps,
  IAccordionContentProps,
};

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};
