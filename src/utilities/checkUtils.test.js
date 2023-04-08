/**
 * @jest-environment jsdom
 */
import jest from "jest";
import {
  addEllipses,
  boolCheck,
  calcFontSize,
  capitalize,
  checkDob,
  checkErrors,
  cilResponsiveNumber,
  emailDomain,
  formatDateDisplay,
  getFlagEmoji,
  getOS,
  joinStringsAndLower,
  nullCheckObjects,
  removeSeparators,
  removeSpaces,
  validationLCustom,
} from "./checkUtils";

// beforeEach(() => {
//   windowSpy = jest.spyOn(window, "window", "get");
// });

// afterEach(() => {
//   windowSpy.mockRestore();
// });
describe("Check Utilities", () => {
  it("Date of Birth Checker", () => {
    const allowed = checkDob("2020 / 01 / 06", 13);
    const disallowed = checkDob("1990 / 01 / 06", 13);
    const disallowed2 = checkDob("2005 / 01 / 06", 13);
    expect(allowed).toBeTruthy;
    expect(disallowed2).toBeTruthy;
    expect(disallowed).toBeFalsy;
  });
  it("Returns the OS of the Device", () => {
    const device = getOS() || "windows";
    expect(device).toBeTruthy();
  });
  it("AddEllipses Function", () => {
    const res = addEllipses("boy", 2);
    const res2 = addEllipses("boy", 5);
    expect(res).toEqual("bo...");
    expect(res2).toEqual("boy");
  });
  it("Get Flag Emoji", () => {
    const flag = getFlagEmoji("ng");
    expect(flag).toBeDefined;
  });
  it("Test BoolCheck", () => {
    const dt1 = boolCheck(false);
    const dt2 = boolCheck("Stringed");
    expect(dt1).toBeTruthy;
    expect(dt2).toBeFalsy;
  });
  it("calculate fontSize", () => {
    const res = calcFontSize(20, 10);
    expect(res).toBeGreaterThan(20);
  });
  it("Format Date Display", () => {
    const res = formatDateDisplay("12-04-2020");
    const res2 = formatDateDisplay("12-04-2020 45:55:35 01:05:22:55");
    expect(res).toBe("12-04-2020");
    expect(res2).toBe("12-04-2020 45:55");
  });
  it("Test Email Domain", () => {
    const mail = "leo@gmail.com";
    expect(emailDomain(mail)).toBe("gmail.com");
  });
  it("Test check Error Func", () => {
    const errObj = {
      name: "Enter at least 2 characters",
    };
    expect(checkErrors(errObj, "name")).toBeTruthy;
    expect(checkErrors(errObj, "password")).toBeFalsy;
  });

  it("Test ValidationL Func", () => {
    const schema = {
      name: (val) => {
        if (val.length > 4) return true;
        return false;
      },
    };

    const res = validationLCustom("name", "b", schema);
    const res2 = validationLCustom("name", "female", schema);
    expect(res).toBeFalsy;
    expect(res2).toBeTruthy;
  });
  it("Test Capitalize Func", () => {
    expect(capitalize("only")).toBe("Only");
    expect(capitalize("only me")).toBe("Only Me");
  });
  it("Test Join STrings and Lower Func", () => {
    expect(joinStringsAndLower("We ARE HERE", "-")).toBe("we-are-here");
    expect(joinStringsAndLower("i am The ONe We knoW", " ")).toBe(
      "i am the one we know"
    );
  });
  it("Test remove spaces Func", () => {
    expect(removeSpaces("We ARE HERE")).toBe("WeAREHERE");
    expect(removeSpaces("i am The ONe We knoW")).toBe("iamTheONeWeknoW");
  });
  it("Test remove separators Func", () => {
    expect(removeSeparators("We*ito", "*")).toBe("We ito");
  });

  it("Test Cil responsive Func", () => {
    const ans = cilResponsiveNumber(1280, 10, 15, 20, 25, 50);
    const ans2 = cilResponsiveNumber(320, 10, 15, 20, 25, 50);
    expect(ans).toBe(25);
    expect(ans2).toBe(10);
  });
  it("Test nullCheckObjects", () => {
    const ans = nullCheckObjects({ l: null, s: 1, r: 2, o: null, d: 8 });
    expect(ans).toEqual({ d: 8, l: "", o: "", r: 2, s: 1 });
  });
});
