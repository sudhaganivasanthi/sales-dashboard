"use client";

interface ChartSwitcherProps {
  type: string;
  onSwitch: (type: "bar" | "line" | "pie") => void;
}

export default function ChartSwitcher({ type, onSwitch }: ChartSwitcherProps) {
  return (
    <div className="space-x-2">
      <button onClick={() => onSwitch("bar")} aria-label="Bar Chart" className="px-3 py-1 bg-blue-500 text-white rounded-md">Bar</button>
      <button onClick={() => onSwitch("line")} aria-label="Line Chart" className="px-3 py-1 bg-green-500 text-white rounded-md">Line</button>
      <button onClick={() => onSwitch("pie")} aria-label="Pie Chart" className="px-3 py-1 bg-yellow-500 text-white rounded-md">Pie</button>
    </div>
  );
}
