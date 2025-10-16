export default function TicketField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs lg:text-sm text-[#002457]/50 font-bold uppercase mb-1">
        {label}
      </p>
      <p className="text-sm sm:text-base lg:text-xl font-bold text-[#002457]">
        {value}
      </p>
    </div>
  );
}
