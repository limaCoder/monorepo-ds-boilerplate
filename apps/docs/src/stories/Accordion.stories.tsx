import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './templates/Accordion';
import { accordionPlayTest } from './tests/Accordion/Accordion.test';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: 'Default',
  render: () => <Accordion />,
  play: accordionPlayTest,
};
