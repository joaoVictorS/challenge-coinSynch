import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { Blockchain } from '@/services/blockchains';
import styles from './styles.module.scss';
import { formatDollar } from '@/utils/currency';
import { Button } from '../Button';

interface Props {
  blockchains: Blockchain[];
}

const columnHelper = createColumnHelper<Blockchain>();

export function BlockchainTable(props: Props) {
  const table = useReactTable({
    data: props.blockchains,
    columns: [
      {
        header: 'Crypto',
        accessorFn: (row) => `${row.name} ${row.symbol}`
      },
      {
        header: 'Price',
        accessorFn: (row) => formatDollar(row.priceUsd)
      },
      {
        header: 'Change',
        accessorFn: (row) => formatDollar(row.changePercent24Hr)
      },
      {
        header: 'Trade',
        cell: (row) => (
          <Button type="button" design="primary">
            Buy
          </Button>
        )
      }
    ],
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
