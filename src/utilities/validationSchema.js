const passwordFunc = (val) => {
  if (val.length < 8) {
    return "Min 8 Characters";
  } // eslint-disable-next-line
  if (val.search(/[a-z]/) < 0) {
    return "Lowercase";
  }
  if (val.search(/[A-Z]/) < 0) {
    return "uppercase";
  }
  if (val.search(/\W/i) < 0) {
    return "Symbol";
  }
  // eslint-disable-next-line
  if (val.search(/[0-9]/) < 0) {
    return "Digit";
  }
  oldPass = val;
};
export const emailFunc = (val) => {
  return val.search(
    // eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
export const loginSchema = {
  email: (val) => {
    if (val.length === 0) return "Required";
    else if (
      val.search(
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      return "valid email.";

    return null;
  },
  password: passwordFunc,
};
let oldPass;
export const registerSchema = {
  fullName: (val) => {
    if (val.search(/^[a-z\d]* [a-z\d]*$/i) < 0)
      return "Firstname Lastname separated by spaces";
    if (val.length < 3) {
      return "3 characters";
    }
  },
  username: (val) => {
    if (val.length < 3) {
      return "Min 3 characters";
    }
    if (val.search(/^\w+$/)) {
      return "Please enter a valid username";
    }
  },
  email: (val) => {
    if (val.length === 0) return "Required";
    else if (
      val.search(
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      return "Please enter a valid email";

    return null;
  },
  password: passwordFunc,
  // Not Used
  passwordConfirm: (val) => {
    if (val !== oldPass) return "Your password does not match";
  },
};

export const passwordVal = (val) => {
  const ans = [];
  if (val?.length < 8) {
    ans.push("Minimum of 8 Characters");
  } // eslint-disable-next-line
  if (val?.search(/[a-z]/) < 0) {
    ans.push("A Lowercase Letter");
  }
  if (val?.search(/[A-Z]/) < 0) {
    ans.push("An Uppercase Letter");
  }
  if (val?.search(/\W/i) < 0) {
    ans.push("A Character");
  }
  // eslint-disable-next-line
  if (val?.search(/[0-9]/) < 0) {
    ans.push("A Number");
  }
  return ans;
};
