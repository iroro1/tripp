export const mediaBaseEmployeeProfile = "https://dt96z972sggwn.cloudfront.net";

export const mediaProfilePics = (username, id) =>
  `${mediaBaseEmployeeProfile}/employee_profile_images/${username}/${id}.png`;
export const serviceProviderDocs = (username, fileName) =>
  `https://d2gk1uh4d6wehx.cloudfront.net/service_provider_docs/${username}/${fileName}`;

export const certificationBase = (username, fileName) => {
  return `https://d2gk1uh4d6wehx.cloudfront.net/employee_certification/employee-cert-${username}/${fileName}`;
};

export const mediaBucketS3BasePlusPath = (path) =>
  `https://s3.amazonaws.com/dev.kobo-media-assets-frontend/${path}`;

export const employeeBulkUploadTemplate =
  "assets-app-webapp/templates/add-employee-template.csv";
