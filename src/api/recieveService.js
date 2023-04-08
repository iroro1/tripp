import { getApiPath } from "../config";
import * as http from "./httpService";

const apiRecieveGoods = getApiPath("purchases", "inventory-items");
const apiCreateGoods = getApiPath("purchases", "create-goods");
const apiOverviewRecieveGoods = getApiPath(
  "purchases",
  "inventory-items-overview"
);
const apiBulkRecieveGoods = getApiPath(
  "purchases",
  "bring-in-existing-goods"
);
const apiCoa = getApiPath("banking", "chart-of-account");
const apiCoaGroup = getApiPath("banking", "chart-of-account-group");

// Bring In Bulk Goods
export const createBulkGoodsApi = async (data, token) => {
//   {
//     "customer_id": 215,
//     "products": [
//         {
//             "product_name": "Product name 1",
//             "product_unit": "Pcs",
//             "product_category": "Apparel & Accesspries",
//             "product_purchase_price": 10300,
//             "product_sale_price": 15000
//         },
//         {
//             "product_name": "Product name 2",
//             "product_unit": "Pcs",
//             "product_category": "Apparel & Accesspries",
//             "product_purchase_price": 1000,
//             "product_sale_price": 2000
//         }
//     ]
// }

  try {
    return await http.apiCall.post(apiBulkRecieveGoods, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Bulk
export const bulkUploadPurchase = async (data, token) => {
  //   {
  //     "entity_type": "product",
  //     "items": [

  //     ]
  // }
  try {
    return await http.apiCall.post(apiPurchaseBulkUpload, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// //////////////////
// COA GROUP
export const createCoaGroupApi = async (data, token) => {
  /***
   * {
    "customer_id": 8,
    "group_name": "Ikeja Accessories"
}
   */

  try {
    return await http.apiCall.post(apiCoaGroup, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateCoaGroupApi = async (data, token) => {
  /***
   * {
    "customer_id": 8,
    "group_name": "Ikeja Accessories"
}

   */
  try {
    return await http.apiCall.put(apiCoaGroup, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteCoaGroupApi = async (id, token) => {
  try {
    return await http.apiCall.delete(apiCoaGroup + "/" + id, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getCoaGroupApi = async (id, token) => {
  try {
    return await http.apiCall.get(apiCoaGroup + "/" + id, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listCoaGroupApi = async (data, token) => {
  let url = `${apiCoaGroup}?customer_id=${data.cust_id}`;
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
//   COA
export const listAllCoaApi = async (cust_id, token, typeParams) => {
  let url;
  if (!typeParams) {
    url = `${apiCoa}?customer_id=${cust_id}`;
  } else {
    url = `${apiCoa}?customer_id=${cust_id}&coa_query=${typeParams}`;
  }
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

export const listCoaApi = async (data, token) => {
  let url =
    data.search_value === ""
      ? `${apiCoa}?customer_id=${data.cust_id}&page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}`
      : `${apiCoa}?customer_id=${data.cust_id}&page=${data.page}&pageSize=${data.pageSize}&search_value=${data.search_value}&filter=${data.filter}`;
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
export const createCoaApi = async (data, token) => {
  /***
   * {
    "customer_id": 8,
    "account_name": "Ikeja Accessories",
    "account_group":"Accessories",
    "description": "Accessories chart of account",
    "account_type":"Asset",
    "account_category": "Current Assets"
    }
   */
  try {
    return await http.apiCall.post(apiCoa, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateCoaApi = async (data, token) => {
  /***
   * {
    "account_name": "Ikeja Accessories",
    "account_group":"Accessories",
    "description": "Accessories chart of account",
    "account_type":"Asset",
    "account_category": "Current Assets"
    }
   */
  try {
    return await http.apiCall.put(apiCoa + "/" + data.id, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteCoaApi = async (id, token) => {
  try {
    return await http.apiCall.delete(apiCoa + "/" + id, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getCoaApi = async (id, token) => {
  try {
    return await http.apiCall.get(apiCoa + "/" + id, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// //////////////////

//   Recieved Goods
export const listInvoicesRGApi = async (data, token) => {
  let url = data.search_value
    ? `${apiRecieveGoods}?inventory_type=GoodsIn&customer_id=${data.cust_id}&page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}&category=${data.category}&search_value=${data.search_value}`
    : `${apiRecieveGoods}?inventory_type=GoodsIn&customer_id=${data.cust_id}&page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}&category=${data.category}&search_value=`;

  console.log(url, data);
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

//   List Invoices for Create Goods
export const listInvoicesCGApi = async (data, token) => {
  let url = `${apiCreateGoods}?customer_id=${data.cust_id}&purchase_invoice_no=${data.purchase_invoice_no}`;

  console.log(url, data);
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

// Add Goods

export const addGoodsApi = async (data, token) => {
  console.log(apiRecieveGoods, data);
  try {
    return await http.apiCall.post(apiRecieveGoods, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

//   Overview Goods
export const listOverviewRGApi = async (cust_id, token, goods_in_id) => {
  let url = goods_in_id
    ? `${apiOverviewRecieveGoods}?customer_id=${cust_id}&goods_in_id=${goods_in_id}`
    : `${apiOverviewRecieveGoods}?customer_id=${cust_id}`;

  console.log(url, cust_id);
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

// Get Recieved Goods Details

export const getRecievedDetailsRGApi = async (id, cust_id, token) => {
  let url = `${apiRecieveGoods}/${id}?customer_id=${cust_id}&inventory_type=GoodsIn`;

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
