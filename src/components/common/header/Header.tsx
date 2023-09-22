import UiButton from "components/ui/button/UiButton";

import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/icons/common/logo.svg";
import { ReactComponent as ArrowDown } from "assets/icons/ui/arrow-down-simple.svg";
import { ReactComponent as Bell } from "assets/icons/ui/bell.svg";
import { ReactComponent as Lightning } from "assets/icons/ce/lightning.svg";

const Header = () => {
	const goToWallet = () => {};
	const userAvatar = "";
	let hasNotifications = true;

	return (
		<header className={styles.Header}>
			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<a href="/" className={styles.mainLink}>
							<Logo className={styles.logo} />

							BitCloud
						</a>

						<div className={styles.dropDownTrigger}>
							Exchange <ArrowDown className={styles.dropDownArrow} />
						</div>
					</div>

					<div className={styles.right}>
						<button
							className={`${styles.button} ${styles.button_shape_square}`}
						>
							<Lightning />
						</button>

						<button
							className={
								`${styles.button} ` +
								`${styles.button_shape_square} ` +
								`${styles.bell} ` +
								`${hasNotifications ? styles.bell_active : ""}`}
						>
							<Bell />
						</button>

						<UiButton
							color="dark"
							clickHandler={goToWallet}
							className={`${styles.button} ${styles.walletButton}`}
						>
							Wallet
						</UiButton>

						<div
							className={`${styles.button} ${styles.avatar}`}
						>
							{
								userAvatar &&
								<img
									src={userAvatar}
									alt="Avatar"
								/>
							}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
