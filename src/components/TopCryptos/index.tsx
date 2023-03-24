import { Blockchain } from '@/services/blockchains';
import { useState } from "react";
import { BlockchainTable } from "../BlockchainTable";
import { Button } from "../Button";
import styles from './styles.module.scss';

interface Props {
  blockchains: Blockchain[];
}

export function TopCryptos(props: Props) {
  const [isSample, setIsSample] = useState(true);
	const sample = props.blockchains.slice(0, 4);

  return (
    <section id="top-cryptos" className={styles.background}>
      <div className={styles.content}>
        <h3>Top Cryptos</h3>

        <BlockchainTable blockchains={isSample ? sample : props.blockchains} />
				<Button
					design="ghost"
					className={styles.custom_btn}
					onClick={() => setIsSample((prev) => !prev)}
				>
					{isSample ? "View more +" : "View less -"}
				</Button>
      </div>
    </section>
  );
}
