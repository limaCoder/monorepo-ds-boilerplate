import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './templates/AccordionStories';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  render: (props: any) => <Accordion />,
  name: 'Primary',
  args: {},
};
