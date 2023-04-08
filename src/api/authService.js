import axios from "axios";
const apiForgotPassword = `https://api.dev.etiaba.com/open/customer/v1/forgot-password`;
const apiConfirmForgotPassword = `https://api.dev.etiaba.com/open/customer/v1/confirm-forgot-password`;
const apiLogIn = `https://api.dev.etiaba.com/open/customer/v1/login`;
const apiSignUp = `https://api.dev.etiaba.com/open/customer/v1/signup`;
const apiConfirmSignUp = `https://api.dev.etiaba.com/open/customer/v1/confirm-signup`;
const apiGetUser = "https://api.dev.etiaba.com/core/v1/get-user";
const apiUpdateUserAttributes =
  "https://api.dev.etiaba.com/core/v1/update-attribute";
const apiResendVerification = `https://api.dev.etiaba.com/open/customer/v1/resend-verification`;
// loginUser
export const loginUser = async (data) => {
  try {
    return await axios.post(apiLogIn, data);
  } catch (error) {
    return error;
  }
};
export const getUserApi = async (token) => {
  const data = {
    accessToken: token,
  };
  try {
    return await axios.post(apiGetUser, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error;
  }
};
export const signUpUserApi = async (data) => {
  /***
 * {
    "email": "ajayiolaniyi@gmail.com",
    "first_name": "Olaniyi",
    "last_name": "Ajayi",
    "username": "jarvis",
    "customer_type": "enterprise",
    "password": "Password123!!!"
}
 */
  console.log(apiSignUp, data);
  try {
    return await axios.post(apiSignUp, data);
  } catch (error) {
    return error;
  }
};
export const confirmSignUpApi = async (data) => {
  /***
 * 
 * {
    "username": "jarvis",
    "code": "205509"
}
 */
  try {
    return await axios.post(apiConfirmSignUp, data);
  } catch (error) {
    return error;
  }
};
export const forgotPasswordApi = async (email) => {
  /***
 * {
    "email": "ojigboleo@gmail.com"
 }
 */
  const data = { email };
  try {
    return await axios.post(apiForgotPassword, data);
  } catch (error) {
    return error;
  }
};
export const confirmForgotPasswordApi = async (data) => {
  /***
 * {
    "code": "495495",
    "newPassword": "123456Leo@1",
    "email": "ojigboleo@gmail.com"
}
 */
  try {
    return await axios.post(apiConfirmForgotPassword, data);
  } catch (error) {
    return error;
  }
};
export const resendVerificationApi = async (data) => {
  /***
 * 
 * {
    "username": "jarvis"
}
 */
  try {
    return await axios.post(apiResendVerification, data);
  } catch (error) {
    return error;
  }
};
export const updateUserAttributeApi = async (data, token) => {
  /***
 * 
 {
    "cognito": {
        "logo_url": "https://mediaassets.dev.kobooffice.com/logo/33bf5ec2-fbcc-41f4-91fa-56a36adc5891.png"
    },
    "accessToken": "eyJraWQiOiI0c1VjWlRsOE5maXJCXC9TWExvTkc4ZjFhY2RUNTB1RCtCbzdkcnFxcnZCMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OGJhMDg2ZC0wY2UyLTRjYzItOWU5Yi1jYTc3MjczZTA5OWMiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xX2QxZDI0YjljLWViYzMtNDg3Ni04YmMyLWFhOTQxYjNmZDYyOCIsImNvZ25pdG86Z3JvdXBzIjpbImFjY291bnQtb3duZXIiLCJhZG1pbmlzdHJhdG9yIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0xQQ05tY2VocSIsImNsaWVudF9pZCI6IjFkNm81OGxhaW5yMHMwYXF1YzNpMGttamc0Iiwib3JpZ2luX2p0aSI6IjgwMTJkZGFlLTM2OTYtNGRmOS05ZjM4LWNiNDhlN2JiOTZhYSIsImV2ZW50X2lkIjoiMDczYmY3YWMtNGQ2MC00NmIzLTk5Y2ItYjYxODA1MDViOTA2IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1NTM2NTg5NiwiZXhwIjoxNjU1MzY5NDk2LCJpYXQiOjE2NTUzNjU4OTYsImp0aSI6ImJkZWQzOGFiLTI1YjUtNDA1OC04NjcxLTUwNzMxYWM1ZGQyYyIsInVzZXJuYW1lIjoiZGVtb2x0ZCJ9.lK6Ysk6hESD5imsgewDkWHVa9BTLGizAE05i2GXOh4DkdWibw9rOopCsdxSZApEf1uOmbd3SCU4J0KzqI7LP-4xh57i8SunWrR4xofkqa0Ye3NdKDVOq5w23-y0Nv8MCSISVnghI4Hb7OEGdUTu8-sb2Ws-ebOz-Q8LFC10RIRHhp1p4-iCsRVFHlL1adm03d9H0k2J_8bE3FfUQ97KcFYnH4uIlFhEX6Z5XXxai02vWm0RBDcfr46fe4zIPCowaPjq5vuhztKZ_rAprI6EM2bT1gZRW6Q0CsS0iaaGjVVH4s1TXZ2hhZUsFt0OFhg3kJDyBHNbqWlM79emuFszCLw"
}
 */
  try {
    return await axios.post(apiUpdateUserAttributes, data, {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    return error;
  }
};
