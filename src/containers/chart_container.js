import React, { useState, useEffect } from 'react';
import { csv } from 'd3-request';
import { Bar } from 'react-chartjs-2';
<<<<<<< HEAD
import { Container } from 'react-bootstrap';

import barData from './data/nbaData.csv';


=======

import barData from './data/nbaData.csv';

>>>>>>> 2dcd92d34becfc79a0762659af0f0dc59bf42f17
const BarChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
<<<<<<< HEAD
        //ETL data to something chart can read
=======
        //transforming data to something chart can read
>>>>>>> 2dcd92d34becfc79a0762659af0f0dc59bf42f17
        const pairplayer = [];
        const offrtg = [];
        const defrtg = [];
        const netrtg = [];
        //extracting in all players and data for offrtg, defrtg, and net rating dataset
        csv(barData, function(d){
            d.forEach(function(entry){
                pairplayer.push(entry.LINEUPS.substring(entry.LINEUPS.indexOf(",")+3))
                offrtg.push(parseFloat(entry.OFFRTG))
                defrtg.push(entry.DEFRTG * -1)
                netrtg.push(parseFloat(entry.NETRTG))
            })
            // console.log(pairplayer, offrtg, defrtg, netrtg);
            //"loading" data
            setChartData({
                labels: pairplayer,
                datasets: [{
                    label: "OFFRTG",
                    stack: "Stack 0",
                    data: offrtg,
                    backgroundColor: 'rgba(75,192,192,0.6)'
                },
                {
                    label: "DEFRTG",
                    stack: "Stack 0",
                    data: defrtg,
                    backgroundColor: 'rgba(255,0,0,0.6)'
                },
                {
                    label: "NETRTG",
                    data: netrtg,
                    type: 'line',
                    fill: false,
                    backgroundColor: 'rgba(0,0,0,0.9)'
                }

            ]
            })
        }
    );
    }
    const options = {
        title: {
            display: true,
            text: "Durant Second Man Pair"
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
    useEffect(() => {
        chart();
    }, [])
    return(
        <div>
            <Bar data={chartData} options={options} />
        </div>
<<<<<<< HEAD

=======
>>>>>>> 2dcd92d34becfc79a0762659af0f0dc59bf42f17
    )
}
export default BarChart;