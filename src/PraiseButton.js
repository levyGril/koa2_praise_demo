/**
 * Created by levy on 2018/3/26.
 */
import API from './API.js';

class PraiseButton{
    /**
     * [constructor description]
     * @param  {Number} num  [初始值]
     * @return {[type]}      [description]
     */
    constructor(num, element){
        this.num = num;
        this.element = element;
    }
    /**
     * [praise 该方法返回当前实例的点赞次数]
     * @return {[type]} [description]
     */
    clickAction(){
        // this.praise_num = this.praise_num+1;
        this.element.click(()=>{
           $("#animation").addClass('num');
            this.num = add(this.num);
            setTimeout(function () {
                $("#animation").removeClass('num');
            }, 1000);

            // 页面的点赞更新
            $("#animation").text(`+${this.num}`);

            // 调用API
            new API().savePraise(this.num);

        });
    }
}

export default PraiseButton;

