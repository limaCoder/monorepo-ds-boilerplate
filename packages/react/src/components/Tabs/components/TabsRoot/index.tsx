import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ITabsRootProps } from './types';
import { TabsContext } from '../../contexts/TabsContext';

export function TabsRoot({ defaultValue = '', className, children, ...props }: ITabsRootProps) {
  const [selectedTab, setSelectedTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <div className={twMerge('w-full', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}
