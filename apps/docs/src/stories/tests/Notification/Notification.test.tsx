import { expect, within, userEvent, spyOn } from '@storybook/test';
import { NotificationTestProps } from './types';

export const notificationPlayTest = async ({ canvasElement }: NotificationTestProps) => {
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
};
