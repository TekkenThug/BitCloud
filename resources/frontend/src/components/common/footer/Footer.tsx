import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import UiInputConfirm from "@/components/ui/input/input-confirm/UiInputConfirm.tsx";

import styles from "./Footer.module.scss";

import Logo from "@/assets/icons/common/logo.svg?react";
import ArrowDownSimple from "@/assets/icons/ui/arrow-down-simple.svg?react";

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

	// TODO: make hook
	const list = useRef<HTMLUListElement>(null);
	const [isVisible, toggleVisibility] = useState(false);
	const [listHeight, setListHeight] = useState(0);
	const slideDownAnimation = useSpring({
		to: {
			height: isVisible ? listHeight + 20 : 0,
			paddingTop: isVisible ? 20 : 0
		},
	});
	useEffect(() => {
		if (list && list.current) {
			setListHeight(list.current.offsetHeight);
		}
	}, []);

	const links = [
		{
			title: "About",
			link: "/"
		},
		{
			title: "Projects",
			link: "/"
		},
		{
			title: "What We Do",
			link: "/"
		},
		{
			title: "Press",
			link: "/"
		},
		{
			title: "Jobs",
			link: "/"
		}
	];

	return (
		<footer className={styles.Footer}>
			<div className="container">
				<div className={styles.top}>
					<div className={styles.col}>
						<a
							href="/"
							className={styles.siteLink}
						>
							<Logo className={styles.logo} /> <span className={styles.siteName}>BitCloud</span>
						</a>

						<button
							className={styles.navToggle}
							onClick={() => toggleVisibility(!isVisible)}
						>
							Navigation <ArrowDownSimple className={`${styles.navArrowIcon} ${isVisible ? styles.navArrowIcon_rotated : ""}`} />
						</button>

						<ul
							ref={list}
							className={`${styles.navList} ${styles.navList_desktop}`}
						>
							{
								links.map(item => (
									<li
										key={item.title}
										className={styles.navItem}
									>
										<a href={item.link}>{item.title}</a>
									</li>
								))
							}
						</ul>

						<animated.ul
							style={slideDownAnimation}
							className={`${styles.navList} ${styles.navList_mobile}`}
						>
							{
								links.map(item => (
									<li
										key={item.title}
										className={styles.navItem}
									>
										<a href={item.link}>{item.title}</a>
									</li>
								))
							}
						</animated.ul>
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

						<div className={styles.subscribe}>
							<p className={styles.subscribeText}>
								Subscribe our newsletter to get more free design course and resource
							</p>

							<UiInputConfirm
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
