import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 Hours
})

export default useGenre;