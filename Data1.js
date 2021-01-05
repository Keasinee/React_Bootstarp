import React from 'react';
import { Component } from 'react';
import { Container,Row,Col,Card} from 'react-bootstrap';
import { BsFillDisplayFill,BsFillGearFill,BsFillPieChartFill} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

class Data1 extends Component {
    render(){
        return(
            <div>
            <Container>
                <Row>
                    <Col><h4 style={{textAlign : 'center'}}>Our Service</h4></Col>
                </Row>
                <Row>
                    <Col>
                    <div className="box">
                    <Card  className="card-fix">
                        <Card.Body>
                            <Card.Title><BsFillDisplayFill className="icon"/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">WEB DESIGN</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="box">
                    <Card className="card-fix">
                        <Card.Body>
                            <Card.Title><BsFillGearFill className="icon"/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">DEVELOPMENT</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="box">
                    <Card className="card-fix">
                        <Card.Body>
                            <Card.Title><BsFillPieChartFill className="icon"/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">BRANDING</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="box">
                    <Card className="card-fix">
                        <Card.Body>
                            <Card.Title><BsFillDisplayFill className="icon"/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">PHOTOGRAPHY</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="box">
                    <Card className="card-fix">
                        <Card.Body>
                            <Card.Title><BsFillGearFill className="icon"/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">TYPOGRAPHY</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                    <Col>
                    <div className="box">
                    <Card className="card-fix">
                        <Card.Body>
                            <Card.Title><BsFillPieChartFill className="icon"/></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">UI DESIGN</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Data1;