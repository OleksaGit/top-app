import {FooterProps} from "@/layout/Footer/Footer.props";
import styles  from "./Footer.module.css";
import cn from "classnames";
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} { ...props }>
			<div>
				Alex© 2023 - { format (new Date(), 'yyyy')} All rights reserved.
			</div>
			<a href="#" target="_blank">User agreement</a>
			<a href="#" target="_blank">Privacy policy</a>
		</footer>
	);
};
