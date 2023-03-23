import { LandingNavigator } from "@/components/navigators/LandingNavigator";
import { ContactForm } from "@/components/ContatForm";
import { Footer } from "@/components/Footer";
import styles from "./LandingPage.module.scss";
import { GetStaticProps } from "next";
import axios from "axios";
import { Blockchain, Blockchains } from "@/services/blockchains";
import { HorizontalTimeline } from "@/components/HorizontalTimeline";

interface Props {
	assets: Blockchain[];
}

export default function LandingPage(props:Props) {
	return (
		<main className={styles.main}>
			<LandingNavigator blockchains={props.assets} />
			<ContactForm />
			<Footer />
		</main>
	);
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const response = await axios.get<Blockchains>(
		"https://api.coincap.io/v2/assets"
	);

	const data = response.data.data;
	data.length = 10;
	return {
		props: {
			assets: response.data.data,
		},
		revalidate: 60,
	};
};