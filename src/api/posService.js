import { getApiPath } from "../config";
import { getCurrentClientData } from "./authService";
import * as http from "./httpService";
import { log } from "./logService";

const apiPos = getApiPath("pos", "pos");
const apiCreatePos = getApiPath("pos", "create-pos");
const apiPosOverview = getApiPath("pos", "pos-overview");

export const listPosApi = async (data, token) => {
    let url = `${apiPos}?page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}&search_value=${data.search}`
    try {
      return await http.apiCall.get(url, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      return error.message;
    }
  };

  export const overviewPosApi = async (filter, token) => {
    let url = `${apiPosOverview}?filter=${filter}`
    try {
      return await http.apiCall.get(url, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      return error.message;
    }
  };

  export const createPosApi = async (data, token) => {
    /***
     * {
        "payment_method": "cash",
        "discount": 1.00,
        "vat": 1.00,
        "products": [
            {
                "product": 1,
                "quantity": 3,
                "price": 33.63,
                "net_amount": 100.89
            }
        ]
        }
     */
  
    try {
      return await http.apiCall.post(apiCreatePos, data, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      return error.message;
    }
  };