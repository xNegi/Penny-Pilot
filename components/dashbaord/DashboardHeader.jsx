import { useAuth } from "@/context/AuthContext";

export default function DashboardHeader() {
  const today = new Date();
  const { user, loading } = useAuth();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-content">
        <h1>
          Greetings, {loading ? "Loading..." : user?.fullName || "User"} 👋
        </h1>

        <p>Here's your money snapshot for today.</p>
      </div>

      <div className="dashboard-header-date">
        <p>Today</p>
        <strong>{formattedDate}</strong>
      </div>
    </header>
  );
}