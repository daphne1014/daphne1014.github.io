interface ColorBadgeProps {
    content:  string;
    bgColor: string;
    textColor: string;
  }
  
  export default function ColorBadge({content, bgColor, textColor}:ColorBadgeProps) {
    return (
      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium ${textColor} rounded-md ${bgColor} ring-1 ring-inset ring-gray-500/10`}>
        {content}
      </span>
    );
  }
  