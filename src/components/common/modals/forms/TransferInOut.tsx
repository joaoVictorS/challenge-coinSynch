import React from "react";
import { useState } from "react";

import { Button } from "@/components/common/Button";
import { Input } from "../../Input";

import { Cryptocoins } from "@/services/Cryptocoins";

import styles from "./styles.module.scss";
import { appendStyles } from "@/utils/styles";
import { roboto } from "@/pages/_app";
interface Props {
  assets: Cryptocoins[];
  onClose: (Cryptocoins: Cryptocoins) => void;
  cryptos: Cryptocoins[];
  crypto: Cryptocoins | void;
}

export function TransferInOut(props: Props) {
  const [amount, setAmount] = useState("");
  const [selectValue, setSelectValue] = useState("Transfer In");

  const handleChange = (e: any) => {
    setAmount(e.target.value);
  };

  const somarAmount = () => {
    if (!props.crypto?.amount) {
      return;
    }
    const newAmount = { ...props.crypto } as Cryptocoins;
    if (selectValue === "Transfer In") {
      const somarAmount = props.crypto?.amount + parseFloat(amount);
      newAmount.amount = somarAmount;
    } else {
      const subtrairAmount = props.crypto?.amount - parseFloat(amount);
      newAmount.amount = subtrairAmount;
    }
    props.onClose(newAmount);
  };

  return (
    <form
      className={appendStyles([roboto.className, styles.form])}
      id="formulario"
    >
      <div>
        <h4 className={appendStyles([roboto.className, styles.titleAddOut])}>
          <span>{props.crypto?.name} </span>
        </h4>
        <div className={styles.select}>
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option>Transfer In</option>
            <option>Transfer Out</option>
          </select>
        </div>
        <Input
          design="ghost"
          type="number"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <Button
        type="submit"
        design="primary"
        className={styles.sign_custom_btn}
        onClick={somarAmount}
      >
        Transfer coin
      </Button>
    </form>
  );
}
