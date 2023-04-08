import { getUserRole, updateUserAttribute } from "./authService";
import { uploadEmployeePhoto } from "./employeeService";
import { getApiPath } from "../config";
import * as http from "./httpService";

const apiChangePassword = getApiPath("core", "change-password");
const notification = getApiPath("notification", "notification");
const listActivityLog = getApiPath("core", "activity-logs");
const uploadFile = getApiPath("core", "upload-file");
// const clientData = JSON.parse(sessionStorage.getItem("koboAuthToken"))?.uData;
// const token = clientData.koboAcToken;
// console.log("token", token);
// console.log("clientData", clientData);

export const accountProfilePictureUpload = (data, token) => {
  /***data Param Format
   * data={
   * file: File{...},
   * username: username of account,
   * staffId:username of account,
   * }
   */
  try {
    return http.apiCall.post(uploadFile, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAccountRole = () => {
  return getUserRole();
};

export const updateUser = async (data) => {
  /***data Param Format
   * data={
   * ...
   * accessToken: token
   * }
   */
  try {
    return await updateUserAttribute(data, data.accessToken);
  } catch (error) {
    console.log(error.message);
  }
};

export const changePassword = async (data) => {
  /***data Param Format
   * data={
   * email: email of account,
   * password: password of account,
   * newPassword: new password of account,
   * accessToken: token
   * }
   */
  try {
    return await http.apiCall.post(apiChangePassword, data, {
      headers: {
        Authorization: data.accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const setNotificationConfig = async (data, accessToken) => {
  /**
   * data={
   * "customerId" : "customer Id",
   * "username" : "Username of user",
   * "catagories" : [
   *  "Accounts","Reports","Budget", "Billing" , //categories to set
   * ]
   * }
   */

  try {
    return await http.apiCall.post(notification, data, {
      headers: {
        Authorization: accessToken,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getActivityLogList = async (accessToken) => {
  return await http.apiCall.get(listActivityLog, {
    headers: {
      Authorization: accessToken,
    },
  });
};

export const getNotificationList = async (
  customerId,
  username,
  accessToken
) => {
  return await http.apiCall.get(
    `${notification}?customerId=${customerId}&username=${username}`,
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
};

export const changeNotificationStatus = async (
  id,
  notificationId,
  status,
  accessToken
) => {
  return await http.apiCall.put(
    `${notification}/change-status`,
    {
      id: id,
      notificationId: notificationId,
      status: status,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
};

export const getNotificationCategories = async (accessToken) => {
  return await http.apiCall.get(`${notification}/categories`, {
    headers: {
      Authorization: accessToken,
    },
  });
};

export const setNotificationCategories = async (
  customerId,
  username,
  categories,
  accessToken
) => {
  /**
  *  {
    "customerId" : "abc123",
    "username" : "haider1",
    "catagories" : [
        "Accounts","Reports","Budget", "Billing" , "TEST"
    ]
  }
  */
  return await http.apiCall.put(
    `${notification}`,
    {
      customerId: customerId,
      username: username,
      categories: categories,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
};
