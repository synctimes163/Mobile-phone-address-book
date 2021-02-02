import Vue from 'vue';
import alertCom from "./Alert.vue";


var myAlert = (function() {
    var defaults = {
        title: "弹窗",
        body: "",
        confirm: null,
        cancel: null, 
    }


    // var alertCom = {
    //     template: `<div id="alert" ref="alert">
    //         <div class="alert_content">
    //             <div class="alert_title">{{ customTitle }}</div>
    //             <div class="alert_body">{{ customBody }}</div>
    //             <div class="alert_btn">
    //                 <button v-if="confirm" @touchstart="confirm">确定</button>
    //                 <button v-if="cancel" @touchstart="cancel">取消</button>
    //             </div>
    //         </div>
    //     </div>`,
    // }

    var MyComponent = Vue.extend(alertCom);

    return function(opts) {

        console.log("opts=>", opts)
        for(var attr in opts) {
            defaults[attr] = opts[attr]
        }

        var vm = new MyComponent({
            el: document.createElement("div"),
            data: {
                customTitle: defaults.title,
                customBody: defaults.body,
                confirm: defaults.confirm,
                cancel: defaults.cancel,
            }
        })

        document.body.appendChild(
            vm.$el
        ) 
    }
})();


export default myAlert;