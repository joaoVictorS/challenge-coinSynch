import { appendStyles } from "@/utils/styles";
import { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	design: "filled" | "ghost";
}

export function Input(props: Props) {
	return (
		<div className={appendStyles([styles.wrapper_base, styles[props.design]])}>
			{props.label && <label>{props.label}</label>}
			<div className={styles.input_wrapper}>
				<input {...props} />
			</div>
		</div>
	);
}