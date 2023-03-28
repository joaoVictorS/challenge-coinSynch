"use client";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { roboto } from "@/pages/_app"; // Using directly because it is not applying normally
import { appendStyles } from "@/utils/styles";
import { Input } from "../Input/index";
import styles from "./styles.module.scss";
import { Button } from "@/components/Button";
import { ChangeEvent, useCallback, useState } from "react";
import React from "react";
import { Blockchain } from "@/services/blockchains";

interface Props {
  assets: Blockchain[];
  onClose: (pickCrypt: Blockchain, amount: number) => void;
}

export function AddCrypto(props: Props) {
  const form = useForm();
  const [amount, setAmount] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const onSubmit = useCallback(() => {
    const pickCrypt = props.assets.find(
      (TopCrypto) => TopCrypto.name === selectValue
    );
    if (!pickCrypt) {
      return;
    }
    props.onClose(pickCrypt, parseFloat(amount));
  }, [amount, props.assets, selectValue]);

  const handleChange = (e: any) => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className={appendStyles([roboto.className, styles.form])} >
      <h4 className={styles.title}></h4>
      <div>
        <select
          name="cryptoName"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="">Choose Crypto</option>
          {props.assets.map((cryptoName) => {
            return (
              <option value={cryptoName.name} key={cryptoName.name}>
                {cryptoName.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.password_group}>
        <Input
          design="ghost"
          placeholder="number"
          value={amount}
          onChange={handleChange}
        />
        <Button design="ghost" className={styles.forgot_pass_btn}>
          Forgot password?
        </Button>
        {amount}
        {selectValue}
      </div>
      <Button type="submit" design="primary" className={styles.sign_custom_btn}>
        Add crypto
      </Button>
    </form>
  );
}
