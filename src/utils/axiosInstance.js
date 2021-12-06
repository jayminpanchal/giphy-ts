import axios from "axios";

class AxiosInstance {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_GIPHY_API_URL,
    });
  }

  doCall = async (url = "", method, data, params) => {
    try {
      const reqParams = {
        api_key: process.env.REACT_APP_GIPHY_API_KEY,
        ...params,
      };
      const res = await this.axios.request({
        url,
        method,
        data,
        params: reqParams,
      });

      return res;
    } catch (err) {
      throw err;
    }
  };
}

export default new AxiosInstance();
