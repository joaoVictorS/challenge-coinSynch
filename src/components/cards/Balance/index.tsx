import { formatDollar } from '@/utils/currency';
import Image from 'next/image';
import styles from './styles.module.scss';

export default function Balance() {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon_wrapper}>
          <Image
            src="/svgs/legal-scale.svg"
            width={40}
            height={40}
            alt="legal scale icon"
          />
        </div>
        <div className={styles.header}>
          <h4>Balance in US$</h4>
          <p>(approximately)</p>
        </div>
      </div>

      <div className={styles.amount}>
        <span>{formatDollar(32256.56, true)}</span>
      </div>
    </article>
  );
}
