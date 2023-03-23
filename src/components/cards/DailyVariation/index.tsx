import { formatDollar } from '@/utils/currency';
import Image from 'next/image';
import styles from './styles.module.scss';

export function DailyVariation() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <span className={styles.card_title}>Daily Variation</span>
        <div className={styles.coin}>
          <div className={styles.symbol}>
            <Image
              src="/images/eth.jpg"
              width={24}
              height={24}
              alt="Ethereum"
            />
            <span>ETH</span>
          </div>
          <span className={styles.amount_change}>
            {'+' + formatDollar(5.65, true) + '%'}
          </span>
        </div>
      </div>
      <div>
        <Image
          src="/images/fake_chart.png"
          alt="Chart"
          width={187}
          height={112}
        />
      </div>
    </article>
  );
}
