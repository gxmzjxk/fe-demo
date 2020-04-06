/*
 * @Description:
 * @Author: Xiaokun.jiang
 * @Email: jiangxiaokun@bytedance.com
 * @Date: 2020-04-06 16:53:25
 * @LastEditTime: 2020-04-06 17:39:34
 */

const foo = function () {
    console.log('[ES Module] foo function from mjs');
};

const bar = function () {
    console.log('[ES Module] bar function from mjs');
};

export { foo, bar };
