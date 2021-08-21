import { GetService } from "../service/movieService"

export const HandleGetMovies= async ()=>{
    const result = await GetService();
    return result
}