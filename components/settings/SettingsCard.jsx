export default function SettingsCard({
  icon,
  title,
  description,
  children,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-700 text-2xl flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-500 text-sm">
            {description}
          </p>
        </div>
      </div>

      {/* Everything inside the card */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}