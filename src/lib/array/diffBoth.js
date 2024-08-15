/**
 * 数组的差集
 * @author xkloveme <xkloveme@gmail.com>
 * @category array
 * @alias array_diffBoth
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @returns Array 数组的差集
 */

export default (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // 创建两个数组的对称差集
    const uniqueElements = [];

    for (const item of set1) {
        if (!set2.has(item)) {
            uniqueElements.push(item);
        }
    }
    for (const item of set2) {
        if (!set1.has(item)) {
            uniqueElements.push(item);
        }
    }

    return uniqueElements;
};
