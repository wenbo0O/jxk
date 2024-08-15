/**
 * 将数字转为32位 bit 数组
* @author xkloveme xkloveme@gmail.com
 * @category number
 * @alias number_toBits
 * @param {Number} num
 * @param {Number} [length] 比特数组长度 默认`32`位
 * @returns 返回对应位数的比特
 * @example {[0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1]}
 */
export default (num, length = 32) => {
    const bits = new Array(length);
    for (let i = length - 1; i >= 0; i--) bits[i] = (num >> i) & 1;
    return bits;
};
