import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useApi = (endpoint: string) => {
  let api = process.env.API_URL+endpoint;
  const { data, error, mutate } = useSWR("https://findatrader-jebius.koyeb.app/api/v1"+endpoint, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate
  };
};

export default useApi;