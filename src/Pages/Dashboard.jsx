import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import "./Style/Dashboard.css";
import { PieChart, Pie, Cell } from "recharts";
import { Zap, Activity, Thermometer, Repeat, Battery, PlugZap } from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState({
    percentage: 0,
    health: 0,
    voltage: 0,
    current: 0,
    temperature: 0,
    cycles: 0,
    capacity: 0,
    status: "Unknown",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://battery-management.runasp.net/api/battery");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching battery data:", err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const PercentData = [
    { name: "Battery", value: data.percentage },
    { name: "Remaining", value: 100 - data.percentage },
  ];
  const HealthData = [
    { name: "Battery", value: data.health },
    { name: "Remaining", value: 100 - data.health },
  ];

  const COLORS = ["#22c55e", "#e5e7eb"];

  return (
    <div className="dashboard">
      <div className="top-row">
        <Card width="50%" height={330}>
          <h2>Battery Percentage</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={PercentData}
              innerRadius={70}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {PercentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <div className="battery-percent">{data.percentage}%</div>
        </Card>

        <Card width="50%" height={330}>
          <h2>Battery Health</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={HealthData}
              innerRadius={70}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {HealthData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
          <div className="battery-percent">{data.health}%</div>
        </Card>
      </div>

      {/* First Stats Row */}
      <div className="stats-row">
        <Card height={130} className="stat-card">
          <Zap className="icon" />
          <div>
            <p className="label">Voltage</p>
            <h2>{data.voltage} V</h2>
          </div>
        </Card>

        <Card height={130} className="stat-card">
          <Activity className="icon" />
          <div>
            <p className="label">Current</p>
            <h2>{data.current} A</h2>
          </div>
        </Card>

        <Card height={130} className="stat-card">
          <Thermometer className="icon" />
          <div>
            <p className="label">Temperature</p>
            <h2>{data.temperature}°C</h2>
          </div>
        </Card>
      </div>

      {/* Second Stats Row */}
      <div className="stats-row">
        <Card height={130} className="stat-card">
          <Repeat className="icon" />
          <div>
            <p className="label">Cycles</p>
            <h2>{data.cycles}</h2>
          </div>
        </Card>

        <Card height={130} className="stat-card">
          <Battery className="icon" />
          <div>
            <p className="label">Capacity</p>
            <h2>{data.capacity} mAh</h2>
          </div>
        </Card>

        <Card height={130} className="stat-card">
          <PlugZap className="icon" />
          <div>
            <p className="label">Status</p>
            <h2>{data.status}</h2>
          </div>
        </Card>
      </div>
    </div>
  );
}
