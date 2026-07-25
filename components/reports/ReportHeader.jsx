export default function ReportHeader() {
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
                <h1 className="text-xl font-bold">Reports</h1>
                <p className="text-gray-500">Track, analyze and improve your financial health</p>
            </div>

            <div className="text-right">
                <p className="text-sm text-gray-500">Today</p>
                <p className="font-semibold">{formattedDate}</p>   
            </div>
        </header>
    );
}
