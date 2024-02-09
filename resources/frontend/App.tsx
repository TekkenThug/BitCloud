import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Slide, ToastContainer, ToastOptions } from "react-toastify";

import { RootState } from "@/store";
import { setUser } from "@/store/auth";
import { isAuthSelector } from "@/store/auth/selectors";

import createRouter from "@/router";
import { ApiError } from "@/services/api";
import { getCurrentUser } from "@/services/api/contexts/user";
import HTTP_CODE from "@/data/httpCode";

import PageLoader from "@/components/common/page-loader/PageLoader.tsx";

import "swiper/css/grid";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/global.scss";

const toastOptions: ToastOptions = {
    theme: "dark",
    position: "bottom-right",
    pauseOnHover: false,
    draggable: false,
    transition: Slide,
};

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const isAuth = useSelector((state: RootState) => isAuthSelector(state));
    const dispatch = useDispatch();

    const router = createRouter(isAuth);

    const fetchInitialAppData = async () => {
        try {
            const { data: user } = await getCurrentUser();

            dispatch(setUser(user));
        } catch (e) {
            const err = e as ApiError;

            if (err.response?.status !== HTTP_CODE.UNAUTHORIZED) {
                console.warn(err.response?.data);
                return;
            }
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        }
    };

    useEffect(() => {
        fetchInitialAppData();
    }, []);

    return (
        <div className="app">
            {isLoading ? <PageLoader /> : <RouterProvider router={router} />}

            <ToastContainer {...toastOptions} />
        </div>
    );
};

export default App;
