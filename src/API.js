/**
 * Created by levy on 2018/4/10.
 */
import axios from './axios.js'

class API {
    //获取当前的点赞数
    savePraise (param) {
        return axios.get('/praise',{
            params:{
                num:param
            }
        });
    }
}
export default API;
