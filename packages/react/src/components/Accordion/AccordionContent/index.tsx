import { IAccordionContentProps } from './types';

export function AccordionContent({ children, isOpen }: IAccordionContentProps) {
  if (!isOpen) return null;

  return (
    <div className="p-4 pt-0">
      <div className="text-sm text-zinc-600 dark:text-zinc-300">{children}</div>
    </div>
  );
}
