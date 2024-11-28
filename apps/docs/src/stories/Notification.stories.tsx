import type { Meta, StoryObj } from '@storybook/react';
import Notification from './templates/NotificationStories';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Notification>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props: any) => <Notification />,
  name: 'Primary',
  args: {},
};
