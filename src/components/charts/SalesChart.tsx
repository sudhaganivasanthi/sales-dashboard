"use client";
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie,
  XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from "recharts";

interface SalesChartProps {
  data: { month: string; sales: number }[];
  type: "bar" | "line" | "pie";
}

export default function SalesChart({ data, type }: SalesChartProps) {
  if (type === "bar") {
    return (
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    );
  }

  if (type === "line") {
    return (
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
    );
  }

  return (
    <PieChart width={600} height={300}>
      <Pie dataKey="sales" data={data} cx="50%" cy="50%" outerRadius={100} fill="#ffc658" label />
      <Tooltip />
    </PieChart>
  );
}

