import { getApiPath } from "../config";
import * as http from "./httpService";

const apiBankingCreate = getApiPath("banking", "customer-banks");
const apiBankFeedsCreate = getApiPath("banking", "bank-feeds");
const apiBankSubCreate = getApiPath("banking", "bank-sub-accounts");
const apiBankRecCreate = getApiPath("banking", "bank-reconciliation");
const apiPaymentCreate = getApiPath("purchases", "payments");

const apiPaystackBanks = getApiPath("open", "list-paystack-banks");
const apiPaystackBanksDetails = getApiPath("open", "get-paystack-bank-details");

// Reconciliation
export const listBankReconciliation = async (token) => {
  console.log(apiBankRecCreate);
  try {
    return await http.apiCall.get(apiBankRecCreate, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Payment
export const createPayment = async (data, token) => {
  /***
   * {
  "customer_id": 1,  //required
  "supplier_invoices": [1,2,3], //required
  "reference": "abc", //required
  "amount": 1000.45,  //required
  "currency": "dollar",  //required
  "balance": 20.56
}
   */
  try {
    return await http.apiCall.post(apiPaymentCreate, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listPayment = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiPaymentCreate}?customer_id=${data.customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const getPayment = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiPaymentCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Bank Sub
export const createBankSub = async (data, token) => {
  try {
    return await http.apiCall.post(apiBankSubCreate, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listBankSub = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiBankSubCreate}?page=${data.pageNumber}&pageSize=${data.pageSize}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const getBankSub = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiBankSubCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteBankSub = async (id, token) => {
  try {
    return await http.apiCall.delete(`${apiBankSubCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateBankSub = async (data, token) => {
  try {
    return await http.apiCall.put(`${apiBankSubCreate}/${data.id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Bank Feeds
export const createBankFeeds = async (data, token) => {
  try {
    return await http.apiCall.post(apiBankFeedsCreate, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listBankFeeds = async (data, token) => {
  console.log(
    `${apiBankFeedsCreate}?customer_id=${data.customer_id}&page=${data.pageNumber}&pageSize=${data.pageSize}`
  );
  try {
    return await http.apiCall.get(
      `${apiBankFeedsCreate}?customer_id=${data.customer_id}&page=${data.pageNumber}&pageSize=${data.pageSize}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const getBankFeed = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiBankFeedsCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteBankFeed = async (id, token) => {
  try {
    return await http.apiCall.delete(`${apiBankFeedsCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateBankFeed = async (data, token) => {
  try {
    return await http.apiCall.put(`${apiBankFeedsCreate}/${data.id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Bank Accounts
export const createBankAccount = async (data, token) => {
  try {
    return await http.apiCall.post(apiBankingCreate, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listBankAccountsAll = async (customer_id, token) => {
  try {
    return await http.apiCall.get(`${apiBankingCreate}?customer_id=${customer_id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listBankAccounts = async (data, token) => {
  console.log(data)
  let url =data.search===""?
  `${apiBankingCreate}?customer_id=${data.customer_id}&page=${data.pageNumber}&pageSize=${data.pageSize}&filter=${data.filter}`:
  `${apiBankingCreate}?customer_id=${data.customer_id}&page=${data.pageNumber}&pageSize=${data.pageSize}&filter=${data.filter}&search_value=${data.search}`;
  try {
    return await http.apiCall.get(url,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};
export const getBankAccount = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiBankingCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteBankAccount = async (id, token) => {
  try {
    return await http.apiCall.delete(`${apiBankingCreate}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateBankAccount = async (data, token) => {
  try {
    return await http.apiCall.put(`${apiBankingCreate}/${data.id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// PAYSTACK INTEGRATION 
export const getAllPaystackBanks = async () => {
  try {
    return await http.apiCall.get(`${apiPaystackBanks}`);
  } catch (error) {
    return error.message;
  }
};
export const getPaystackBankDetails = async (account_number, bank_code) => {
  try {
    return await http.apiCall.get(
      `${apiPaystackBanksDetails}?account_number=${account_number}&bank_code=${bank_code}`, 
     );
  } catch (error) {
    return error.message;
  }
};
