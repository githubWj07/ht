import axios from "axios"
import type {AxiosInstance} from 'axios'
import type {RequestInterceptors,RequestConfig} from './type'

import { ElLoading, ILoadingInstance } from "element-plus"

class WRequest {
    instance: AxiosInstance
    interceptors?: RequestInterceptors
    showLoading: boolean
    loading?: ILoadingInstance

    constructor(config:RequestConfig){
        //创建axios实例
        this.instance = axios.create(config)
        //保存基本信息
        this.showLoading = config.showLoading ?? true
        this.interceptors = config.interceptors

        //使用拦截器
        //从config中取出的拦截器是对应的实例的拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )

        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        //添加所有的实例都有拦截器
        this.instance.interceptors.request.use(
            (config) =>{
                if(this.showLoading) {
                    this.loading = ElLoading.service({
                        lock: true,
                        text: '正在请求数据。。。',
                        background: 'rgba(0,0,0, .5)'
                    })
                }
                return config
            },
            (err) => {
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) =>{
                this.loading?.close();
                const data = res.data;
                if(data.returnCode === '-1001') {
                    console.log('请求失败~')
                }else {
                    return data
                }
                return data
            },
            (err) => {
                this.loading?.close()
                if(err.response.status === 404){
                    console.log('404的错误')
                }
                return err
            }
        )
    }
    request<T = any>(config: RequestConfig<T>): Promise<T>{
        return new Promise((resolve, reject) => {
            //1.单个请求对请求config的处理
            if(config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }

            //2.判断是否需要显示loading
            if (config.showLoading === false) {
                this.showLoading = config.showLoading
            }
            this.instance.request<any, T>(config).then((res) => {
                //单个请求对数据的处理
                if(config.interceptors?.responseInterceptor) {
                    res = config.interceptors.responseInterceptor(res)
                }
                this.showLoading = true
                resolve(res)
            })
            .catch((err) => {
                //将this.showLoading = true设置为true，这样不会影响下一请求
                this.showLoading = true
                reject(err)
                return err
            })
        })
    }
    get<T = any>(config: RequestConfig<T>): Promise<T>{
        return this.request<T>({ ...config, method: 'GET' })
    }
    post<T = any>(config: RequestConfig<T>): Promise<T>{
        return this.request<T>({ ...config, method: 'POST' })
    }
    delete<T = any>(config: RequestConfig<T>): Promise<T>{
        return this.request<T>({ ...config, method: 'DELETE' })
    }
    patch<T = any>(config: RequestConfig<T>): Promise<T>{
        return this.request<T>({ ...config, method: 'PATCH' })
    }
} 

export default WRequest