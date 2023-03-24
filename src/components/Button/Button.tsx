import styles from "@/components/Button/Button.module.css";
import {ButtonProps} from "@/components/Button/Button.props";
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
//import { motion } from 'framer-motion';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ArrowIcon/>
			</span>}
		</button>
	);
};
