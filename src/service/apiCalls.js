import commonAPI from "./CommonApi";
import SERVER_URL from "./server_url";

    export const addCategory=async(CategorieDetails)=>{
        return await commonAPI("POST",`${SERVER_URL}/allCategory`,CategorieDetails)
    
    }
    export const getCategory=async()=>{
        return await commonAPI("GET",`${SERVER_URL}/allCategory`,"")
    
    }

    export const deleteCategory=async(categoryId)=>{
        return await commonAPI ("DELETE",`${SERVER_URL}/allCategory/${categoryId}`,{})

    }
    // export const videoAddToCategory=async(categoryId,videoDetails)=>{
    //     return await commonAPI(" POST",`${SERVER_URL}/allCategory/${categoryId}`,videoDetails)
    // }
      
  export const addDailtChart=async(details)=>{
   return await commonAPI("POST",`${SERVER_URL}/Chart`,details)
   } 