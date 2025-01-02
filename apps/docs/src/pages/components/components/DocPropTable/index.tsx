import { Table } from '@monorepo-ds-boilerplate/react/table';

import { IDocPropTableProps } from './types';

export const DocPropTable = ({ props }: IDocPropTableProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head className="w-[100px]">Name</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Description</Table.Head>
          <Table.Head className="text-right">Default</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props?.map(prop => (
          <Table.Row key={prop?.name}>
            <Table.Cell className="font-medium">{prop?.name}</Table.Cell>
            <Table.Cell>{prop?.type}</Table.Cell>
            <Table.Cell className="max-w-[350px]">{prop?.description}</Table.Cell>
            <Table.Cell className="text-right">{prop?.defaultValue}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
