import { api, API_V1 } from "./core-api-service";

export const getUserDetails = () => {
  const url = `${API_V1}user/`;
  return api.get(url, { auth: true});
};







// export const getAddonsByProduct = (productId) => {
//   const endpoint = `/v1.0/dummy/voucher/addons/${productId}`;
//   return GET(endpoint);
// };

// export const updateInvoice = (body, isAuth = true) => {
//   const endpoint = `${API_V1}invoice`;
//   return POST(endpoint, body, { authenticated: isAuth });
// };
