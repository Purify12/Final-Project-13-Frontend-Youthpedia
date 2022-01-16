import React from 'react';
import { Link } from 'react-router-dom';

import {
    Button, Card
} from "react-bootstrap";
import Img from "../pic/Article.png"

class CardComp extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Card>
                <Card.Img top width="100%" src={Img} alt="Card image cap" />
                <Card.Body>
                    <Card.Title>{this.props.judul}</Card.Title>
                    <Card.Subtitle>{this.props.tanggal}</Card.Subtitle>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                    <Button variant="outline-primary">
                        <Link to=
                            {
                                {
                                    pathname: `/detail/${this.props.id}`,
                                    state: {
                                        judul: this.props.judul,
                                        tanggal: this.props.tanggal
                                    }
                                }
                            }>Detail
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        )
    }

}

export default CardComp
