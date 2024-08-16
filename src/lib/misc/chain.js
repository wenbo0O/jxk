/**
 * 链式调用函数
 * @author jay0815
 * @category misc
 * @alias misc_chain
 * @param  {...any} funcs 函数数组
 * @returns {function} 返回一个函数。
 * @summary 该函数接受任意数量的参数，并将这些参数依次传递给函数数组中的每个函数。
 * 第一个函数接收原始参数，后续函数接收前一个函数的返回值，最终返回最后一个函数的结果。
 * @example
 * const add = (x) => x + 1;
 * const multiply = (x) => x * 2;
 * const subtract = (x) => x - 3;
 * const chainedFunction = misc_chain(add, multiply, subtract);
 * console.log("调用链式函数并输出结果", chainedFunction(5)); // (5 + 1) * 2 - 3 = 9
 * @example
 * const toUpperCase = (str) => str.toUpperCase();
 * const addExclamation = (str) => str + '!';
 * const repeat = (str) => str + str;
 * const shout = misc_chain(toUpperCase, addExclamation, repeat);
 * console.log("调用链式函数并输出结果",shout('hello')); // "HELLO!HELLO!"
 */
export default (...funcs) => {
  return (...args) => {
    // 执行第一个函数，并将结果作为初始值传递给 reduce
    return funcs.reduce(
      (acc, fn, index) => {
        if (typeof fn === 'function') {
          // 如果是第一个函数，直接执行并返回结果作为初始值
          if (index === 0) {
            return fn(...args);
          }
          // 对于后续的函数，使用前一个函数的结果作为参数
          return fn(acc);
        }
        throw new Error(`第${index}个参数必须是一个函数`);
      },
      void 0
    );
  };
};
