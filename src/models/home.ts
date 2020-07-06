import { ModelType } from '../interface'
import { homeLoverReq } from '../services'
const home:ModelType = {
    namespace: 'home',
    state: {
        LoverData:[]
    },
    effects: {
        *getDate ({},{call,put}){
            const result = yield call(homeLoverReq)
            // console.log("result",result)
            yield put ({type:'homeLover',LoverData:result.data})            
        }
    },
    reducers: {
        homeLover(state,action){
            return {...state,...action}
        }
    }
}

export default home