import { GetStaticProps } from 'next';
import Image from "next/image";
import axios from 'axios';
import { LandingNavigator } from '@/components/navigators/LandingNavigator';
import { ContactForm } from '@/components/ContatForm';
import { Footer } from '@/components/Footer';
import { Blockchain, Blockchains } from '@/services/blockchains';
import { TopCryptos } from '@/components/TopCryptos';
import { AboutUs } from '@/components/AboutUs';
import styles from './LandingPage.module.scss';
import { Hero } from '@/components/Hero';


interface Props {
  assets: Blockchain[];
}

export default function LandingPage(props: Props) {
  return (
    <main className={styles.main}>
      <LandingNavigator blockchains={props.assets} />
      <Hero />
      <div className={styles.waves}>
				<Image
					src="/svgs/waves.svg"
					alt="waves illustration"
					role="none"
					fill
				/>
			</div>
      <AboutUs />
      <TopCryptos blockchains={props.assets} />
      <ContactForm />
      <Footer />
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const response = await axios.get<Blockchains>(
    'https://api.coincap.io/v2/assets'
  );

  const data = response.data.data;
  data.length = 10;
  return {
    props: {
      assets: response.data.data
    },
    revalidate: 60
  };
};
