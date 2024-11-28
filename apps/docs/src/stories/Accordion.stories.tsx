import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './templates/AccordionStories';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props: any) => <Accordion />,
  name: 'Primary',
  args: {},
};
