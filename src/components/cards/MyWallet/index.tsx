import { Button } from "@/components/Button";
import { MyWalletTable } from "@/components/MyWalletTable";
import WalletEmpty from "@/components/WalletEmpty";
import { Blockchain } from "@/services/blockchains";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  assets: Blockchain[];
  onAddCrypto: () => void;
}

export default function MyWallet(props: Props) {
  const [isSample, setIsSample] = useState(true);
  const sample = props.assets.slice(0, 4);

  return (
    <article className={styles.containerWallet}>
      <div className={styles.topo_card}>
        <div className={styles.card_title}>
          <span className={styles.title_wallet}>
            <Image
              src="/svgs/wallet.svg"
              width={32}
              height={32}
              alt="email icon"
              loading="lazy"
            />
            <span>My Wallet</span>
          </span>
        </div>
        <div className={styles.add_cripto}>
          <Button design="primary" onClick={props.onAddCrypto}>
            + add Crypto
          </Button>
        </div>
      </div>
      <section id="top-cryptos" className={styles.background}>
        {props.assets.length === 0 ? <WalletEmpty /> : (
          <div className={styles.content}>
            <MyWalletTable blockchains={isSample ? sample : props.assets} />
          </div>
        )}
        {props.assets.length <= 4 ? null : (
          <Button
            design="ghost"
            className={styles.custom_btn}
            onClick={() => setIsSample((prev) => !prev)}
          >
            {isSample ? "View more +" : "View less -"}
          </Button>
        )}
      </section>
    </article>
  );
}
