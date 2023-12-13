import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
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
