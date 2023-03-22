import { LandingNavigator } from "@/components/navigators/LandingNavigator";
import styles from "./LandingPage.module.scss";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <LandingNavigator />
    </main>
  );
}