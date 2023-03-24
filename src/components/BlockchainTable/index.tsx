import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import Image from "next/image";
import { Blockchain } from '@/services/blockchains';
import styles from './styles.module.scss';
import { formatDollar } from '@/utils/currency';
import { Button } from '../Button';
import { CurrencyChange } from "../CurrencyChange";

interface Props {
  blockchains: Blockchain[];
}

export function BlockchainTable(props: Props) {
  const table = useReactTable({
    data: props.blockchains,
    columns: [
      {
				header: "#",
				cell: (ctx) => <span>{ctx.row.index}</span>,
			},
      {
        header: 'Crypto',
        cell: (ctx) => {
					const row = ctx.row.original;
					const parsedCoinName = row.name.toLowerCase().replace(" ", "-");
					return (
						<span className={styles.coin_name_symbol}>
							<Image
								src={`https://cryptologos.cc/logos/${parsedCoinName}-${row.symbol.toLowerCase()}-logo.svg`}
								width={32}
								height={32}
								alt={row.name}
							/>
							<div>
								<span>{row.name}</span>
								<span>{row.symbol}</span>
							</div>
						</span>
					);
				},
      },
      {
        header: 'Price',
        accessorFn: (row) => formatDollar(Number(row.priceUsd), true),
      },
      {
        header: 'Change',
        cell: (ctx) => (
					<CurrencyChange
						value={Number(ctx.row.original.changePercent24Hr)}
						hasPercent
					/>
				),
      },
      {
        header: 'Trade',
        cell: (row) => (
          <Button className={styles.btn} type="button" design="primary">
            Buy
          </Button>
        )
      }
    ],
    getCoreRowModel: getCoreRowModel()
  });

  return (
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
  </table>
  );
}