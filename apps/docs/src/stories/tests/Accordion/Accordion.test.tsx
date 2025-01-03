import { expect, within, userEvent } from '@storybook/test';
import { AccordionTestProps } from './types';

export const accordionPlayTest = async ({ canvasElement }: AccordionTestProps) => {
  const canvas = within(canvasElement);
  const trigger = canvas.getAllByRole('button')[0];

  await userEvent.click(trigger);
  await expect(canvas.getByTestId('accordion-content')).toBeVisible();

  await userEvent.click(trigger);
  await expect(canvas.queryByTestId('accordion-content')).not.toBeInTheDocument();
};
