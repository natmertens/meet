import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => { setData(() => getData()); }, [events]);

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const summary = events.map((event) => {
      const eventSummary = event.summary;
      return { eventSummary };
    });

    const data = genres.map((genre) => {
      const name = genre;
      const value = summary.filter((summary) =>
        summary.eventSummary.split(' ').includes(name)
      ).length;
      return { name, value };
    });

    return data.filter((data) => data.value >= 1);
  }

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={getData()}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
        </Pie>

      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;