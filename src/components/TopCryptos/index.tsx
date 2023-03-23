import { Blockchain } from '@/services/blockchains';
import { BlockchainTable } from '../BlockchainTable';
import styles from './styles.module.scss';

interface Props {
  blockchains: Blockchain[];
}

export function TopCryptos(props: Props) {
  return (
    <section className={styles.background}>
      <div className={styles.content}>
        <h3>Top Cryptos</h3>

        <BlockchainTable blockchains={props.blockchains} />
      </div>
    </section>
  );
}
