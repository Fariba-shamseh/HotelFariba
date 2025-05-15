import { formatDistance, parseISO, differenceInDays } from "date-fns";

/**
 * فرمت‌دهنده‌های تاریخ و مبلغ
 */
export const format = {
  /**
   * محاسبه تفاوت روز بین دو تاریخ
   * @param {string|Date} dateStr1 - تاریخ اول
   * @param {string|Date} dateStr2 - تاریخ دوم
   * @returns {number} تعداد روزهای تفاوت
   */
  subtractDates: (dateStr1, dateStr2) =>
    differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2))),

  /**
   * نمایش فاصله زمانی از حالا به صورت متن خوانا
   * @param {string|Date} dateStr - تاریخ
   * @returns {string} متن مانند "2 days ago"
   */
  formatDistanceFromNow: (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
    })
      .replace("about ", "")
      .replace("in", "In"),

  /**
   * دریافت تاریخ امروز با امکان تنظیم به ابتدا یا انتهای روز
   * @param {Object} options - تنظیمات
   * @param {boolean} [options.end] - اگر true باشد، به انتهای روز تنظیم می‌شود
   * @returns {string} تاریخ به فرمت ISO
   */
  getToday: (options = {}) => {
    const today = new Date();
    if (options?.end) {
      // تنظیم به آخرین ثانیه روز
      today.setUTCHours(23, 59, 59, 999);
    } else {
      today.setUTCHours(0, 0, 0, 0);
    }
    return today.toISOString();
  },

  /**
   * فرمت‌دهی مبلغ به صورت ارز
   * @param {number} value - مقدار عددی
   * @returns {string} مبلغ فرمت شده مانند "$100.00"
   */
  formatCurrency: (value) =>
    new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value),

  formatCurrencyRial: (value) =>
    new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency: "IRR",
      maximumFractionDigits: 0,
    }).format(value),

  formatCurrencyToman: (value) => {
    const tomanValue = value / 10;
    return (
      new Intl.NumberFormat("fa-IR", {
        style: "decimal",
        maximumFractionDigits: 0,
      }).format(tomanValue) + " تومان"
    );
  },
};
