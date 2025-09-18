"use client";

interface YearFilterProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
}

export default function YearFilter({ years, selectedYear, onYearChange }: YearFilterProps) {
  return (
    <select
      className="border p-2 rounded-md"
      value={selectedYear}
      onChange={(e) => onYearChange(e.target.value)}
      aria-label="Select Year"
    >
      {years.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
  );
}
