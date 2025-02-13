import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { avatarSelector, emailSelector, fullNameSelector } from "@/store/auth/selectors.ts";

import ImageUploader from "@/components/common/image-uploader/ImageUploader.tsx";

import styles from "./SettingsProfile.module.scss";

const SettingsProfile = () => {
    const userName = useSelector((state: RootState) => fullNameSelector(state));
    const email = useSelector((state: RootState) => emailSelector(state));
    const avatar = useSelector((state: RootState) => avatarSelector(state));

    const [, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const handleFileChange = (event: FormEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;

        if (!files) {
            return;
        }

        setFile(files[0]);
        setPreview(URL.createObjectURL(files[0]));
    };

    return (
        <>
            <div>
                <div className={styles.mainInfo}>
                    <div className={styles.avatar}>
                        <img
                            src={preview || avatar}
                            alt="Avatar"
                        />

                        <ImageUploader
                            className={styles.avatarUploader}
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className={styles.mainTextInfo}>
                        {Boolean(userName) && <h3 className={styles.name}>{userName}</h3>}
                        {Boolean(email) && <span className={styles.email}>{email}</span>}

                        <button className={styles.verifiedButton}>Level 1 verified</button>
                    </div>
                </div>
            </div>

            <div></div>
        </>
    );
};

export default SettingsProfile;
