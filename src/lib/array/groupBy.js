/**
 * 数组数据分组
 * @author xkloveme xkloveme@gmail.com
 * @category array
 * @alias array_groupBy
 * @param {Array} array 数组
 * @param {string | Function} key 分组的字段或函数
 * @returns {object} 返回按某字段或函数分组后的对象
 */
export default (array, key) => {
    const result = new Map();
    for (const item of array) {
        let groupKey;

        if (typeof key === 'string') {
            groupKey = item[key];
        } else if (typeof key === 'function') {
            groupKey = key(item);
        }

        if (!result.has(groupKey)) {
            result.set(groupKey, []);
        }
        result.get(groupKey).push(item);
    }
    return result;
};
