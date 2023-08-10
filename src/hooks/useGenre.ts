import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_backgroud: string;
}

const useGenre = () => useData<Genre>("/genres");

export default useGenre;