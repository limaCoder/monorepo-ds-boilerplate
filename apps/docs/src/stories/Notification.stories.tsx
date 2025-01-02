import type { Meta, StoryObj } from '@storybook/react';
import Notification from './templates/Notification';

import { expect, userEvent, within, spyOn } from '@storybook/test';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  render: () => <Notification />,
  name: 'Default',
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const consoleSpy = spyOn(console, 'log');

    const icon = canvas.getByTestId('notification-icon');
    await expect(icon).toBeInTheDocument();

    const content = canvas.getByTestId('notification-content');
    await expect(content).toBeInTheDocument();
    await expect(content).toHaveTextContent('Lorem ipsum');

    const actions = canvas.getAllByRole('button');
    await expect(actions).toHaveLength(2);

    const actionButton = actions[0];
    await userEvent.click(actionButton);
    await Promise.resolve();
    await expect(consoleSpy).toHaveBeenCalledWith('entrou');
  },
};
