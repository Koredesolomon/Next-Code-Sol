import { useState } from "react";

const useApi = () => {
    const [loading, setLoading] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState()

    const request = async (url, args = {}) => {
        setLoading(true)
        try {
            const res = await fetch(url, {
                ...args,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...args.headers
                  },
            })
            if (res.status === 200 || res.status === 201) {
                setData(await res.json())
            } else {
                setError(await res.json())
            }
        } catch(e) {
            setError(e)
        }
        setLoading(false);
    }

    return {
        loading,
        data,
        error,
        request
    }
}

export default useApi;