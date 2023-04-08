import { getApiPath } from "../config";
import * as http from "./httpService";

const apiPayroll = getApiPath("payroll", "payroll-payroll");
const apiPayrollConfiguration = getApiPath("payroll", "payroll-configuration");
const apiPayrollGroup = getApiPath("payroll", "payroll-group");
const apiPayrollGroupComponent = getApiPath(
  "payroll",
  "payroll-group-component"
);

// Configuration Submodule
export const configurePayrollApi = async (data, token) => {
  /***
    * {
     "customer_id": 19,
    "start_month": "2022-01-10",
    "end_month": "2022-01-10",
    "cut_off_date": "2022-01-10",
    "payroll_frequency": "Monthly",
    "monthly_run_date": "2022-01-10",
    "monthly_pay_day": 4,
    "december_pay_day": 5,
    "company_address": "lagos, Nigeria",
    "contact_email": "olaniyi.ajayi@cecureintel.com",
    "note": "first kobo payroll"
    }
     */
  console.log(apiPayrollConfiguration);
  try {
    return await http.apiCall.post(apiPayrollConfiguration, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const listPayrollApi = async (data, token) => {
  // console.log(apiPayrollConfiguration, data);
  try {
    return await http.apiCall.get(
      `${apiPayrollConfiguration}?page=${data.pageNumber}&pageSize=${data.pageSize}`,
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
export const getPayrollByIdApi = async (data, token) => {
  // console.log(apiPayrollConfiguration, data);
  try {
    return await http.apiCall.get(
      `${apiPayrollConfiguration}/${data.payrollId}`,
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
export const updatePayrollByIdApi = async (data, payrollId, token) => {
  console.log(`${apiPayrollConfiguration}/${payrollId}`, data);
  try {
    return await http.apiCall.put(
      `${apiPayrollConfiguration}/${payrollId}`,
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
export const deletePayrollByIdApi = async (payrollId, token) => {
  /***
      {
    "customer_id": 30,
    "start_month": "2022-01-10",
    "end_month": "2022-01-10",
    "cut_off_date": "2022-01-10",
    "payroll_frequency": 29,
    "monthly_run_date": "2022-01-10",
    "monthly_pay_date": "2022-01-10",
    "company_address": "lagos, Nigeria",
    "contact_email": "olaniyi.ajayi@cecureintel.com",
    "note": "first kobo payroll"
    }
       */
  console.log(apiPayrollConfiguration, payrollId);
  try {
    return await http.apiCall.delete(
      `${apiPayrollConfiguration}/${payrollId}`,
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

// Payroll Group Submodule
export const createPayrollGroupApi = async (data, token) => {
  /***
    {
    "payroll_id": 2,
    "group_name": "test2",
    "customer_id": 4
    }
     */
  console.log(apiPayrollGroup, data);
  try {
    return await http.apiCall.post(apiPayrollGroup, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const listPayrollGroupApi = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiPayrollGroup}?customer_id=${data.customer_id}&page=${data.pageNumber}&pageSize=${data.pageSize}`,
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
export const listPayrollGroupAllApi = async (id, token) => {
  // console.log(apiPayrollGroup);
  try {
    return await http.apiCall.get(`${apiPayrollGroup}?customer_id=${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getPayrollGroupByIdApi = async (data, token) => {
  console.log(apiPayrollGroup, data);
  try {
    return await http.apiCall.get(`${apiPayrollGroup}/${data.payrollId}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const updatePayrollGroupByIdApi = async (data, payrollId, token) => {
  /***
   {
    "group_name": "test2"
    }
       */
  console.log(apiPayrollGroup, data);
  try {
    return await http.apiCall.put(`${apiPayrollGroup}/${payrollId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const deletePayrollGroupByIdApi = async (payrollId, token) => {
  console.log(apiPayrollGroup, payrollId);
  try {
    return await http.apiCall.delete(`${apiPayrollGroup}/${payrollId}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
// Component
export const createPayrollGroupCompApi = async (data, token) => {
  /***
    {
    "payroll_group_id": 3,
    "component_group": "test2",
    "formula": "test-formula"
}
     */
  console.log(apiPayrollGroupComponent, data);
  try {
    return await http.apiCall.post(apiPayrollGroupComponent, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const listPayrollCompApi = async (id, token) => {
  console.log(`${apiPayrollGroupComponent}?customer_id=${id}`);
  try {
    return await http.apiCall.get(
      `${apiPayrollGroupComponent}?customer_id=${id}`,
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
export const listPayrollGroupCompApi = async (data, token) => {
  console.log(apiPayrollGroupComponent, data);
  try {
    return await http.apiCall.get(
      `${apiPayrollGroupComponent}?page=${data.pageNumber}&pageSize=${data.pageSize}`,
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
export const getPayrollGroupCompByIdApi = async (data, token) => {
  console.log(apiPayrollGroupComponent, data);
  try {
    return await http.apiCall.get(
      `${apiPayrollGroupComponent}/${data.componentId}`,
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
export const updatePayrollGroupCompByIdApi = async (data, payrollId, token) => {
  /***
 {
    "component_group": "test2",
    "formula": "test-formula1"
}
       */
  console.log(apiPayrollGroupComponent, data);
  try {
    return await http.apiCall.put(
      `${apiPayrollGroupComponent}/${componentId}`,
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
export const deletePayrollGroupCompByIdApi = async (componentId, token) => {
  console.log(apiPayrollGroupComponent, componentId);
  try {
    return await http.apiCall.delete(
      `${apiPayrollGroupComponent}/${componentId}`,
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

// Payroll - Payroll SubModule
export const createPayrollSubApi = async (data, token) => {
  /***
    {
    "payroll_id": 2,
    "_name": "test2",
    "customer_id": 4
    }
     */
  console.log(apiPayroll, data);
  try {
    return await http.apiCall.post(apiPayroll, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const listPayrollSubApi = async (data, token) => {
  try {
    return await http.apiCall.get(
      `${apiPayroll}?customer_id=${data.customer_id}&page=${data.pageNumber}&pageSize=${data.pageSize}`,
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
export const getPayrollSubByIdApi = async (data, token) => {
  console.log(apiPayroll, data);
  try {
    return await http.apiCall.get(`${apiPayroll}/${data.payrollId}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const updatePayrollSubByIdApi = async (data, payrollId, token) => {
  /***
   {
    "_name": "test2"
    }
       */
  console.log(apiPayroll, data);
  try {
    return await http.apiCall.put(`${apiPayroll}/${payrollId}`, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const deletePayrollSubByIdApi = async (payrollId, token) => {
  console.log(apiPayroll, payrollId);
  try {
    return await http.apiCall.delete(`${apiPayroll}/${payrollId}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
