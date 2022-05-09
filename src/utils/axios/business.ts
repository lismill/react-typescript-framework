/*
 * @Description:
 * @Author: Lean
 * @Date: 2022-01-17 19:25:58
 * @FilePath: \create-react-app-typescript\src\utils\axios\business.ts
 */
const config = {
  /**
   * 拦截请求处理相应的业务逻辑
   * @param config config
   * @returns config
   */
  request(config: any) {
    console.log("请求拦截器处理业务逻辑", config);

    /**
     * 处理 POST 请求参数
     */
    if (config.method.toUpperCase() === "POST") {
      config.headers["Content-Type"] = "application/json;charset=utf-8";
    }
    return config;
  },

  /**
   * 拦截响应处理相应的业务逻辑
   * @param config config
   * @returns config
   */
  response(response: any) {
    console.log("返回拦截器处理业务逻辑", response);
    return response.data;
  },
};

export default config;
