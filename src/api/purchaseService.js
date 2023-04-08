import { getApiPath } from "../config";
import { getCurrentClientData } from "./authService";
import * as http from "./httpService";
import { log } from "./logService";

const apiSendPurchaseInvoice = getApiPath("purchases", "send-invoice");
const apiCreateSupplier = getApiPath("purchases", "suppliers");
const apiCreateOrder = getApiPath("purchases", "orders");
const apiCreateService = getApiPath("purchases", "services");
const apiListService = getApiPath("purchases", "services");
const apiCreateSupplierInvoice = getApiPath("purchases", "supplier-invoices");
const apiCreateCreditNote = getApiPath("purchases", "credit-notes");
const apiCreateProducts = getApiPath("purchases", "products");
const apiCreateContacts = getApiPath("purchases", "contacts");
const apiPurchaseBulkUpload = getApiPath("purchases", "bulk-upload");
const apiCreateBanking = getApiPath("banking", "banking");
const apiInventoryItems = getApiPath("purchases", "inventory-items");
const apiPayments = getApiPath("purchases", "payments");
const apiOverviewSupplierInvoice = getApiPath(
  "purchases",
  "supplier-invoices-overview"
);
const apiOverviewInventory = getApiPath(
  "purchases",
  "inventory-items-overview"
);
const apiOverviewProducts = getApiPath("purchases", "products-overview");
const apiOverviewSupplierCreditNote = getApiPath(
  "purchases",
  "credit-notes-overview"
);
const fileUpload = getApiPath("core", "upload-file");

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
// Suppliers
export const createSupplierApi = async (data, token) => {
  /***
      * FORMAT
      * {
   "customer_id": 1,      //required
   "code": "1ABC",           //required
   "name": "ABC",         //required
   "display_name": "AVC",
   "location": "ABC",
   "contract_type": "ABC",
   "contract_description": "ABC",
   "industry": "ABC",
   "description": "ABC",
   "vat_credit_terms": "ABC",
   "vat_number": "ABC",
   "vat_percentage": 1.2,
      }
      */
  console.log(apiCreateSupplier, "POST", data);
  try {
    return await http.apiCall.post(apiCreateSupplier, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listSuppliersByCustomerIdApi = async (id, search_value, token) => {
  try {
    return await http.apiCall.get(
      `${apiCreateSupplier}?customer_id=${id}&search_value=${search_value}`,
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
export const listSuppliersByPaginationApi = async (
  id,
  search_value,
  filter,
  token
) => {
  try {
    return await http.apiCall.get(
      `${apiCreateSupplier}?customer_id=${id}&search_value=${search_value}&filter=${filter}`,
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
export const getSuppliersByIdApi = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiCreateSupplier}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getSuppliersFilterByIdApi = async (id, filter, token) => {
  try {
    return await http.apiCall.get(`${apiCreateSupplier}/${id}?filter=${filter}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteSuppliersByIdApi = async (id, token) => {
  try {
    return await http.apiCall.delete(`${apiCreateSupplier}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateSuppliersByIdApi = async (data, id, token) => {
  /***
   {
   "id": 2,               //required
   "name": "ABC",
   "display_name": "AVC",
   "location": "ABC",
   "contract_type": "ABC",
   "contract_description": "ABC",
   "industry": "ABC",
   "description": "ABC",
   "vat_credit_terms": "ABC",
   "vat_number": "ABC",
   "vat_percentage": 1.2,
   "vat_location": "ABC"
 }
        */
  console.log(`${apiCreateSupplier}/${id}`, "PUT", data);
  try {
    return await http.apiCall.put(`${apiCreateSupplier}/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getSuppliersMetaData = async (id, token) => {
  console.log(`${apiCreateSupplier}-overview?customer_id=${id}`, "GET");
  try {
    return await http.apiCall.get(
      `${apiCreateSupplier}-overview?customer_id=${id}`,
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
export const getSuppliersOverviewById = async (id, customer_id, token) => {
  console.log(
    `${apiCreateSupplier}-overview?customer_id=${customer_id}&id=${id}`,
    "GET"
  );
  try {
    return await http.apiCall.get(
      `${apiCreateSupplier}-overview?customer_id=${customer_id}&id=${id}`,
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
  export const getSuppliersOverviewFilterById = async (id, customer_id, filter, token) => {
    console.log(
      `${apiCreateSupplier}-overview?customer_id=${customer_id}&id=${id}?filter=${filter}`,
      "GET"
    );
    try {
      return await http.apiCall.get(
        `${apiCreateSupplier}-overview?customer_id=${customer_id}&id=${id}`,
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
//   Services
export const listServiceApi = async (data, token) => {
  console.log(data);
  try {
    return await http.apiCall.get(
      data.page
        ? `${apiListService}?customer_id=${data.cust_id}&pageSize=${data.pageSize}&page=${data.page}&filter=${data.filter}&search_value=${data.search_value}`
        : `${apiListService}?customer_id=${data.cust_id}&filter=${data.filter}&search_value=${data.search_value}`,
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
export const getServiceByIdApi = async (id, token) => {
  // Takes product id
  console.log(`${apiListService}/${id}`, "GET");
  try {
    return await http.apiCall.get(`${apiListService}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateServiceByIdApi = async (data, token) => {
  // Takes product id
  console.log(`${apiListService}/${data.id}`, "Put");
  try {
    return await http.apiCall.put(`${apiListService}/${data.id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const createServiceApi = async (data, token) => {
  // {
  //   "customer_id": 8,  //required
  //   "name": "ABC",  //required
  //   "category": "Test",
  //   "unit": 1.2,  //required
  //   "unit_price": 11.2,  //required
  //   "image": ""
  // }
  try {
    return await http.apiCall.post(apiCreateService, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

//   Order
export const createOrderApi = async (data, token) => {
  console.log(apiCreateOrder, "POST", data);
  try {
    return await http.apiCall.post(apiCreateOrder, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listOrdersBySupplierNCustomerApi = async (data, token) => {
  let url = data.search_value
    ? `${apiCreateOrder}?customer_id=${data.cust_id}&page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}&category=${data.category}&search_value=${data.search_value}`
    : `${apiCreateOrder}?customer_id=${data.cust_id}&page=${data.page}&pageSize=${data.pageSize}&filter=${data.filter}&category=${data.category}&search_value=`;

  console.log(url);
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

export const listOrdersWithoutFilter = async (data, token) => {
  let url = `${apiCreateOrder}?customer_id=${data.cust_id}&category=open&search_value=&filter=${data.filter}`;
  console.log(url);
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

export const getOrdersByIdApi = async (id, token) => {
  console.log(`${apiCreateOrder}/${id}`)
  try {
    return await http.apiCall.get(`${apiCreateOrder}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteOrderProductApi = async (orderId, prodId, token) => {
  try {
    return await http.apiCall.delete(
      `${apiCreateOrder}/${orderId}?product=${prodId}`,
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
export const deleteOrdersByIdApi = async (id, token) => {
  try {
    return await http.apiCall.delete(`${apiCreateOrder}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateOrdersByIdApi = async (data, id, token) => {
  console.log(`${apiCreateOrder}/${id}`, data);
  try {
    return await http.apiCall.put(`${apiCreateOrder}/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Supplier Invoice
export const createSupplierInvoiceApi = async (data, token) => {
  try {
    return await http.apiCall.post(apiCreateSupplierInvoice, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const sendSupplierInvoiceApi = async (data, token) => {
  try {
    return await http.apiCall.post(apiSendPurchaseInvoice, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
  };
  export const listSupplierInvoiceApiPaginated = async (data, token) => {

    try {
      return await http.apiCall.get(
        `${apiCreateSupplierInvoice}?customer_id=${data.cust_id}&pageSize=${data.pageSize}&page=${data.page}&categories=${data.category}&filter=${data.filter}&search_value=${data.search_value}`,
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
export const listSupplierInvoiceApi = async (
  id,
  search_value,
  category,
  token,
  filter=""
) => {
  console.log(
    `${apiCreateSupplierInvoice}?customer_id=${id}&search_value=${search_value}&categories=${category}`,
    "GET"
  );
  try {
    return await http.apiCall.get(
      filter === ""
        ? `${apiCreateSupplierInvoice}?customer_id=${id}&search_value=${search_value}&categories=${category}`
        : `${apiCreateSupplierInvoice}?customer_id=${id}&search_value=${search_value}&categories=${category}&filter=${filter}`,
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
export const listCreditNotesPaginationApi = async (
  customer_id,
  page,
  pageSize,
  search,
  category,
  token
) => {
  try {
    return await http.apiCall.get(
      `${apiCreateCreditNote}?customer_id=${customer_id}&page=${page}&pageSize=${pageSize}&search_value=${search}&category=${category}`,
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
export const supplierInvoicePaginationApi = async (
  id,
  pg,
  pgSize,
  search_value,
  category,
  token
) => {
  try {
    return await http.apiCall.get(
      `${apiCreateSupplierInvoice}?customer_id=${id}&page=${pg}&pageSize=${pgSize}&search_value=${search_value}&category=${category}`,
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
export const getSupplierInvoiceByIdApi = async (id, token) => {
  console.log(`${apiCreateSupplierInvoice}/${id}`, "GET");
  try {
    return await http.apiCall.get(`${apiCreateSupplierInvoice}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteSupplierInvoiceByIdApi = async (id, token) => {
  try {
    return await http.apiCall.delete(`${apiCreateSupplierInvoice}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateSupplierInvoiceByIdApi = async (data, id, token) => {
  console.log(`${apiCreateSupplierInvoice}/${id}`, "PUT", data);
  try {
    return await http.apiCall.put(`${apiCreateSupplierInvoice}/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const overviewSupplierInvoiceApi = async (id, token) => {
  console.log(`${apiOverviewSupplierInvoice}?customer_id=${id}`, "Overview");
  try {
    return await http.apiCall.get(
      `${apiOverviewSupplierInvoice}?customer_id=${id}`,
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

export const closeSupplierInvoice = async (invoiceId, customerId, token) => {
  try {
    return await http.apiCall.get(
      `${apiCreateSupplierInvoice}/${invoiceId}/close?customer_id=${customerId}`,
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

export const approveSupplierInvoice = async (invoiceId, coaId, token) => {
  try {
    return await http.apiCall.get(
      `${apiCreateSupplierInvoice}/${invoiceId}/approve?chart_of_account=${coaId}`,
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

// Credit Notes
export const overviewSupplierCreditNoteApi = async (id, token) => {
  console.log(`${apiOverviewSupplierCreditNote}?customer_id=${id}`, "Overview");
  try {
    return await http.apiCall.get(
      `${apiOverviewSupplierCreditNote}?customer_id=${id}`,
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
export const createCreditNotesApi = async (data, token) => {
  console.log(apiCreateCreditNote, "POST", data);
  try {
    return await http.apiCall.post(apiCreateCreditNote, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listCreditNotesApi = async (customer_id, token) => {
  console.log(`${apiCreateCreditNote}?customer_id=${customer_id}`, "GET");
  // try {
  //   return await http.apiCall.get(
  //     `${apiCreateCreditNote}?customer_id=${customer_id}&search_value=${search}&category=${category}`,
  //     {
  //       headers: {
  //         Authorization: token,
  //       },
  //     }
  //   );
  // } catch (error) {
  //       return error.message;

  // }
};
export const getCreditNotesByIdApi = async (id, token) => {
  console.log(`${apiCreateCreditNote}/${id}`, "GET");
  try {
    return await http.apiCall.get(`${apiCreateCreditNote}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteCreditNotesByIdApi = async (id, customer_id, token) => {
  console.log(`${apiCreateCreditNote}/${id}`, "DEL");
  try {
    return await http.apiCall.delete(
      `${apiCreateCreditNote}/${id}?customer_id=${customer_id}`,
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
export const updateCreditNotesByIdApi = async (data, id, token) => {
  console.log(`${apiCreateCreditNote}/${id}`, "PUT", data);
  try {
    return await http.apiCall.put(`${apiCreateCreditNote}/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Product

// OVERVIEW INV
export const getInventoryOverview = async (id, token) => {
  // https://api.dev.etiaba.com/purchases/v1/inventory-items-overview?customer_id=1
  try {
    return await http.apiCall.get(`${apiOverviewInventory}?customer_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getProductOverview = async (id, filter, token) => {
  // https://api.dev.etiaba.com/purchases/v1/products-overview/customer_id=1&filter=2022-5-10
  console.log(`${apiOverviewProducts}?customer_id=${id}&filter=${filter}`);
  try {
    return await http.apiCall.get(
      `${apiOverviewProducts}?customer_id=${id}&filter=${filter}`,
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
export const createProductsApi = async (data, token) => {
  /***
           * FORMAT
   {
  "customer_id": 1,                 //required
  "supplier_id": 1,
  "product_name": "ABC",            //required
  "product_code": "ABC",            //required
  "product_barcode_number": "ABC",  //required
  "product_category": "ABC",        //required
  "product_description": "ABC",
  "product_purchase_price": 1.2,
  "product_sale_price": 1.2,
  "product_quatity": 1,
  "product_image": "ABC",
  "exclude_from_vies": 1,
  "product_markup": 1,
  "product_sale_nominal_code": "ABC",
  "product_sale_vat_rate": "ABC",
  "product_purchase_nominal_code": "ABC",
  "product_purchase_vat_rate": "ABC",
  "product_landed_cost": 1.2,
  "product_landed_markup": 1,
  "show_popup_notification_in_transaction": 1,
  "maintain_stock_level": 1,
  "minimum_stock_level": 1.2,
  "reorder_stock_level": 1.2,
  "optimum_stock_level": 1.2,
  "exclude_from_intrastat": 1,
  "comodity_code": "ABC",
  "net_mass": 1,
  "suplemental_units": 1
}
           */
  try {
    return await http.apiCall.post(apiCreateProducts, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const uploadImagesApi = async (files, module, token) => {
  const fileArr = files.map((itm) => {
    return { folder: module, content: itm };
  });
  const data = {
    customer_id: getCurrentClientData().customer_id,
    files: fileArr,
  };

  console.log(data, files);
  try {
    return await http.apiCall.post(fileUpload, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listProductsApiByCustId = async (data, token) => {
  console.log(`${apiCreateProducts}?customer_id=${data.cust_id}`);
  try {
    return await http.apiCall.get(
      `${apiCreateProducts}?customer_id=${data.cust_id}`,
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
export const getProductByIdNew = async (
  id,
  customer_id,
  invoice_filter,
  overview_filter,
  token
) => {
  console.log(
    `${apiCreateProducts}/${id}?customer_id=${customer_id}&invoice_filter=${invoice_filter}&overview_filter=${overview_filter}`
  );
  try {
    return await http.apiCall.get(
      `${apiCreateProducts}/${id}?customer_id=${customer_id}&invoice_filter=${invoice_filter}&overview_filter=${overview_filter}`,
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
export const getProductById = async (id, token) => {
  console.log(`${apiCreateProducts}/${id}`);
  try {
    return await http.apiCall.get(
      `${apiCreateProducts}/${id}`,
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
export const listProductsApiByCustIdPaginated = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiCreateProducts}?customer_id=${data.cust_id}&pageSize=${data.pageSize}&page=${data.page}`,
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
export const listProductsApiByCustIdNSupplier = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiCreateProducts}?customer_id=${data.cust_id}&supplier_id=${data.supplier_id}`,
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
export const getProductsByIdApi = async (id, token) => {
  // Takes product id
  console.log(`${apiCreateProducts}/${id}`, "GET");
  try {
    return await http.apiCall.get(`${apiCreateProducts}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listSuppliersInProducts = async (id, token) => {
  console.log(`${apiCreateSupplier}?customer_id=${id}`);
  try {
    return await http.apiCall.get(`${apiCreateSupplier}?customer_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteProductsByIdApi = async (id, token) => {
  console.log(`${apiCreateProducts}/${id}`, "DEL");
  try {
    return await http.apiCall.delete(`${apiCreateProducts}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateProductsByIdApi = async (data, token) => {
  /***
   {
  "id": 2,                  //required
  "product_name": "ABCD",
  "product_code": "ABCD",
  "product_barcode_number": "ABCD",
  "product_category": "ABC",
  "product_description": "ABC",
  "product_purchase_price": 1.2,
  "product_sale_price": 1.2,
  "product_quantity": 1,
  "product_image": "ABC",
  "exclude_from_vies": 1,
  "product_markup": 1,
  "product_sale_nominal_code": "ABC",
  "product_sale_vat_rate": "ABC",
  "product_purchase_nominal_code": "ABC",
  "product_purchase_vat_rate": "ABC",
  "product_landed_cost": 1.2,
  "product_landed_markup": 1,
  "show_popup_notification_in_transaction": 1,
  "maintain_stock_level": 1,
  "minimum_stock_level": 1.2,
  "reorder_stock_level": 1.2,
  "optimum_stock_level": 1.2,
  "exclude_from_intrastat": 1,
  "comodity_code": "ABC",
  "net_mass": 1,
  "suplemental_units": 1
}
         */
  // console.log(`${apiCreateProducts}/${data.id}`, "PUT", data);
  try {
    return await http.apiCall.put(`${apiCreateProducts}/${data.id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Contact
export const createContactsApi = async (data, token) => {
  /***
           * FORMAT
  {
  "entity_id": 1,
  "entity_table": "Customers",
  "contact": [
    {
      "contact_type": "primary",
      "first_name": "",
      "last_name": "",
      "title": "",
      "position": "",
      "email": "",
      "phone": ""
    }
  ]
}
           */
  console.log(apiCreateContacts, "POST", data);
  try {
    return await http.apiCall.post(apiCreateContacts, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listContactsApi = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiCreateContacts}?entity_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getContactsByIdApi = async (id, token) => {
  console.log(`${apiCreateContacts}/${id}`, "GET");
  try {
    return await http.apiCall.put(`${apiCreateContacts}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const deleteContactsByIdApi = async (id, token) => {
  console.log(`${apiCreateContacts}/${id}`, "DEL");
  try {
    return await http.apiCall.delete(`${apiCreateContacts}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const updateContactsByIdApi = async (data, token) => {
  /***
  {
  "contact": [
    {
      "id": 1,
      "contact_type": "primary",
      "first_name": "",
      "last_name": "",
      "title": "",
      "position": "",
      "email": "",
      "phone": ""
    },
    {
      "entity_id": 1,
      "entity_table": "Customers",
      "contact_type": "primary",
      "first_name": "",
      "last_name": "",
      "title": "",
      "position": "",
      "email": "",
      "phone": ""
    }
  ]
}
  */
  console.log(`${apiCreateContacts}`, "PUT", data);
  try {
    return await http.apiCall.put(`${apiCreateContacts}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// Bank CRUD
export const createBankData = async (data, token) => {
  try {
    return await http.apiCall.post(apiCreateBanking, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getSupBankById = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiCreateBanking}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const upDateSupBankById = async (data, id, token) => {
  try {
    return await http.apiCall.put(`${apiCreateBanking}/${id}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

export const deleteSupBankById = async (id, token) => {
  console.log(`${apiCreateBanking}/${id}`, "DELETE");
  try {
    return await http.apiCall.delete(`${apiCreateBanking}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};

// GOODS IN
export const createGoodsIn = async (data, token) => {
  /***
   * {
  "inventory_type": "goods_in", //required
  "customer_id": 1,             //required
  "goods_in_number": 1,         //required
  "ref_number": 12,             //required
  "bill_type": "order",         //"order" or "invoice"
  "bill_number": 1,            //id of order/invoice
  "supplier_id": 1,
  "date": "2022-10-10",         //required
  "processed_by": "abc",        //required
  "notes": "asda",
  "products": [                 //required
    {
      "product": 1,
      "description": "fwf",
      "ordered": 1
    }
  ]
}

{
   */
  console.log(data, apiInventoryItems);
  try {
    return await http.apiCall.post(apiInventoryItems, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const updateGoodsIn = async (data, goodsInId, token) => {
  /***
{
  "inventory_type": "GoodsIn", //required
  "customer_id": 1,          //required
  "supplier_id": 1,
  "processed_by": "abc",     //required
  "notes": "abc",
  "products": [
    {
      "product": 1,
      "description": "abc",
      "ordered": 2
    }
  ]
}
   */
  console.log(data, apiInventoryItems, "/", goodsInId);
  try {
    return await http.apiCall.put(`${apiInventoryItems}/${goodsInId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const deleteGoodsIn = async (customer_id, goodsInId, token) => {
  console.log(
    `${apiInventoryItems}/${goodsInId}?inventory_type=GoodsIn&customer_id=${customer_id}`
  );
  try {
    return await http.apiCall.delete(
      `${apiInventoryItems}/${goodsInId}?inventory_type=GoodsIn&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getSingleGoodsInById = async (customer_id, goodsInId, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}/${goodsInId}?inventory_type=GoodsIn&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getListGoodsInById = async (customer_id, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=GoodsIn&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const listGoodsInApiByCustIdPaginated = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=GoodsIn&customer_id=${data.customer_id}&pageSize=${data.pageSize}&page=${data.pageNumber}`,
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
// GOODS OUT
export const createGoodsOut = async (data, token) => {
  /***
{
   "inventory_type": "goods_out"  //required
  "customer_id": 1,             //required
  "goods_out_number": 1,         //required
  "ref_number": 12,             //required
  "bill_type": "order",        //"order" or "invoice"
  "bill_number": 1,            //id of order/invoice
  "supplier_id": 1,
  "date": "2022-10-10",         //required
  "processed_by": "abc",        //required
  "notes": "asda",
  "products": [                 //required
    {
      "product": 1,
      "description": "fwf",
      "ordered": 1
    }
  ]
}
   */

  console.log(apiInventoryItems, data);
  try {
    return await http.apiCall.post(apiInventoryItems, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const updateGoodsOut = async (data, goodsInId, token) => {
  /***
{
  "inventory_type": "GoodsOut" //required
  "customer_id": 1,          //required
  "supplier_id": 1,
  "processed_by": "abc",     //required
  "notes": "abc",
  "products": [
    {
      "product": 1,
      "description": "abc",
      "ordered": 2
    }
  ]
}
   */
  console.log(data, apiInventoryItems, "/", goodsInId);
  try {
    return await http.apiCall.put(`${apiInventoryItems}/${goodsInId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const deleteGoodsOut = async (customer_id, goodsOutId, token) => {
  console.log(
    `${apiInventoryItems}/${goodsOutId}?inventory_type=GoodsOut&customer_id=${customer_id}`
  );
  try {
    return await http.apiCall.delete(
      `${apiInventoryItems}/${goodsOutId}?inventory_type=GoodsOut&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getSingleGoodsOutById = async (customer_id, goodsOutId, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}/${goodsOutId}?inventory_type=GoodsOut&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getListGoodsOutById = async (customer_id, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=GoodsOut&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const listGoodsOutApiByCustIdPaginated = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=GoodsOut&customer_id=${data.customer_id}&pageSize=${data.pageSize}&page=${data.pageNumber}`,
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

// ORDERS IN ADJUSTMENT
export const createOrdersInAd = async (data, token) => {
  /***
{
  "inventory_type" : "orders_in_adjustment",  //required
  "customer_id": 1,                           //required
  "adjustment_date": "",                       //required
  "adjustment_type": "TYPE",                   //required
  "product_code": 1,                           //required
  "product_description": "avc",
  "current_orders_quantity": 1,                //required
  "adjustment_quantity": 1,                    //required
  "adjusted_orders_in_quantity": 1,          //required
  "notes": "abc"
}
   */
  console.log(data, apiInventoryItems);
  try {
    return await http.apiCall.post(apiInventoryItems, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const updateOrdersInAd = async (ordersInId, data, token) => {
  /***
{
  "Inventory_type" : "OrdersInAdjustment",   //required
  "customer_id": 1,                           //required
  "adjustment_type": "TYPE",                   //required
  "product_code": 1,                           //required
  "product_description": "avc",
  "current_orders_quantity": 1,                //required
  "adjustment_quantity": 1,                    //required
  "adjusted_orders_in_quantity": 1,          //required
  "notes": "abc"
}
   */
  console.log(data, apiInventoryItems, "/", ordersInId);
  try {
    return await http.apiCall.put(`${apiInventoryItems}/${ordersInId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const deleteOrdersInAd = async (customer_id, ordersInId, token) => {
  console.log(
    `${apiInventoryItems}/${ordersInId}?inventory_type=OrdersInAdjustment&customer_id=${customer_id}`
  );
  try {
    return await http.apiCall.delete(
      `${apiInventoryItems}/${ordersInId}?inventory_type=OrdersInAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getSingleOrdersInById = async (customer_id, ordersInId, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}/${ordersInId}?inventory_type=OrdersInAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getListOrdersInById = async (customer_id, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=OrdersInAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const listOrdersInApiByCustIdPaginated = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=OrdersInAdjustment&customer_id=${data.customer_id}&pageSize=${data.pageSize}&page=${data.pageNumber}`,
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

// ORDERS OUT ADJUSTMENT
export const createOrdersOutAd = async (data, token) => {
  /***
{
  "inventory_type" : "orders_out_adjustment", //required
  "customer_id": 1,                           //required
  "adjustment_date": "",                      //required
  "adjustment_type": "TYPE",                   //required
  "product_code": 1,                           //required
  "product_description": "avc",
  "current_orders_quantity": 1,               //required
  "adjustment_quantity": 1,                   //required
  "adjusted_orders_out_quantity": 1,          //required
  "notes": "abc"
}
   */
  console.log(data, apiInventoryItems);
  try {
    return await http.apiCall.post(apiInventoryItems, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const updateOrdersOutAd = async (ordersOutId, data, token) => {
  /***
{
  "inventory_type" : "OrdersOutAdjustment",   //required
  "customer_id": 1,                             //required
  "adjustment_type": "TYPE",                    //required
  "product_code": 1,                            //required
  "product_description": "avc",
  "current_orders_quantity": 1,
  "adjustment_quantity": 1,                      //required
  "adjusted_orders_out_quantity": 1,
  "notes": "abc"
}
   */
  console.log(data, apiInventoryItems, "/", ordersOutId);
  try {
    return await http.apiCall.put(`${apiInventoryItems}/${ordersOutId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const deleteOrdersOutAd = async (customer_id, ordersOutId, token) => {
  console.log(
    `${apiInventoryItems}/${ordersOutId}?inventory_type=OrdersOutAdjustment&customer_id=${customer_id}`
  );
  try {
    return await http.apiCall.delete(
      `${apiInventoryItems}/${ordersOutId}?inventory_type=OrdersOutAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getSingleOrdersOutById = async (
  customer_id,
  ordersOutId,
  token
) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}/${ordersOutId}?inventory_type=OrdersOutAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getListOrdersOutById = async (customer_id, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=OrdersOutAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const listOrdersOutApiByCustIdPaginated = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=OrdersOutAdjustment&customer_id=${data.customer_id}&pageSize=${data.pageSize}&page=${data.pageNumber}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

// STOCK ADJUSTMENT
export const createStockAd = async (data, token) => {
  /***
{
 "inventory_type" : "stock_adjustment",   //required
  "customer_id": 1,                 //required
  "adjustment_date": "",            //required
  "adjustment_type": "TYPE",        //required
  "product_code": 1,                //required
  "product_description": "avc",
  "current_stock": 1,
  "adjustment_quantity": 1,          //required
  "adjusted_orders_in_quantity": 1,  //required
  "notes": "abc"
}
   */
  console.log(data, apiInventoryItems);
  try {
    return await http.apiCall.post(apiInventoryItems, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const updateStockAd = async (stockId, data, token) => {
  /***
{
  "inventory_type" : "StockAdjustment",   //required
  "customer_id": 1,                 //required
  "adjustment_type": "TYPE",        //required
  "product_code": 1,                //required
  "product_description": "avc",
  "current_stock": 1,
  "adjustment_quantity": 1,          //required
  "adjusted_orders_in_quantity": 1,  //required
  "notes": "abc"
}
   */
  console.log(apiInventoryItems, "/", stockId);
  try {
    return await http.apiCall.put(`${apiInventoryItems}/${stockId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    log(error.message);
  }
};
export const deleteStockAd = async (customer_id, stockId, token) => {
  console.log(
    `${apiInventoryItems}/${stockId}?inventory_type=StockAdjustment&customer_id=${customer_id}`
  );
  try {
    return await http.apiCall.delete(
      `${apiInventoryItems}/${stockId}?inventory_type=StockAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getSingleStockById = async (customer_id, ordersOutId, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}/${ordersOutId}?inventory_type=StockAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const getListStockById = async (customer_id, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=StockAdjustment&customer_id=${customer_id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    log(error.message);
  }
};
export const listStockApiByCustIdPaginated = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiInventoryItems}?inventory_type=StockAdjustment&customer_id=${data.customer_id}&pageSize=${data.pageSize}&page=${data.pageNumber}`,
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

// Payments
export const createPayment = async (data, token) => {
  /**
   * {
  "customer_id": 30,
  "supplier_invoices": [1,2,3],
  "recepient_id": 1,
  "recepient_type": "supplier", // ["supplier", "employee"]
  "reference": "abc",
  "amount": 1,
  "currency": "$",
  "account": "abc",
  "notes": "abc",
  "payment_date": "2022-10-10 12:29:40",
  "due_date": "2022-10-10 12:29:40",
  "balance": 20.56
}
   */
  try {
    return await http.apiCall.post(apiPayments, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const listPaymentsNotPaginated = async (
  customer_id,
  search,
  filter,
  token
) => {
  let url = `${apiPayments}?customer_id=${customer_id}&search_value=${search}&filter=${filter}`
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
export const listPaymentsPaginated = async (data, token) => {
  
  let url = `${apiPayments}?customer_id=${data.id}&page=${data.page}&pageSize=${data.pageSize}&search_value=${data.search}&filter=${data.filter}`
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
export const getPaymentsByIdApi = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiPayments}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error.message;
  }
};
export const getPaymentsOverviewIdApi = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiPayments}-overview?customer_id=${data.customer_id}&filter=${data.filter}`,
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
