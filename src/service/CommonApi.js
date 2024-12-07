import axios from "axios";

const commonApi=async(httpMethod,url,data)=>
{

    const reqConfig={
        method:httpMethod,
        url:url,
        data:data
    }
        return await  axios(reqConfig).then(res=>{
            return res
        }).catch(err=>{
            return err
        })
        

}
export default commonApi


