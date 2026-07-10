
export default function DashboardHeader() {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

    return (
        <header className="flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold">Good morning, User!👋</h1>
                <p className="text-gray-500">Here's your money snapshot for today.</p>
            </div>

            <div className="text-right">
                <p className="text-sm text-gray-500">Today</p>
                <p className="font-semibold">{formattedDate}</p>   
            </div>
        </header>
    );
}
