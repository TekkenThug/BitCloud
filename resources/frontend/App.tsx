import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Slide, ToastContainer, ToastOptions } from "react-toastify";
import { animated, useSpringRef, useTransition } from "@react-spring/web";

import { RootState } from "@/store";
import { setUser } from "@/store/auth";
import { isAuthSelector } from "@/store/auth/selectors";

import createRouter from "@/router";
import { Api, ApiError } from "@/services/api";
import HTTP_CODE from "@/data/httpCode";

import PageLoader from "@/components/common/page-loader/PageLoader.tsx";

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
            const user = await Api.getCurrentAuthenticatedUser();

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

    const transRef = useSpringRef();
    const transitions = useTransition(isLoading, {
        ref: transRef,
        keys: null,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0, display: "none" },
        config: {
            duration: 200,
        },
    });
    useEffect(() => {
        transRef.start();
    }, [isLoading]);

    return (
        <div className="app">
            {transitions((style, isLoading) => {
                return isLoading ? (
                    <animated.div style={style}>
                        <PageLoader />
                    </animated.div>
                ) : (
                    <animated.div style={style}>
                        <RouterProvider router={router} />
                    </animated.div>
                );
            })}

            <ToastContainer {...toastOptions} />
        </div>
    );
};

export default App;
