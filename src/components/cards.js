import React, { Component } from 'react';
import { Card, CardImg, Button, ListGroup} from 'react-bootstrap';


class PlayerCard extends Component{
    constructor(props){
        super(props);
    }
    render (){
        let { player_id, fga, fta, ft_pct, dreb, oreb, turnover } = this.props.player;
        function mapName(prop){
            switch(prop){
                case 140:
                    return "Kevin Durant";
                case 192:
                    return "James Harden";
                default:
                    return "Kyie Irving";
            };
        }
        return (
            <div>
                <Card border="dark" className="text-center" style={{ width: '18rem' }}>
                    <CardImg variant="top" src={this.props.player.image}/>
                    <Card.Body>
                        <Card.Title>{mapName(player_id)}</Card.Title>
                        <Button>Click Me</Button>
                            <ListGroup>
                                <ListGroup.Item>fga: {fga}</ListGroup.Item>
                                <ListGroup.Item>fta: {fta}</ListGroup.Item>
                                <ListGroup.Item>ft%: {ft_pct}</ListGroup.Item>
                                <ListGroup.Item>dreb: {dreb}</ListGroup.Item>
                                <ListGroup.Item>oreb: {oreb}</ListGroup.Item>
                                <ListGroup.Item>turnover: {turnover}</ListGroup.Item>
                            </ListGroup>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default PlayerCard;