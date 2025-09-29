import { SalesReportDashboard } from "@/components/features/analytics/sales-report-dashboard";
import AvailabilityCalendar from "@/components/calendar/availability-calendar";
import UserSalesTable from "@/components/calendar/user-sales";

export const dynamic = "force-dynamic";
export default function AnalyticsPage() {
  return (
    <div>
      <SalesReportDashboard />
      <UserSalesTable />
      <AvailabilityCalendar />
    </div>
  );
}
