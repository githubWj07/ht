//service统一出口
import WRequest from './request'
import {BASE_URL} from './request/config'

import localCache from '@/utils/cache'

const wRequest = new WRequest({
    baseURL: BASE_URL,
    interceptors: {
        requestInterceptor: (config) => {
            // 携带token的拦截
            const token = localCache.getCache('token')
            if (token) {
              config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            return res
        },
        responseInterceptorCatch: (err) => {
            return err
        },
    }
})

export default wRequest