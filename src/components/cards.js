import React, { Component } from 'react';
import { Card, CardImg, Button, ListGroup, Accordion } from 'react-bootstrap';


class PlayerCard extends Component{
    render (){
        let { player_id, fga, fta, ft_pct, dreb, oreb, turnover } = this.props.player;
        function mapName(prop){
            switch(prop){
                case 140:
                    return "Kevin Durant";
                case 192:
                    return "James Harden";
                default:
                    return "Kyrie Irving";
            };
        }
        return (

            <Accordion style={{ display: 'flex', justifyContent:'center' }}>
                <Card className="text-center" style={{ width: '18rem', margin: 10}}>
                    <CardImg variant="top" src={this.props.player.image}/>
                    <Card.Body>
                        <Card.Title>{mapName(player_id)}</Card.Title>
                            <Accordion.Toggle as={Button} varient="link" eventKey="0">Stats</Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <ListGroup style={{margin: 15}}>
                                        <ListGroup.Item>fga: {fga}</ListGroup.Item>
                                        <ListGroup.Item>fta: {fta}</ListGroup.Item>
                                        <ListGroup.Item>ft%: {ft_pct}</ListGroup.Item>
                                        <ListGroup.Item>dreb: {dreb}</ListGroup.Item>
                                        <ListGroup.Item>oreb: {oreb}</ListGroup.Item>
                                        <ListGroup.Item>turnover: {turnover}</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Collapse>
                        </Card.Body>
                    </Card>
            </Accordion>
        )
    }
}
export default PlayerCard;