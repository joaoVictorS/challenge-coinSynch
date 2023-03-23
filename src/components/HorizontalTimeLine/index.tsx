import { Blockchain } from '@/services/blockchains';
import { formatDollar } from '@/utils/currency';
import { appendStyles } from '@/utils/styles';
import styles from './styles.module.scss';

interface Props {
  chains: Blockchain[];
}

export function HorizontalTimeline(props: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        {props.chains.map((chain) => (
          <TimelineElement key={chain.id} data={chain} />
        ))}
        {props.chains.map((chain) => (
          <TimelineElement key={chain.id + ':)'} data={chain} />
        ))}
      </div>
    </div>
  );
}

interface ElementProps {
  data: Blockchain;
}

function TimelineElement(props: ElementProps) {
  const formattedChange = formatDollar(props.data.changePercent24Hr);
  const isPositive = Number(formattedChange) >= 0;

  return (
    <div key={props.data.symbol} className={styles.element}>
      <span className={styles.symbol}>{props.data.symbol}</span>

      <span className={styles.price}>
        R$ {formatDollar(props.data.priceUsd)}
      </span>
      <span
        className={appendStyles([
          styles.change,
          isPositive ? styles.positive : styles.negative
        ])}
      >
        {isPositive ? `+${formattedChange}` : formattedChange}
      </span>
    </div>
  );
}
