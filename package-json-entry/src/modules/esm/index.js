/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 16:53:25
 * @LastEditTime: 2020-04-06 17:46:16
 */

const foo = function () {
    console.log('[ES Module] foo function from js');
};

const bar = function () {
    console.log('[ES Module] bar function from js');
};

export { foo, bar };