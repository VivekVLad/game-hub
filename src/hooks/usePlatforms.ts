import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query"
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms= () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000 //24 hours
});

export default usePlatforms;