import { formatDistance, parseISO, differenceInDays } from "date-fns";
import { faIR } from "date-fns/locale";

export const format = {
  // تابع تفریق تاریخ‌ها
  subtractDates: (dateStr1, dateStr2) =>
    differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2))),

  // تابع نمایش فاصله زمانی به فارسی
  formatDistanceFromNow: (dateStr) => {
    const distance = formatDistance(parseISO(dateStr), new Date(), {
      addSuffix: true,
      locale: faIR,
    });

    return (
      distance
        .replace("about ", "")
        .replace("کمتر از یک دقیقه پیش", "همین الان")
        // جایگزینی دقیق با Regex برای جلوگیری از خطا
        .replace(/(در) (\d+) (روز|هفته|ماه|سال|ساعت|دقیقه)/g, "$1 $2 $3 آینده")
        .replace(/پیش/g, "گذشته")
    );
  },

  // تابع دریافت تاریخ امروز
  getToday: (options = {}) => {
    const today = new Date();
    if (options?.end) {
      today.setUTCHours(23, 59, 59, 999);
    } else {
      today.setUTCHours(0, 0, 0, 0);
    }
    return today.toISOString();
  },

  // توابع فرمت‌دهی تاریخ
  isToday: (date) => {
    const today = new Date();
    const targetDate = new Date(date);
    return (
      targetDate.getDate() === today.getDate() &&
      targetDate.getMonth() === today.getMonth() &&
      targetDate.getFullYear() === today.getFullYear()
    );
  },

  // تابع تبدیل ارز به تومان
  formatCurrencyToman: (value) => {
    const tomanValue = value / 10; // تبدیل ریال به تومان
    return (
      new Intl.NumberFormat("fa-IR", {
        style: "decimal",
        maximumFractionDigits: 0,
      }).format(tomanValue) + " تومان"
    );
  },
};
