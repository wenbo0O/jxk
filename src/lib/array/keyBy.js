/**
 * 数组按key排序
 * @author xkloveme xkloveme@gmail.com
 * @category array
 * @alias array_keyBy
 * @param {Array} array 数组
 * @param {string} field 映射字段
 * @returns {object} 返回根据字段映射的对象
 */
export default (array, field) => {
    const result = {};
    array.forEach((item) => {
        result[item[field]] = item;
    });
    return result;
};
