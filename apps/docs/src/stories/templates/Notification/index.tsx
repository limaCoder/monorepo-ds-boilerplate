import { Notification } from '@monorepo-ds-boilerplate/react/notification';
import { Check, Rocket, X } from 'lucide-react';

export default function NotificationTemplate() {
  return (
    <Notification.Root>
      <Notification.Icon icon={Rocket} />
      <Notification.Content text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid iusto, sit libero illum, dolor saepe commodi aperiam maiores quas pariatur ipsum? Sed quam provident iure, officia adipisci nostrum laborum." />
      <Notification.Actions>
        <Notification.Action
          icon={X}
          onClick={() => {
            console.log('entrou');
          }}
        />
        <Notification.Action
          icon={Check}
          className="bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-400 dark:hover:bg-yellow-500"
        />
      </Notification.Actions>
    </Notification.Root>
  );
}
