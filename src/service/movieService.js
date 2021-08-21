import axios from "axios"

export const GetService= async ()=>{
    const ans=await axios.get("https://hellomovies.free.beeceptor.com/");
    return ans.data;

}