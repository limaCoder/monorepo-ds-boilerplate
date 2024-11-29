import type { Meta, StoryObj } from '@storybook/react';
import Notification from './templates/NotificationStories';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Primary: Story = {
  render: (props: any) => <Notification />,
  name: 'Primary',
  args: {},
};
