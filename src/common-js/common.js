import Base from "./base.js";
class Common extends Base {
    constructor() {
        super();
    }
    /**
     * 生成uuid();
     */
    uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }
    /**
     * 倒计时，秒为单位
     */
    countDown(s, callback) {
        if (!this.isNum(s)) {
            return;
        }
        var _S = s;
        var Interval = setInterval(function () {
            if (_S < 1) {
                clearInterval(Interval);
                callback(_S, "stop");
                return;
            }
            _S--;
            callback(_S);
        }, 1000);
        return Interval;
    }
}
export default new Common();
