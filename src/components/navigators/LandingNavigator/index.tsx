import Image from "next/image";

import { Button } from "@/components/Button";
import { HorizontalTimeline } from "@/components/HorizontalTimeLine";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Blockchain } from "@/services/blockchains";

import styles from "./styles.module.scss";

interface Props {
  blockchains: Blockchain[];
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function LandingNavigator(props: Props) {
  const { width, height } = useWindowSize();

  const isDesktop = (width || 0) > 768;

  return (
    <div className={styles.background}>
      <nav className={styles.wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.logo_container}>
            <Button href="#hero-section" design="ghost">
              <Image src="/images/logo.png" fill alt="CoinSynch logo" />
            </Button>
          </div>

          <div className={styles.links}>
            <Button href="#about-us" design="ghost">
              About us
            </Button>
            <Button href="#top-cryptos" design="ghost">
              Top Cryptos
            </Button>
          </div>
        </div>

        <div className={styles.right_wrapper}>
          {isDesktop ? (
            <div className={styles.timeline_constraint}>
              <HorizontalTimeline chains={props.blockchains} />
            </div>
          ) : undefined}
          <div className={styles.buttons_container}>
            <Button design="ghost" onClick={props.onSignInClick}>
              Sign in
            </Button>
            <Button design="primary" onClick={props.onSignUpClick}>
              Sign up
            </Button>
          </div>
        </div>
      </nav>
      {!isDesktop ? (
				<div className={styles.timeline_constraint}>
					<HorizontalTimeline chains={props.blockchains} />
				</div>
			) : undefined}
    </div>
  );
}
