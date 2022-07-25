import axios, { AxiosRequestConfig } from "axios"

const instance = axios.create({
  baseURL: `http://localhost:5000`,
})
export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  return instance(config).then((response) => response.data)
}