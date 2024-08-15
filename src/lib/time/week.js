/**
 * 返回当前日期是星期几
 * @author tank
 * @category time
 * @alias time_week
 * @returns {string} 周几
 */
export default () => {
    const date = new Date();
    const day = date.getDay();
    const names = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return names[day];
};