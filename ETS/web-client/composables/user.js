import { useState } from "#app";
import { disconnectNotificationSocket } from "~/utils/notificationSocket";

const runtimeConfig = useRuntimeConfig();
export const useUser = async (force = false) => {
    const user = useState("user", () => {
    });

    if (!user.value || force) {
        user.value = await initUser();
    }

    return user;
};

export const initUser = async () => {

    const user = {
        userData: [],
        pending: [],
        error: [],
        refresh: []
    };

    if (useCookie("token").value) {
        try {
            const {
                data: userData,
                pending,
                error,
                refresh
            } = await useFetch(`${runtimeConfig.public.apiBase}/me`, {
                onRequest({request, options}) {
                    options.headers = options.headers || {};
                    options.headers.authorization = useCookie("token").value;
                }
            });
            console.log("Сработала запрос на сервер user")
            user.userData = userData;
            user.pending = pending;
            user.error = error;
            user.refresh = refresh;

        } catch (err) {
            console.error(err);
        }
    }

    return user;
};


export async function logout() {
    localStorage.clear();
    const token = await useCookie('token')
    token.value = await null
    await disconnectNotificationSocket()
    return navigateTo('/')
}