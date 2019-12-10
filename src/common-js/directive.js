import Vue from "vue";
import Reg from "./reg.js";
import Base from "./base.js";
class ElInput extends Base {
    constructor() {
        super();
    }

    /**
     * 空格过滤
     * @param {String} val 
     */
    filterSpace(val) {
        let content = val || "";
        return content.replace(Reg.G_S, "");;
    }

    /**
     * 密码过滤
     * @param {String} val 
     */
    filterPassWord(val) {
        let content = val || "";
        return content.match(Reg.G_Pass) ? content.match(Reg.G_Pass).join("") : "";
    }
    /**
     * 只允许数字
     * @param {String} val 
     */
    filterNumber(val) {
        let content = val || "";
        return content.match(Reg.G_Num) ? content.match(Reg.G_Num).join("") : "";
    }

    /**
     * 过滤方法
     * @param {*} el 
     * @param {*} binding 
     */
    elInputFilter(el, binding) {
        if (this.isEmpty(binding.arg) || this.isEmpty(el)) {
            // 判断节点是否为空
            return;
        }
        /**
         * 绑定节点
         */
        var _InputElement = this.InputElement(el, binding);
        switch (binding.arg) {
            case 'password':
                this.EventListener(binding, _InputElement, this.filterPassWord)
                break;
            case 'space':
                this.EventListener(binding, _InputElement, this.filterSpace)
                break;
            case 'number':
                this.EventListener(binding, _InputElement, this.filterNumber)
                break;
            default:
                break
        }
    }
    /**
     * 绑定事件，千万不要研究@input事件
     */
    EventListener(binding, el, event) {
        /**
         * 为bind时,绑定
         */
        if (binding.HOOK_TYPE === 'bind') {
            /**
             * 绑定keyDown
             */
            el.addEventListener("keydown", (val) => {
                el.value = event(el.value);
            }, true);
            /**
             * 绑定keyUp
             */
            el.addEventListener("keyup", (val) => {
                el.value = event(el.value);
            }, true);
            /**
             * 绑定keyDown
             */
            el.addEventListener("change", (val) => {
                el.value = event(el.value);
            }, true);
        }
        /**
         * 为unbind时，解除
         */
        if (binding.HOOK_TYPE === 'unbind') {
            el.removeEventListener("keydown", (val) => {
                el.value = event(el.value);
            }, true);
            /**
             * 绑定keyUp
             */
            el.removeEventListener("keyup", (val) => {
                el.value = event(el.value);
            }, true);
            /**
             * 绑定keyDown
             */
            el.removeEventListener("change", (val) => {
                el.value = event(el.value);
            }, true);
        }
    };
    /**
     * 删除绑定事件
     * @param {*} el 
     * @param {*} binding 
     */
    RemoveEvents(el) {
        /**
         * 清除绑定keyDown
         */
        el.detachEvent("keydown", (val) => {}, true);
        /**
         * 清除绑定keyUp
         */
        el.detachEvent("keyup", (val) => {}, true);
        /**
         * 清除绑定keyDown
         */
        el.detachEvent("change", (val) => {}, true);
    }

    /**
     * 返回 input 元素
     * @param {el,binding};
     */
    InputElement(el, binding) {
        if (this.isEmpty(el.children[0])) {
            return;
        }
        /**
         * el-input组件下的 > input 元素
         */
        if (binding.name === "input-filter") {
            return el.children[0];
        }
    };
}

var elInput = new ElInput();

/**
 * 全局el-input 过滤自定义指令
 */
Vue.directive("input-filter", {
    bind(el, binding, vnode, oldVnode) {
        binding.HOOK_TYPE = "bind";
        elInput.elInputFilter(el, binding);
    },
    unbind(el, binding, vnode) {
        binding.HOOK_TYPE = "unbind";
        elInput.elInputFilter(el, binding);
    }
});
