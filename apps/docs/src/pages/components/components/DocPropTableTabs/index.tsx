import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../../components/ui/tabs';
import { IDocPropTableTabsProps } from './types';

export const DocPropTableTabs = ({ components, componentsPropsTable }: IDocPropTableTabsProps) => {
  return (
    <Tabs defaultValue={components[0]?.value}>
      <TabsList>
        {components?.map(component => (
          <TabsTrigger
            className="text-white data-[state=active]:bg-gray-600"
            value={component?.value}
          >
            {component?.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {componentsPropsTable?.map(element => (
        <TabsContent value={element?.componentName}>{element?.component}</TabsContent>
      ))}
    </Tabs>
  );
};