
import { cn } from "@/lib/utils";

interface CodeViewProps {
  title?: string;
  code: string;
  className?: string;
}

export const S_CodeView = ({ title, code, className }: CodeViewProps) => {
  return (
    <div className={cn("bg-gray-100 text-gray-500 text-sm font-mono relative overflow-hidden", className)}>
      {title && (
        <div className="p-2 pt-4 pl-4 bg-gray-200 font-bold inline-block rounded-md absolute -top-2 -left-2">
          {title}
        </div>
      )}
      <pre className="p-2 pt-10 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
        <code className="leading-relaxed">
          {code}
        </code>
      </pre>
    </div>

  );
};

