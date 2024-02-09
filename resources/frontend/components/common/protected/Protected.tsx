import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    isAllowed: boolean;
    redirect?: string;
    children: ReactNode;
}

const Protected: FC<Props> = ({ isAllowed, redirect = "/", children }) => {
    if (isAllowed) {
        return children;
    } else {
        return <Navigate to={redirect} />;
    }
};

export default Protected;
