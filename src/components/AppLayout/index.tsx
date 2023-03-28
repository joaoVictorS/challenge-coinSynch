import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Button } from '@/components/Button';
import MyWallet from '../cards/MyWallet';

interface Props {
  children: ReactNode;
}

export function AppLayout(props: Props) {
  return (
    <div className={styles.page_bg}>
      <div className={styles.nav_bg}>
        <nav className={styles.wrapper}>
          <div className={styles.left_wrapper}>
            <Image
              src="/images/logo.png"
              alt="CoinSynch logo"
              width={124}
              height={21}
            />
          </div>

          <div className={styles.right_wrapper}>
            <Image
              src="https://api.lorem.space/image/face?w=32&h=32"
              alt="Your image"
              width={32}
              height={32}
              className={styles.user_img}
            />
            <div>
              <span>Aulus</span>
              <Image
                src="/svgs/chevron.svg"
                alt="open profile options"
                width={8}
                height={8}
              />
            </div>
          </div>
        </nav>
      </div>

      <div className={styles.main_row}>
        <div className={styles.left_column}>
          <Button design="ghost">
            <Image
              src="/svgs/wallet.svg"
              width={32}
              height={32}
              alt="Wallet icon"
            />
          </Button>
          <Button design="ghost">
            <Image
              src="/svgs/ether.svg"
              width={32}
              height={32}
              alt="Ether icon"
            />
          </Button>
          <Button design="ghost">
            <Image
              src="/svgs/bitcoin.svg"
              width={32}
              height={32}
              alt="Bitcoin icon"
            />
          </Button>
          <Button design="ghost">
            <Image
              src="/svgs/chart.svg"
              width={32}
              height={32}
              alt="Chart icon"
            />
          </Button>
          
        </div>
        
        <div className={styles.main_wrapper}>{props.children}</div>
      </div>

      <footer className={styles.footer}>
        <p>Copyright © 2022 - All rights reserved</p>
      </footer>
    </div>
  );
}
