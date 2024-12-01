import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './templates/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => <Accordion />,
  name: 'Default',
  args: {},
};
