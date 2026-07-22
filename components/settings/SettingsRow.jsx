export default function SettingRow({ icon, title, subtitle, right }) {
  return (
    <div className="flex items-center justify-between p-4 border-t border-gray-200 ">
      <div className="flex items-center justify-between gap-4">
        {icon}
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
      </div>
        <p className="text-gray-500 text-sm">{right}</p>
    </div>

  );
}
