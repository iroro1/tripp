export const diffBetweenDates = (lowerDate, higherDate) => {
  const date1 = new Date(lowerDate);
  const date2 = new Date(higherDate);
  const diffTime = date2 - date1;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return {
    days: diffDays,
    time: diffTime,
  };
};
export const emailDomain = (email) => {
  /***
   * Returns the domain of an email with whole domain like @gmail.com or @yahoo.com
   */
  return email.split("@")[1];
};

export const checkErrors = (err, name) => {
  /***
   * Checks Errors on an Error object. It takes the error object and the name of the field and returns a boolean
   */
  let hasError = false;
  err[name] !== undefined ? (hasError = true) : (hasError = false);
  return hasError;
};

export const validationLCustom = (name, val, schema) => {
  /***
   * Used to validated custom made schema for authentication on signup
   */
  return schema[name](val);
};

export const capitalize = (txt) => {
  /***
   * Takes a text and Capitalizes the text.
   */
  return txt
    .split(" " || "-" || "" || "_")
    .map(
      (d) => `${d.slice(0, 1).toString().toUpperCase()}${d.slice(1, d.length)}`
    )
    .join(" ");
};

export const formatDateDisplay = (date) => {
  /***
   * Takes a default JS date and returns the useful part
   */
  return date.toString().slice(0, 16);
};

export const joinStringsAndLower = (txt, sep) => {
  /***
   * Takes a text with spaces and a separator we want to introduce, remove the spaces,,introduce the separator and return the lowercased formatted text
   */
  return txt.split(" ").join(sep).toLowerCase();
};
export const removeSpaces = (txt) => {
  /***
   * Takes a text and strips off spaces
   */
  return txt && txt.split(" ").join("");
};
export const removeSeparators = (txt, sep) => {
  /***
   * Takes a text and strips off spaces
   */
  return txt && txt.split(sep).join(" ");
};

export const addEllipses = (txt, maxLength, numOfDots = 3) => {
  let dots = "";
  for (let i = 0; i < numOfDots; i++) {
    dots += ".";
  }
  return txt?.length < maxLength ? txt : txt?.slice(0, maxLength) + dots;
};

export function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export const boolCheck = (dt) => {
  if (typeof dt === "boolean") return "";
  else return dt;
};
export const nullCheckObjects = (dt) => {
  const nArr = {};
  Object.entries(dt).forEach((itm) => {
    if (itm[1] === null) nArr[itm[0]] = "";
    else nArr[itm[0]] = itm[1];
  });
  return nArr;
};

export const copyToClipBoard = (txt) => {
  navigator.clipboard.writeText(txt);
};

export const isEmailValid = (val) => {
  // check for @
  let atSymbol = val.indexOf("@");
  if (atSymbol < 1) return false;

  let dot = val.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;

  // check that the dot is not at the end
  if (dot === val.length - 1) return false;

  return true;
};

export const currencyFormatter = (num) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "NGN",
  }).format(num);
};
export const currencyFormatRn = (num) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
export const numFormatRn = (num) => {
  return num
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    .split(".")[0];
};
export const allowOnlyNumbersFn = (e) => {
  let regex = /^[0-9-!.@#$%*?]/;
  let key = String.fromCharCode(e.charCode ? e.which : e.charCode);
  if (!regex.test(key)) {
    e.preventDefault();
    return false;
  }
};

export const dateSubtracter = (minus) => {
  let d = new Date();
  d.setDate(d.getDate() - minus);
  let ans = d.toLocaleString();
  ans = ans.split(",")[0].split("/");
  let ansMain = ans[2] + "-" + ans[0] + "-" + ans[1];
  return ansMain;
};

export const serialNumberTableGen = (
  activePage = 1,
  pageSize = 10,
  i,
  type = "paginated"
) => {
  if (type === "paginated") {
    if (activePage === 1) return i + 1;
    else return activePage * pageSize - 9 + i;
  } else {
    return i + 1;
  }
};

export const subtractDateFromToday = (date) => {
  let date1 = new Date();
  let date2 = new Date(date);

  let Difference_In_Time = date1.getTime() - date2.getTime();

  // To calculate the no. of days between today and date
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
};

export const isValidURL = (string) => {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};

export const sortArrObjsFn = (arr, col, dir = "asc") => {
  const a = arr.sort(function (a, b) {
    if (dir === "asc") {
      return a[col] - b[col];
    } else return b[col] - a[col];
  });

  return a;
};

export const appId = (identifier, preId) => {
  let id = {
    id: `${preId.toUpperCase()}-${uuidv4()}`,
    mainId: identifier,
  };
  return id;
};

export const todaysDateFn = () => {
  const dt = new Date();
  const yr = dt.getFullYear();
  const month = dt.getUTCMonth();
  const dy = dt.getDate();
  return `${yr}-${month + 1}-${dy}`;
};
