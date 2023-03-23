import styles from "@/components/Button/Button.module.css";
import {ButtonProps} from "@/components/Button/Button.props";
import cn from 'classnames'

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	);
};
