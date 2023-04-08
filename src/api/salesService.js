import * as http from "./httpService";
import { getApiPathNoVersionNoPath } from "../config";

const salesApiPath = getApiPathNoVersionNoPath("sales");

//============CUSTOMERS========

//create
export const createCustomerApi = async (customer_id, data, token) => {
  /*
    FORMAT
    {
    "code": "213o2173822j",  
    "contract_type": "daily",   
    "industry": "manufacturing", 
    "display_name": "KAM",
    "description": "",
    "vat_credit_terms": "",
    "vat_number": "",
    "vat_percentage": 1.03,
    "location": ""
}
     */
  console.log(`${salesApiPath}/${customer_id}/sale-customers/`, "POST", data);

  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/sale-customers/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Get
export const getCustomerByIdApi = async (customer_id, id, token) => {
  console.log(`${salesApiPath}/${customer_id}/sale-customers/${id}`, "GET");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/sale-customers/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//List
export const listCustomerByIdApi = async (customer_id, filter, search, token) => {
  console.log(
    `${salesApiPath}/${customer_id}/sale-customers?filter=${filter}&search_value=${search}`, "LIST");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/sale-customers?filter=${filter}&search_value=${search}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const listCustomerPaginationByIdApi = async (customer_id, data, token) => {
  console.log(
    `${salesApiPath}/${customer_id}/sale-customers?page=${data?.page}&pageSize=${data?.pageSize}&filter=${data?.filter}&search_value=${data.search}`, "LIST");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/sale-customers?page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}&search_value=${data.search}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const deleteCustomerByIdApi = async (customer_id, id, token) => {
  console.log(`${salesApiPath}/${customer_id}/sale-customers/${id}`, "DEL");

  try {
    return await http.apiCall.delete(
      `${salesApiPath}/${customer_id}/sale-customers/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Update
export const updateCustomerApi = async (customer_id, id, data, token) => {
  /*
      FORMAT
      {
      "contract_type": "daily",   
      "industry": "manufacturing", 
      "display_name": "KAM",
      "description": "",
      "vat_credit_terms": "",
      "vat_number": "",
      "vat_percentage": 1.03,
      "location": ""
  }
       */
  console.log(
    `${salesApiPath}/${customer_id}/sale-customers/${id}`,
    "PUT",
    data
  );

  try {
    return await http.apiCall.put(
      `${salesApiPath}/${customer_id}/sale-customers/${id}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//============INVOICES========

//create
export const createInvoiceApi = async (customer_id, data, token) => {
  /*
      FORMAT
   {
  "ref_no": "1",    //required
  "invoice_date": "2022-1-11 12:29:40",
  "due_date": "2022-1-11 12:29:40",     //required
  "notes": "abc",
  "invoice_no": 33,     //required
  "recipient_type": "Suppliers",    //required
  "recipient_id": 6,    //required
  "products": [     //required
      {
      "product": 9,
      "quantity": 22,
      "price": 22,
      "net_amount": 22,
      "discount": 1,
      "vat": 2
    },
    {
      "product": 48,
      "quantity": 22,
      "price": 22,
      "net_amount": 22,
      "discount": 1,
      "vat": 2
    }
  ]
}
       */
  console.log(`${salesApiPath}/${customer_id}/invoices/`, "POST", data);

  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/invoices/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const createServiceInvoice = async (customer_id, data, token) => {
 
  console.log(`${salesApiPath}/${customer_id}/service-invoices/`, "POST", data);

  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/service-invoices/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Get
export const getInvoiceByIdApi = async (customer_id, invoice_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/invoices/${invoice_no}`, "GET");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/invoices/${invoice_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getServInvoiceById = async (customer_id, invoice_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/service-invoices/${invoice_no}`, "GET");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/service-invoices/${invoice_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//List
export const listInvoicesByIdApi = async (
  customer_id,
  token,
  params = "categories=open,draft,paid,partially_paid,overdue,closed&search_value="
) => {
  try {
    return await http.apiCall.get(`${salesApiPath}/${customer_id}/invoices?${params}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const listServInvoicesById = async (
  customer_id,
  token,
  params = "categories=open,draft,paid,partially_paid,overdue,closed&search_value="
) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/service-invoices?${params}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const listInvoicesPaginationApi = async (
  customer_id,
  page,
  pageSize,
  token
) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/invoices?page=${page}&pageSize=${pageSize}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const deleteInvoiceByIdApi = async (customer_id, invoice_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/invoices/${invoice_no}`, "DEL");

  try {
    return await http.apiCall.delete(
      `${salesApiPath}/${customer_id}/invoices/${invoice_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const deleteServiceInvoice = async (customer_id, invoice_no, token) => {
  console.log(
    `${salesApiPath}/${customer_id}/service-invoices/${invoice_no}`,
    "DEL"
  );

  try {
    return await http.apiCall.delete(
      `${salesApiPath}/${customer_id}/service-invoices/${invoice_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Update
export const updateInvoiceByIdApi = async (
  customer_id,
  invoice_no,
  data,
  token
) => {
  /*
        FORMAT
 {
    "status": "closed",
    "notes": "sldksadj",
    "products": [{"product": 43, "quantity": 2, "price": 10, "net_amount": 20}]
}
         */
  console.log(
    `${salesApiPath}/${customer_id}/invoices/${invoice_no}`,
    "PUT",
    data
  );

  try {
    return await http.apiCall.put(
      `${salesApiPath}/${customer_id}/invoices/${invoice_no}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateServInvoiceById = async (
  customer_id,
  invoice_no,
  data,
  token
) => {
 
  console.log(
    `${salesApiPath}/${customer_id}/service-invoices/${invoice_no}`,
    "PUT",
    data
  );

  try {
    return await http.apiCall.put(
      `${salesApiPath}/${customer_id}/service-invoices/${invoice_no}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const overviewSalesInvoiceApi = async (customer_id, token) => {
  console.log(`${salesApiPath}/${customer_id}/invoices-overview`, "GET");
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/invoices-overview`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};


export const approveInvoiceApi = async (customer_id,invoiceId, coaId, invType, token) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/invoices/${invoiceId}/approve?chart_of_account=${coaId}&invoice_type=${invType}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};



export const closeInvoiceApi = async (invoiceId, customerId, invType, token) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customerId}/invoices/${invoiceId}/close?invoice_type=${invType}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
  } catch (error) {
    return error.message;
  }
};

//============ORDERS========
//create
export const createOrderApi = async (customer_id, data, token) => {
  /*
        FORMAT
{
    "order_no": "123",  //required
    "sale_customer_id": 2,
    "ref_no": "ref_no",
    "status": "open",
    "order_date": "2022-1-11 12:29:40",
    "due_date": "2022-1-11 12:29:40",  //required
    "notes": "sldksadj",
    "products": [{"product": 43, "quantity": 2, "price": 10, "net_amount": 20}]  //required
}
         */
  console.log(`${salesApiPath}/${customer_id}/sale-orders/`, "POST", data);

  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/sale-orders/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Get
export const getOrderByIdApi = async (customer_id, order_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/sale-orders/${order_no}`, "GET");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/sale-orders/${order_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//List
export const listOrdersByIdApi = async (customer_id, token) => {
  console.log(`${salesApiPath}/${customer_id}/sale-orders/`, "LIST");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/sale-orders/`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const deleteOrderByIdApi = async (customer_id, order_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/sale-orders/${order_no}`, "DEL");

  try {
    return await http.apiCall.delete(
      `${salesApiPath}/${customer_id}/sale-orders/${order_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Update
export const updateOrderApi = async (customer_id, order_no, data, token) => {
  /*
          FORMAT
  {
    "sale_customer_id": 3,
    "ref_no": "ref_noref_noref_noref_no",
    "status": "open",
    "due_date": "2022-1-11 12:29:40",
    "notes": "sldksadj",
    "products": [{"product": 43, "quantity": 2, "price": 10, "net_amount": 20}, {"product": 43, "quantity": 2, "price": 10, "net_amount": 20}]
}
           */
  console.log(
    `${salesApiPath}/${customer_id}/sale-orders/${order_no}`,
    "PUT",
    data
  );

  try {
    return await http.apiCall.put(
      `${salesApiPath}/${customer_id}/sale-orders/${order_no}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//============QUOTES========

//create
export const createQuoteApi = async (customer_id, data, token) => {
  /*
          FORMAT
{
    "quote_no": "213o217382e",  //required
    "sale_customer_id": 2,
    "ref_no": "ref_no",
    "status": "open",
    "quote_date": "2022-1-11 12:29:40",
    "due_date": "2022-1-11 12:29:40",  //required
    "notes": "sldksadj",
    "products": [{"product": 43, "quantity": 2, "price": 10, "net_amount": 20}]  //required
}
           */
  console.log(`${salesApiPath}/${customer_id}/quotes/`, "POST", data);

  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/quotes/`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Get
export const getQuoteByIdApi = async (customer_id, quote_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/quotes/${quote_no}`, "GET");

  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/quotes/${quote_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//List
export const listQuotesByIdApi = async (customer_id, token) => {
  console.log(`${salesApiPath}/${customer_id}/quotes/`, "LIST");

  try {
    return await http.apiCall.get(`${salesApiPath}/${customer_id}/quotes/`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//Delete
export const deleteQuoteByIdApi = async (customer_id, quote_no, token) => {
  console.log(`${salesApiPath}/${customer_id}/quotes/${quote_no}`, "DEL");

  try {
    return await http.apiCall.delete(
      `${salesApiPath}/${customer_id}/quotes/${quote_no}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Update
export const updateQuoteApi = async (customer_id, quote_no, data, token) => {
  /*
            FORMAT
 {
    "status": "closed",
    "notes": "sldksadj",
    "products": [{"product": 43, "quantity": 2, "price": 10, "net_amount": 20}]
}
             */
  console.log(`${salesApiPath}/${customer_id}/quotes/${quote_no}`, "PUT", data);

  try {
    return await http.apiCall.put(
      `${salesApiPath}/${customer_id}/quotes/${quote_no}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// ==========RECEIPT API==========

export const createSalesReceiptApi = async (customer_id, data, token) => {
  /**
   * PAYLOAD
    {
      "sale_invoices": [33, 34],
      "amount": 1,
      "sale_customer_id": 1,
      "receipt_no": "123",
      "reference_no": "as",
      "payment_type": "abc",
      "account": "as",
      "paid_by": 1,
      "notes": "adwalkdjwadlkwajdlkwn",
      "due_date": "2022-1-11 12:29:40"
    }
  */
  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/receipts`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const createSalesServReceipt = async (customer_id, data, token) => {
  
  try {
    return await http.apiCall.post(
      `${salesApiPath}/${customer_id}/receipts&invoice_type=service`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const listSalesReceiptApi = async (
  customer_id,
  token,
  params = "search_value="
) => {
  try {
    return await http.apiCall.get(`${salesApiPath}/${customer_id}/receipts?${params}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const listSalesReceiptPaginationApi = async (
  customer_id,
  page,
  pageSize,
  token
) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/receipts?page=${page}&pageSize=${pageSize}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const getSalesReceiptApi = async (customer_id, id, token) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/receipts/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
// export const updateSalesReceiptApi = () => {

// }
export const deleteSalesReceiptApi = async (customer_id, id, token) => {
  console.log(`${salesApiPath}/${customer_id}/receipts/${id}`, "DELETE");
  try {
    return await http.apiCall.delete(
      `${salesApiPath}/${customer_id}/receipts/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const overviewSalesReceiptApi = async (customer_id, token) => {
  try {
    return await http.apiCall.get(
      `${salesApiPath}/${customer_id}/receipts-overview`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
