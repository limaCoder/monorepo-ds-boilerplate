import { useState } from 'react';
import { Accordion } from '@monorepo-ds-boilerplate/react/accordion';
import { items } from './data';

export default function AccordionTemplate() {
  const [openItemState, setOpenItemState] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    const isOpen = openItemState === index ? null : index;

    setOpenItemState(isOpen);
  };

  return (
    <Accordion.Root>
      {items?.map((item, index) => {
        const isOpen = openItemState === index;

        return (
          <Accordion.Item key={index}>
            <Accordion.Trigger
              title={item?.title}
              isOpen={isOpen}
              onClick={() => handleToggle(index)}
            />
            <Accordion.Content isOpen={isOpen}>{item?.content}</Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
