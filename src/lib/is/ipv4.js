/**
 * 判断一个字符串是否是一个合法的IPV4地址
 * @author mozzie <https://du-mozzie.github.io/>
 * @category is
 * @alias is_ipv4
 * @param {string} ip 需要判断的IP
 * @returns {boolean}  返回是否是一个合法的IPV4地址
 */
export default (ip) => {
  const parts = ip.split('.');

  if (parts.length !== 4) {
    return false;
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (!/^\d+$/.test(part) || (part.length > 1 && part[0] === '0')) {
      return false;
    }

    const num = Number(part);

    if (num < 0 || num > 255) {
      return false;
    }
  }

  return true;
};
