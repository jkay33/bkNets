import React, { useState, useEffect } from 'react';
import { csv } from 'd3-request';
import { Bar } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

import './chart.css';
import barData from './data/nbaData.csv';


const BarChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        //ETL data to something chart can read
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
                    backgroundColor: 'rgba(0,255,0,0.4)'
                },
                {
                    label: "DEFRTG",
                    stack: "Stack 0",
                    data: defrtg,
                    backgroundColor: 'rgba(255,0,0,0.4)'
                },
                {
                    label: "NETRTG",
                    data: netrtg,
                    type: 'line',
                    fill: false,
                    showLine: false,
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
            text: "Durant Player Pairing Efficiency"
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
        <Container fluid>
            <h1>Kevin Durant Player Pairing Efficiency</h1>
            <Row>
                <Col>
                    <Bar data={chartData} options={options} />
                </Col>
            </Row>
        </Container>
    )
}
export default BarChart;