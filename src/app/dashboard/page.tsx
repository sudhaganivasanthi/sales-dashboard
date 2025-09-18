"use client";
import { useState } from "react";
import { salesData } from "../../data/salesData";
import SalesChart from "../../components/charts/SalesChart";
import YearFilter from "../../components/charts/YearFilter";
import ChartSwitcher from "../../components/charts/ChartSwitcher";
import Navbar from "../../components/layout/Navbar";

export default function DashboardPage() {
  const [year, setYear] = useState("2024");
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");

  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">📊 Sales Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <YearFilter years={Object.keys(salesData)} selectedYear={year} onYearChange={setYear} />
          <ChartSwitcher type={chartType} onSwitch={setChartType} />
        </div>
        <div className="flex justify-center">
          <SalesChart data={salesData[parseInt(year) as keyof typeof salesData]} type={chartType} />
        </div>
      </main>
    </div>
  );
}
