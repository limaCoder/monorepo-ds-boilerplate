import type { Meta, StoryObj } from '@storybook/react';
import Notification from './templates/Notification';

import { notificationPlayTest } from './tests/Notification/Notification.test';

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
  play: notificationPlayTest,
};
