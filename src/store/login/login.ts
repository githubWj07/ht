import { Module } from "vuex";

import { 
    accountLoginRequest,
    requestUserInfoById,
    requestUserMenusByRoleId 
} from "@/service/login/login";

import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'

import router from "@/router";

import { IAccount } from "@/service/login/type";
import {ILoginState} from './types'

interface  IRootState {
    name: string
    age: number
}

const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: '',
            userInfo: {},
            userMenus: [],
            permissions: []
        }
    },
    mutations:{
        changeToken(state, token:string){
            state.token = token
        },
        changeUserInfo(state, userInfo:any){
            state.userInfo = userInfo
        },
        changeUserMenus(state, userMenus:any){
            state.userMenus = userMenus

            //userMenus 映射到=> routes
            const routes = mapMenusToRoutes(userMenus)
            console.log(routes)
            routes.forEach( (route) => {
                router.addRoute('main', route)
            })
        }
    },
    actions: {
        async accountLoginAction({ commit }, payload: IAccount){
            //1.实现登录逻辑
            const loginResult = await accountLoginRequest(payload);
            const {id, token} = loginResult.data
            console.log(loginResult)
            console.log(id)
            commit('changeToken', token)
            localCache.setCache('token', token)

            //请求用户信息
            const userInfoResult = await requestUserInfoById(id);
            const userInfo = userInfoResult.data;
            commit('changeUserInfo', userInfo)
            localCache.setCache('userInfo', userInfo)
            console.log(userInfoResult)

            //请求用户菜单
            const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
            const userMenus = userMenusResult.data;
            commit('changeUserMenus', userMenus)
            localCache.setCache('userMenus', userMenus)
            console.log(userMenus)

            //跳到首页
            router.push('/main')
        },
        loadLocalLogin({ commit }){
            const token = localCache.getCache('token')
            if(token) {
                commit('changeToken', token)
            }

            const userInfo = localCache.getCache('userInfo')
            if(userInfo) {
                commit('changeUserInfo', userInfo)
            }

            const userMenus = localCache.getCache('userMenus')
            if(userMenus) {
                commit('changeUserMenus', userMenus)
            }
        }
    }
}

export default loginModule