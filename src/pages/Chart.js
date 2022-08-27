import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart, ArcElement, Tooltip} from 'chart.js'

Chart.register(ArcElement);
Chart.register([Tooltip]);

export default function Charts({chartsData}) {
  return (
    <div>
    <Doughnut
      data={chartsData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Cryptocurrency prices"
          },
          legend: {
            display: true,
            position: "bottom"
         },
         layout: {
            padding: {                
              top: 20                
            },
          },
          responsive:true,
          tooltips: {
            // backgroundColor: 'rgba(47, 49, 66, 0.8)',
            titleFontSize: "22px",
            titleFontColor: '#fff',
            // caretSize: 0,
            // cornerRadius: 4,
            xPadding: 10,
            displayColors: true,
            yPadding: 10
          },
          animation: {
            "duration": "1000"
          }
        }
      }}
    />
  </div>
  )
}
