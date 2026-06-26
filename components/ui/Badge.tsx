export function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-border text-secondary bg-card">
      {label}
    </span>
  );
}
