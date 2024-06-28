const runtimeConfig = useRuntimeConfig()

export async function login(username: string, password: string) {
    try {
        return await fetch(`${runtimeConfig.public.apiBase}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
    } catch (error) {
        console.log(error)
    }
}
