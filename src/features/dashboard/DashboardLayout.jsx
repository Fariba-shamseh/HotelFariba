import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner.jsx";
import { useRecentBookings } from "./useRecentBookings.jsx";

const DashboardLayout = () => {
  const { bookings, isPending: isLoading } = useRecentBookings();
  if (isLoading) return <Spinner />;
  console.log(bookings);

  return (
    <div className="grid grid-cols-4 gap-6 mt-10">
      <div>آمارها</div>
      <div>فعالیت امروز</div>
      <div>نمودار مدت‌ اقامت</div>
      <div>نمودار فروش</div>
    </div>
  );
};

export default DashboardLayout;
