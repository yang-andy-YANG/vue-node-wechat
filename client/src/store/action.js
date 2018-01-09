import { getUserInfo } from '@/service/getData'
import { GET_USERINFO } from './mutation-types.js'

export default {
    async getUserInfo({commit},userInfo) {
        let res = await getUserInfo(userInfo);
        commit(GET_USERINFO, res)
    },
}
