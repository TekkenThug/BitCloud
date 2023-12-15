import AuthBackground from "./background/AuthBackground.tsx";
import AuthSign from "./sign/AuthSign.tsx";

import styles from "./AuthPage.module.scss";

const AuthPage = () => {
	return (
		<div className={styles.AuthPage}>
			<AuthBackground />

			<AuthSign />
		</div>
	);
};

export default AuthPage;
