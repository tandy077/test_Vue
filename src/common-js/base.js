/**
 * 基础方法
 */
class Base {
    constructor() {};
    /**
     * 是function(){}
     */
    isFun(_v) {
        if (_v instanceof Function) return true;
        return false;
    }
    /**
     * 类型为对象
     */
    isObj(_v) {
        if (_v instanceof Object) return true;
        return false;
    }
    /**
     * 类型为数组
     */
    isArr(_v) {
        if (_v instanceof Array) return true;
        return false;
    }
    /**
     * 类型为布尔
     */
    isBoo(_v) {
        if (typeof _v === "boolean") return true;
        return false;
    }
    /**
     * 类型为数字
     */
    isNum(_v) {
        if (typeof _v === "number") return true;
        return false;
    }
    /**
     * 类型为String
     */
    isStr(_v) {
        if (typeof _v === "string") return true;
        return false;
    }
    /**
     * 为空 ""、null、nudefined
     */
    isEmpty(_v) {
        if (_v === "" || _v === null || _v === undefined) return true;
        return false;
    }
    /**
     * 空数组 []
     */
    isEmptyArr(_v) {
        if (this.isArr(_v) && JSON.stringify(_v) === "[]") return true;
        return false;
    }
    /**
     * 空对象 {}
     */
    isEmptyObj(_v) {
        if (this.isObj(_v) && JSON.stringify(_v) === "{}") return true;
        return false;
    }
}

export default Base;
