/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { mutate } from 'swr';
import httpClient from '@libs/httpClient';
import { getSession, useSession } from 'next-auth/react';

const useApi = (): any => {
    const { data: session } = useSession();
    const [data, setData] = useState<any>();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async (endpoint: string, id?: string): Promise<boolean> => {
        if (!endpoint) {
            throw new Error('Endpoint is required');
        }

        const getEndpoint = id !== undefined ? `${endpoint}/${id}` : endpoint;

        try {
            setIsLoading(true);

            const session = getSession();

            if (session) {
                session.then(async (auth) => {
                    const res = await httpClient.get(getEndpoint, {
                        headers: { Authorization: `Bearer ${auth?.token.jwt}` },
                    });
                    res.data && setIsLoading(false);
                    !isLoading && setData(res.data);
                });
            } else {
                const res = await httpClient.get(getEndpoint);
                res.data && setIsLoading(false);
                !isLoading && setData(res.data);
            }
            return Promise.resolve(true);
        } catch (error) {
            setIsLoading(false); // Restablece isLoading en caso de error
            setError(error);
            throw error; // Propaga el error
        }
    };

    const mutationApi = async (endpoint: string, method: string, values: any) => {
        if (!endpoint) {
            throw new Error('Endpoint is required');
        }

        try {
            const res =
                method === 'POST'
                    ? await httpClient.post(`${endpoint}`, JSON.stringify(values), {
                          headers: { Authorization: `Bearer ${session?.token.jwt}` },
                      })
                    : await httpClient.put(`${endpoint}`, JSON.stringify(values), {
                          headers: { Authorization: `Bearer ${session?.token.jwt}` },
                      });

            if (res.status !== 200) {
                setError(res.statusText);
                throw new Error(res.statusText); // Propaga el error
            }

            setIsLoading(false);
            mutate(endpoint, res.data, false);
            return res.data;
        } catch (error) {
            setIsLoading(false); // Restablece isLoading en caso de error
            setError(error);
            throw error; // Propaga el error
        }
    };

    return {
        data,
        error,
        isLoading,
        mutationApi,
        getData,
    };
};

export default useApi;
