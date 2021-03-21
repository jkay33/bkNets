import React, { useState, useEffect } from 'react';
import { csv } from 'd3-request';
import { Line } from 'react-chartjs-2';
import { Container, Row, Col } from 'react-bootstrap';

import './chart.css';
import shootingData from './data/nbaShootingData.csv';


const ShootingChart = () => {
    const [shotData, setShotData] = useState({});

    const shotChart = () => {
        //ETL data to something chart can read
        const player = [];
        const lessThan5 = [];
        const five9ft = [];
        const ten14ft = [];
        const fifteen19ft = [];
        const twenty24ft = [];
        const twentyfive29ft = [];
        //extracting in all players and distance data
        csv(shootingData, function(s){
            s.forEach(function(temp){
                if((temp.PLAYER === "Kevin Durant") || (temp.PLAYER === "James Harden") || (temp.PLAYER === "Kyrie Irving")){
                    player.push(temp.PLAYER)
                    lessThan5.push(parseFloat(temp['LESS THAN 5FT.FG%']))
                    five9ft.push(parseFloat(temp['5-9 FT.FG%']))
                    ten14ft.push(parseFloat(temp['10-14 FT.FG%']))
                    fifteen19ft.push(parseFloat(temp['15-19 FT.FG%']))
                    twenty24ft.push(parseFloat(temp['20-24 FT.FG%']))
                    twentyfive29ft.push(parseFloat(temp['25-29 FT.FG%']))
                }
            })
            setShotData({
                labels: ["LESS THAN 5FT", "5-9FT","10-14FT","15-19FT","20-24FT","25-29ft"],
                datasets: [
                    {
                        label: player[0],
                        data: [lessThan5[0], five9ft[0], ten14ft[0], fifteen19ft[0], twenty24ft[0], twentyfive29ft[0]],
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        borderColor: 'rgba(255,0,0,0.2)',
                        fill: false
                    },
                    {
                        label: player[1],
                        data: [lessThan5[1], five9ft[1], ten14ft[1], fifteen19ft[1], twenty24ft[1], twentyfive29ft[1]],
                        backgroundColor: 'rgba(0,0,255,0.5)',
                        borderColor: 'rgba(0,0,255,0.2)',
                        fill: false
                    },
                    {
                        label: player[2],
                        data: [lessThan5[2], five9ft[2], ten14ft[2], fifteen19ft[2], twenty24ft[2], twentyfive29ft[2]],
                        backgroundColor: 'rgba(0,255,0,0.5',
                        borderColor: 'rgba(0,255,0,0.2',
                        fill: false
                    }
                ]
            })
        })
        }
        
    const options = {
        title: {
            display: true,
            text: "Field Goal Percentage by Distance"
        },
        responsive: true
    }
    useEffect(() => {
        shotChart();
    }, [])
    return(
        <Container fluid>
            <Row>
                <Col>
                    <Line data={shotData} options={options} />
                </Col>
            </Row>
        </Container>
    )
}
export default ShootingChart;