import { ButtonHTMLAttributes, ElementType } from 'react';

interface INotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export type { INotificationActionProps };
