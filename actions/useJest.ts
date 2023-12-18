import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useJest = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    id ? `https://nslovar.cnii-jest.ru/api/jests/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  return { data, error, isLoading };
};

export default useJest;
