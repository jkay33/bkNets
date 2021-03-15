import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlayerCard from '../components/cards';
import KD from './player_images/K. Durant.png';
import JH from './player_images/J. Harden.png';
import KI from './player_images/K. Irving.png';


//Balldontlie free NBA API 2020 season average for Durant(140), Harden(192), Irving(228)
const playerApi = "https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=140&player_ids[]=192&player_ids[]=228";

class CardContainer extends Component{
    constructor(props){
        super(props);
        this.state={ data:[] };
    }
    //Api call
    componentDidMount(){
        fetch(playerApi)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                this.setState({ data: data.data.map(t => ({
                    player_id: t.player_id,
                    fga: t.fga,
                    fta: t.fta,
                    ft_pct: t.ft_pct,
                    dreb: t.dreb,
                    oreb: t.oreb,
                    turnover: t.turnover,
                    image: this.findPic(t.player_id) 
                })) 
            })
        })
    }
    findPic(prop){
        switch(prop){
            case 140:
                return KD;
            case 192:
                return JH;
            default:
                return KI;
        };
    }
    
    
    render (){
        // const {data} = this.state;
        //console.log(this.state.data);
        let playerCards = this.state.data.map(data => {
            return (
                <Col sm="4" key={data.player_id}>
                    <PlayerCard player={data} />
                </Col>
            )

        })
        return(
            <Container fluid>
                <Row>
                    {playerCards}
                </Row>
            </Container>
        )
    }
}
export default CardContainer;