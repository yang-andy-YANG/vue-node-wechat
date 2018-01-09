import {GET_USERINFO,GET_ALLSOLUTIONS,GET_ALLSOLUTIONOBJ} from './mutation-types.js'

export default {
    [GET_USERINFO](state, info) {
        state.userInfo = {
            id: info.id,
            name: info.name,
            token: info.token
        }
    }
}
