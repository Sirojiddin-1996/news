import React, { useCallback } from 'react'

export const useHttp = () => {
    const request = useCallback(async (url, method = 'GET', body = null, headers = { "Content-type": "applicatin/json" }) => {
        try {
            const response = await fetch(url, { method, body, headers })
            if (!response.ok) {
                throw new Error(`could not fetch ${url}, status ${response.status} `);
            }
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e);
        }
    }, [])
    return { request }
}
