import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import Accordion from './templates/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: 'Default',
  render: () => <Accordion />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getAllByRole('button')[0];

    await userEvent.click(trigger);
    await expect(canvas.getByTestId('accordion-content')).toBeVisible();

    await userEvent.click(trigger);
    await expect(canvas.queryByTestId('accordion-content')).not.toBeInTheDocument();
  },
};
