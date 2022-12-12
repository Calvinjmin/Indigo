import { auth_token } from "../auth/auth";

export const setAuthHeader = () => {
    try {
      if (auth_token) {
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${auth_token}`;
      }
    } catch (error) {
      console.log('Error setting auth', error);
    }
  };