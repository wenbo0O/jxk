/**
 * 判断是否是空值
 * @author xkloveme <xkloveme@gmail.com>
 * @category is
 * @alias is_empty
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是空值
 */
export default (value) => {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string') {
    return value.trim() === '';
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
};
