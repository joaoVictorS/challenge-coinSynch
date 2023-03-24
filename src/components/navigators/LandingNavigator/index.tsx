import Image from "next/image";

import { Button } from "@/components/Button";
import { HorizontalTimeline } from "@/components/HorizontalTimeLine";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Blockchain } from "@/services/blockchains";
import { useRouter } from "next/router";


import styles from "./styles.module.scss";

interface Props {
  blockchains: Blockchain[];
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function LandingNavigator(props: Props) {
  const { width, height } = useWindowSize();

  const isDesktop = (width || 0) > 768;

  const router = useRouter();

  const hashNewsLetters = "news-letters";
  const pathAndSlug= router.asPath.split('#')[0];
  const newPathNewsLetters = `${pathAndSlug}#${hashNewsLetters}`;

  const hashAboutUs = "about-us";
  const newPathAboutUs = `${pathAndSlug}#${hashAboutUs}`;

  const hashTopCripts = "top-cryptos";
  const newPathTopCripts = `${pathAndSlug}#${hashTopCripts}`;

  

  return (
    <div className={styles.background}>
      <nav className={styles.wrapper}>
        <div className={styles.left_wrapper}>
          <div className={styles.logo_container}>
            <Button design="ghost" onClick={() => {  window.location.replace(newPathNewsLetters)}}>
              <Image src="/images/logo.png" fill alt="CoinSynch logo" />
            </Button>
          </div>
          
          <div className={styles.links}>
            <Button  onClick={() => {  window.location.replace(newPathAboutUs)}} design="ghost">
              About us
            </Button>
            <Button onClick={() => {  window.location.replace(newPathTopCripts)}} design="ghost">
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
