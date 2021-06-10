const base = process.env.NEXT_PUBLIC_RAPI_HOST;

export const monitorUrl = `${base}/api/v1/monitor`;

export const accountsUrl = `${base}/api/v1/accounts`;

export const signinUrl = `${base}/api/v1/accounts/signin`;

export const confirmEmailUrl = `${base}/api/v1/accounts/confirm-email`;
