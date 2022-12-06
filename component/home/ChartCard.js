import React, { useState } from "react";
import TopChart from "../TopChart";
import Card from "./Card";

function ChartCard() {
  const TopCharts = TopChart.map((data) => {
    return (
      <Card
        key={data.id}
        playlistId={data.id}
        img={data.images}
        title={data.name}
        artist={data.owner}
        description={data.description}
        // length={millisecondsToMinute(data.timestamp)}
      />
    );
  });

  return (
    <div className="w-full lg:w-1/3 mt-[47px] lg:mt-0">
      <h2 className="text-white text-2xl font-bold mb-3.5">Top Charts</h2>
      <div className="w-full flex flex-nowrap flex-row lg:flex-col top-chart-mobile">
        {TopCharts}
      </div>
    </div>
  );
}


export default ChartCard;
