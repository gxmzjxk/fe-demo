/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 16:53:13
 * @LastEditTime: 2020-04-06 17:36:56
 */
const foo = function () {
    console.log('[CommonJS] foo function');
};

const bar = function () {
    console.log('[CommonJS] bar function');
};

module.exports = {
    foo,
    bar
};
