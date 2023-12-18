import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    "https://nslovar.cnii-jest.ru/api/jests",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return { data, error, isLoading };
};

export default usePosts;
