
export const GetNotificationsQuery=(customerId, nextToken="")=>{
  return `query MyQuery {
  getCustomerNotification(customerId: ${customerId}, limit: 1000, nextToken:${nextToken} ) {
    items {
      category
      createdDate
      customerId
      digest_summary_notified
      id
      notificationContent
      notificationId
      s3MediaUrl
      status
      updatedDate
    }
    nextToken
  }
}
`;
}
