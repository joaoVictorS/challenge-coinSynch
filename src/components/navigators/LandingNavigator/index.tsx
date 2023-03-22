import { Button } from "@/components/Button";
import Image from "next/image";
import styles from "./styles.module.scss";

export function LandingNavigator() {
	return (
		<div className={styles.background}>
			<nav className={styles.wrapper}>
				<div className={styles.left_wrapper}>
					<div className={styles.logo_container}>
						<Image src="/images/logo.png" fill alt="CoinSynch logo" />
					</div>

					<div className={styles.links}>
						<Button href="/about-us" design="ghost">
							About us
						</Button>
						<Button href="#top-cryptos" design="ghost">
							Top Cryptos
						</Button>
					</div>
				</div>

				<div className={styles.right_wrapper}>
					<div></div>
					<Button design="ghost">Sign in</Button>
					<Button design="primary">Sign up</Button>
				</div>
			</nav>
		</div>
	);
}