"use client";
import { AppLayout } from "@/components/AppLayout";
import Balance from "@/components/cards/Balance";
import { DailyVariation } from "@/components/cards/DailyVariation";
import { News } from "@/components/cards/News";
import MyWallet from "@/components/cards/MyWallet";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import axios from "axios";
import { Blockchain, Blockchains } from "@/services/blockchains";
import { Modal, ModalHandler } from "@/components/modals/Modal";
import { useRef, useState } from "react";
import { AddCrypto } from "@/components/forms/AddCrypto";

interface Props {
  assets: Blockchain[];
}

export default function Dashboard(props: Props) {
  const modaHandlerAddCrypto = useRef<ModalHandler>(null);
  const [cryptos, setCryptos] = useState<Blockchain[]>([]);

  function AddCryptou() {
    modaHandlerAddCrypto.current?.close();
    modaHandlerAddCrypto.current?.open();
  }

  function closeCrypto(pickcrypt: Blockchain, amount: number) {
    modaHandlerAddCrypto.current?.close();
    const newCrypts = [...cryptos, pickcrypt]
    setCryptos(newCrypts);

  }

  console.log(`alo${cryptos.length}`)

  return (
    <AppLayout>
      <div className={styles.bg}>
        <main className={styles.page_content}>
          <Modal ref={modaHandlerAddCrypto}>
            <AddCrypto onClose={closeCrypto} assets={props.assets} />
          </Modal>

          <div className={styles.quick_info_section}>
            <Balance />
            <DailyVariation />
            <News />
          </div>
          <MyWallet onAddCrypto={AddCryptou} assets={cryptos} />
        </main>
      </div>
    </AppLayout>
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
