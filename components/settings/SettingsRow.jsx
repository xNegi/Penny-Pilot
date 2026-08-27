export default function SettingRow({ icon, title, subtitle, right, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center justify-between p-4 border-t border-gray-200 
        ${onClick ? "cursor-pointer hover:bg-gray-50 transition" : ""}`}
        >
      <div className="flex items-center justify-between gap-4">
        {icon}
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="text-gray-500 text-sm">{right}</div>
    </div>
  );
}
