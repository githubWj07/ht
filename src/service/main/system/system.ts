import wRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
    return wRequest.post({
        url: url,
        data: queryInfo
    })
}