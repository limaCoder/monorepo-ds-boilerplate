import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import { IDocPropTableProps } from './types';

export const DocPropTable = ({ props }: IDocPropTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Default</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props?.map(prop => (
          <TableRow key={prop?.name}>
            <TableCell className="font-medium">{prop?.name}</TableCell>
            <TableCell>{prop?.type}</TableCell>
            <TableCell className="max-w-[350px]">{prop?.description}</TableCell>
            <TableCell className="text-right">{prop?.defaultValue}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
