import { useState } from 'react';
import { Accordion } from '@monorepo-ds-boilerplate/react/accordion';

export default function AccordionTemplate() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const items = [
    {
      title: 'O que é um Design System?',
      content:
        'Um Design System é uma coleção de componentes reutilizáveis, guiados por padrões claros que podem ser montados para construir aplicações.',
    },
    {
      title: 'Como usar o Compound Pattern?',
      content:
        'O Compound Pattern permite criar componentes mais flexíveis e modulares, dividindo-os em subcomponentes menores que trabalham juntos.',
    },
  ];

  return (
    <Accordion.Root>
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Trigger
            title={item.title}
            isOpen={openItem === index}
            onClick={() => handleToggle(index)}
          />
          <Accordion.Content isOpen={openItem === index}>{item.content}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
