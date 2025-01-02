import { ChevronDown } from 'lucide-react';
import { IAccordionTriggerProps } from './types';
import { twMerge } from 'tailwind-merge';

export function AccordionTrigger({ title, isOpen, onClick }: IAccordionTriggerProps) {
  const isOpenStyle = isOpen ? 'transform rotate-180' : '';

  return (
    <button className="w-full flex items-center justify-between p-4 text-left" onClick={onClick}>
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">{title}</span>
      <ChevronDown
        className={twMerge('w-4 h-4 text-zinc-500 transition-transform duration-200', isOpenStyle)}
      />
    </button>
  );
}
