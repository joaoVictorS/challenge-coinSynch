import { Button } from "@/components/common/Button";
import styles from "./styles.module.scss";

interface Props {
    onSignInClick: () => void;
    onSignUpClick: () => void;
  }

const MenuLandingPage = (props:Props) => {
  return (

    <div className={styles.menu}>
        <div className={styles.links}>
        <Button
              href="#news-letters"
              design="ghost"
              className={styles.btnMenu}
            >
              Home
            </Button>
            <Button
              href="#about-us"
              design="ghost"
              className={styles.btnMenu}
            >
              About us
            </Button>
            <Button
              href="#top-cryptos"
              design="ghost"
              className={styles.btnMenu}
            >
              Top Cryptos
            </Button>
            <Button design="ghost" className={styles.btnMenu} onClick={props.onSignInClick}>
              Sign in
            </Button>
            <Button design="ghost" className={styles.btnMenu} onClick={props.onSignUpClick}>
              Sign up
            </Button>
            
            </div>
            
        </div>
  )
}

export default MenuLandingPage