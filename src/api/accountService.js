import { getApiPath } from "../config";
import * as http from "./httpService";
const apiUploadImg = getApiPath("core", "upload");


export const uploadAccountLogo = async (data, token) => {
    try {
      return await http.apiCall.post(
        `${apiUploadImg}/logo/${data.subId}.png`,
        data.file,
        {
          headers: {
            "Content-Type": "image/png",
            Authorization: token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };