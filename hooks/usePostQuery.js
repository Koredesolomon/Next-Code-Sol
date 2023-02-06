import useApi from "@/hooks/useApi";

const usePostQuery = () => {
    const { loading, data, error, request: postRequest } = useApi()

    const request = (url, body, headers = {}) => {
        postRequest(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        })
    }

    return {
        request,
        loading,
        data,
        error,
    }
}

export default usePostQuery;