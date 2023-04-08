import { getUserRole } from "./authService";

// Constants
export const PAYROLL = "payroll";
const ACCOUNT_OWNER = "account-owner";
const ADMINISTRATOR = "administrator";
const MANAGER = "manager";
const ACCOUNTANT = "accountant";
const SALES_MANAGER = "sales-manager";
const HR_MANAGER = "hr-manager";
const STANDARD = "standard";

export const rBacService = (module) => {
  const role = getUserRole();
  switch (role) {
    case ACCOUNT_OWNER:
      switch (module) {
        case PAYROLL:
          return {
            access: true,
            permissionsList: {
              configuration: true,
              payroll_groups_create: true,
              payroll_groups_update: true,
              payroll_groups_view: true,
              payroll_run: true,
              payroll_approval: true,
            },
          };
      }
      break;
    case ADMINISTRATOR:
      switch (module) {
        case PAYROLL:
          return {
            access: true,
            permissionsList: {
              configuration: true,
              payroll_groups_create: true,
              payroll_groups_update: true,
              payroll_groups_view: true,
              payroll_run: true,
              payroll_approval: true,
            },
          };
      }
      break;
    case MANAGER:
      switch (module) {
        case PAYROLL:
          return {
            access: true,
            permissionsList: {
              configuration: true,
              payroll_groups_create: true,
              payroll_groups_update: true,
              payroll_groups_view: true,
              payroll_run: true,
              payroll_approval: false,
            },
          };
      }
      break;
    case ACCOUNTANT:
      switch (module) {
        case PAYROLL:
          return {
            access: true,
            permissionsList: {
              configuration: true,
              payroll_groups_create: true,
              payroll_groups_update: true,
              payroll_groups_view: true,
              payroll_run: true,
              payroll_approval: false,
            },
          };
      }
      break;
    case SALES_MANAGER:
      switch (module) {
        case PAYROLL:
          return {
            access: true,
            permissionsList: {
              configuration: false,
              payroll_groups_create: false,
              payroll_groups_update: false,
              payroll_groups_view: true,
              payroll_run: false,
              payroll_approval: false,
            },
          };
      }
      break;
    case HR_MANAGER:
      switch (module) {
        case PAYROLL:
          return {
            access: true,
            permissionsList: {
              configuration: true,
              payroll_groups_create: true,
              payroll_groups_update: true,
              payroll_groups_view: true,
              payroll_run: true,
              payroll_approval: false,
            },
          };
      }
      break;
    case STANDARD:
      switch (module) {
        case PAYROLL:
          return {
            access: false,
            permissionsList: {
              configuration: false,
              payroll_groups_create: false,
              payroll_groups_update: false,
              payroll_groups_view: false,
              payroll_run: false,
              payroll_approval: false,
            },
          };
      }
      break;
    default:
      return "This Role does not exist.";
  }
};
