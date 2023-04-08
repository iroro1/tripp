import { getApiPath } from "../config";
import * as http from "./httpService";

const apiCreateEmployee = getApiPath("employee", "employee");
const apiCheckEmpImage = getApiPath("employee", "check-image-username");
const apiCreateDependent = getApiPath("employee", "employee-dependants");
const apiCreateEducation = getApiPath("employee", "employee-education");
const apiCreateCert = getApiPath("employee", "employee-certification");
const apiCreateBanking = getApiPath("banking", "banking");
const apiInviteFormApi = getApiPath("employee", "send-form");
const apiUploadImg = getApiPath("core", "upload");
const apiConvertUser = getApiPath("core", "create-user");
const apiRevokeUser = getApiPath("core", "revoke-user");

//
const clientData = JSON.parse(sessionStorage.getItem("koboAuthToken"))?.uData;
const token = clientData?.koboAcToken;

// Create Apis
export const convertEmployeeToUser = async (data, token) => {
  try {
    return await http.apiCall.post(apiConvertUser, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const revokeUserToEmployee = async (data, token) => {
  try {
    return await http.apiCall.post(apiRevokeUser, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
// Create Apis
export const createEmployee = async (data, token) => {
  const dt = data.dt?.length > 0 ? data.dt : data;
  console.log(dt, data);
  try {
    return await http.apiCall.post(apiCreateEmployee, dt, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// CERT API
export const createCertData = async (data) => {
  try {
    return await http.apiCall.post(apiCreateCert, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getEmpCertById = async (id) => {
  try {
    return await http.apiCall.get(`${apiCreateCert}-employee/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const delEmpCertById = async (id) => {
  try {
    return await http.apiCall.delete(`${apiCreateCert}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Bank CRUD
export const createBankData = async (data) => {
  try {
    return await http.apiCall.post(apiCreateBanking, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getEmpBankById = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiCreateBanking}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const upDateEmpBankById = async (data) => {
  try {
    return await http.apiCall.put(
      `${apiCreateBanking}/${data.identifier}`,
      data.data,
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

// Education CRUD
export const createEducationData = async (data) => {
  try {
    return await http.apiCall.post(apiCreateEducation, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllEmpEducation = async () => {
  try {
    return await http.apiCall.get(`${apiCreateEducation}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateEmpEducationById = async (data) => {
  try {
    return await http.apiCall.put(
      `${apiCreateEducation}/${data.identifier}`,
      data.data,
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
export const getEmpEducationById = async (id) => {
  try {
    return await http.apiCall.get(`${apiCreateEducation}-employee/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const delEmpEducationById = async (id) => {
  try {
    return await http.apiCall.delete(`${apiCreateEducation}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Dependents CRUD
export const createDependent = async (data) => {
  console.log(data);
  try {
    return await http.apiCall.post(apiCreateDependent, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateEmpDependent = async (data) => {
  try {
    return await http.apiCall.put(
      `${apiCreateDependent}/${data.identifier}`,
      data.data,
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
export const upDateEmpDependentById = async (data) => {
  try {
    return await http.apiCall.put(
      `${apiCreateDependent}/${data.identifier}`,
      data.data,
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
export const delEmpDependents = async (id) => {
  try {
    return await http.apiCall.delete(`${apiCreateDependent}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getEmpDependents = async (id, token) => {
  try {
    return await http.apiCall.get(`${apiCreateDependent}-employee/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllEmpDependents = async () => {
  try {
    return await http.apiCall.get(`${apiCreateDependent}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// Employee CRUD
export const updateEmployee = async (data) => {
  console.log(data);
  try {
    return await http.apiCall.put(
      `${apiCreateEmployee}/${data.identifier}`,
      data.data,
      {
        headers: {
          Authorization: data.token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const getImageAvailabilityEmp = async (path, id) => {
  try {
    return await http.apiCall.get(`${apiCheckEmpImage}/${path}/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getOneEmployeeById = async (data) => {
  console.log(`${apiCreateEmployee}-by-identifier/${data.id}`, "NIYI");
  try {
    return await http.apiCall.get(
      `${apiCreateEmployee}-by-identifier/${data.id}`,
      {
        headers: {
          Authorization: data.token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const getOneEmployee = async (data) => {
  // OLD
  console.log(`${apiCreateEmployee}/${data.identifier}`, data);
  try {
    return await http.apiCall.get(`${apiCreateEmployee}/${data.identifier}`, {
      headers: {
        Authorization: data.token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getSearchEmployees = async (data) => {
  try {
    return await http.apiCall.get(`${apiCreateEmployee}/search?`, {
      headers: {
        Authorization: data.token,
      },
      params: {
        page: data.page,
        pageSize: data.pageSize,
        [data.field.name]: data.field.value,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllEmployees = async (data) => {
  console.log(
    `${apiCreateEmployee}?page=${data.page}&pageSize=${data.pageSize}`
  );
  try {
    return await http.apiCall.get(`${apiCreateEmployee}`, {
      headers: {
        Authorization: data.token,
      },
      params: {
        page: data.page,
        pageSize: data.pageSize,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const inviteEmployeeForm = async (data, token) => {
  try {
    return await http.apiCall.post(apiInviteFormApi, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// CORE
export const uploadEmployeePhoto = async (data, token) => {
  console.log(`${apiUploadImg}/${data.username}/${data.staffId}.png`);
  try {
    return await http.apiCall.post(
      `${apiUploadImg}/${data.username}/${data.staffId}.png`,
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
export const uploadDocsAPi = async (data) => {
  try {
    return await http.apiCall.post(
      `${apiUploadImg}/${data.username}/${data.docName}`,
      data.file,
      {
        headers: {
          "Content-Type": "application/pdf",
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const uploadCertAPi = async (data) => {
  try {
    return await http.apiCall.post(
      `${apiUploadImg}/employee-cert-${data.username}/${data.docName}`,
      data.file,
      {
        headers: {
          "Content-Type": "application/pdf",
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
