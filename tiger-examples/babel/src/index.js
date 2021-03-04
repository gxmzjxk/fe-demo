import { Bar } from './bar';
// let const
let a = 1;
const b = 2;
// 箭头函数
const arrowFunc = () => {
    return '';
}
// 类
class Foo {
    hello() {
        console.log('hello')
    }
}

// promise
function fetchSth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('fetchSth');
        }, 1000);
    })
}
// async/await
async function sayHi() {
    const msg = await fetchSth();
    // ES6/ES7 feature
    console.log(`template: ${msg}`);
}