import { useState } from "react";

import UiInput from "@/components/ui/input/UiInput";

import styles from "./Footer.module.scss";
import Logo from "@/assets/icons/common/logo.svg?react";

const Footer = () => {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const testTrigger = () => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setSuccess(true);
		}, 2000);
	};

	return (
		<footer className={styles.Footer}>
			<div className="container">
				<div className={styles.top}>
					<div className={styles.col}>
						<a href="/">
							<Logo className={styles.logo} />
						</a>

						<ul className={styles.navList}>
							<li className={styles.navItem}>
								<a href="/">About</a>
							</li>

							<li className={styles.navItem}>
								<a href="/">Projects</a>
							</li>

							<li className={styles.navItem}>
								<a href="/">What We Do</a>
							</li>

							<li className={styles.navItem}>
								<a href="/">Press</a>
							</li>

							<li className={styles.navItem}>
								<a href="/">Jobs</a>
							</li>
						</ul>
					</div>

					<div className={styles.col}>
						<h5 className={styles.colHeading}>
							Contacts
						</h5>

						<p className={styles.contactList}>
							<span>43252 Borer Mountains</span>

							<span>Zackerychester</span>

							<span>Bahamas</span>

							<a href="tel:732-528-4945">732-528-4945</a>
						</p>
					</div>

					<div className={styles.col}>
						<h5 className={styles.colHeading}>
							Newsletter
						</h5>

						<div>
							<p className={styles.subscribeText}>
								Subscribe our newsletter to get more free design course and resource
							</p>
							
							<UiInput
								placeholder="E-mail"
								submitHandle={testTrigger}
								isLoading={loading}
								isSuccess={success}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.bottom}>
				<div className="container">
					<p className={styles.copyright}>
						Copyright © 2023 Vadim Ignatov Inc. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
