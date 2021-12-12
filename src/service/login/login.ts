import wRequest from '../index'

import { IAccount } from './type'

enum LoginAPI {
    AccountLogin = '/login',
    LoginUserInfo = '/users/', // users/id
    UserMenus = '/role/' // role/id/menu
}

//登录请求
export function accountLoginRequest(account: IAccount) {
    return wRequest.post({
        url: LoginAPI.AccountLogin,
        data: {
            "name": "coderwhy",
            "password": "123456"
        },
    })
}

//请求用户信息
export function requestUserInfoById(id: number) {
    return wRequest.get({
        url: LoginAPI.LoginUserInfo + id,
    })
}

//请求菜单
export function requestUserMenusByRoleId(id: number) {
    return wRequest.get({
        url: LoginAPI.UserMenus + id + '/menu',
    })
}