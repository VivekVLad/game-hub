import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cb8f2ca1d11d49e7b46e959a8fefbb15',
    },
});

export interface FetchResponse<T> {
    count:number;
    next: string | null;
    results: T[];
}

class APIClient<T> {
endpoint: string;
constructor(endpoint: string ) {
    this.endpoint = endpoint;
}
 getAll = (config: AxiosRequestConfig ) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
};
get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id ).then(res => res.data);
}

}
export default APIClient;

