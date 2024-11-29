import type { Meta, StoryObj } from '@storybook/react';
import Notification from './templates/Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  render: (props: any) => <Notification />,
  name: 'Default',
  args: {},
};
