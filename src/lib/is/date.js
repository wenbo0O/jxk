import { getValueType } from '../../utils/common';
/**
 * 判断是否是日期
 * @author xkloveme <xkloveme@gmail.com>
 * @category is
 * @alias is_date
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是日期
 */
export default (value) => {
  return getValueType(value) === '[object Date]';
};
