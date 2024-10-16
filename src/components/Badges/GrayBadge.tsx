interface GrayBadgeProps {
  content:  string;
}

export default function GrayBadge({content}:GrayBadgeProps) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-300 rounded-md bg-gray-50 bg-opacity-30 ring-1 ring-inset ring-gray-500/10">
      {content}
    </span>
  );
}
