import { commonApi } from "./CommonApi";
import { serverurl } from "./Serverurl";


export const registerApi = async (reqbody) => {
  return await commonApi("POST", `${serverurl}/register`, reqbody)}

  export const getregisterApi = async () => {
    return await commonApi("GET", `${serverurl}/register`, "")
  }
  