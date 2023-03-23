import { AppLayout } from "@/components/AppLayout";
import Balance from "@/components/cards/Balance";
import { DailyVariation } from "@/components/cards/DailyVariation";
import { News } from "@/components/cards/News";
import styles from "./styles.module.scss";

export default function Dashboard() {
	return (
		<AppLayout>
			<div className={styles.bg}>
				<main className={styles.page_content}>
					<div className={styles.quick_info_section}>
						<Balance />
						<DailyVariation />
						<News />
					</div>
				</main>
			</div>
		</AppLayout>
	);
}