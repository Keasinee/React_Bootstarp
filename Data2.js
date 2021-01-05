import React,{ Component,useState } from 'react';
import { Tab,Tabs,Sonnet,Container,Row,Col,Nav} from 'react-bootstrap';
import Branding from '../img/branding.jpg'
import Branding2 from '../img/branding2.jpg'
import Design from '../img/design.jpg'
import Design2 from '../img/design2.jpg'
import Photo from '../img/photo.jpg'
import Photo2 from '../img/photo2.jpg'
import Coffee from '../img/coffee.jpg'
import Coffee2 from '../img/coffee2.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Data2(){
        const [key, setKey] = useState('all');
        return(
            
            <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
           
            <Tab eventKey="all" title="ALL">
            <Container>
                <Row>
                    <Col xs={3} md={3}>
                        <div className="pic-frame">
                            <img src={Branding} alt="Branding" className="pic"/>
                        </div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className="pic-frame">
                            <img src={Design} alt="Design" className="pic"/>
                        </div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className="pic-frame">
                            <img src={Photo} alt="Photo" className="pic"/>
                        </div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className="pic-frame">
                            <img src={Coffee} alt="Coffee" className="pic"/>
                        </div>
                    </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                <Col xs={6} md={3}>
                        <div className="pic-frame">
                            <img src={Branding2} alt="Branding" className="pic"/>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="pic-frame">
                            <img src={Design2} alt="Design" className="pic"/>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="pic-frame">
                            <img src={Photo2} alt="Photo" className="pic"/>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="pic-frame">
                            <img src={Coffee2} alt="Coffee" className="pic"/>
                        </div>
                    </Col>
                </Row>

                
                </Container>

            </Tab>
            <Tab eventKey="branding" title="BRANDING">
                <div>
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Branding} alt="Branding" className="pic-select"/>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Branding2} alt="Branding" className="pic-select"/>
                            </div>
                        </Col>

                    </Row>
                </Container>
                </div>
            </Tab>
            <Tab eventKey="design" title="DESIGN">
                <div>
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Design} alt="Design" className="pic-select"/>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Design2} alt="Design" className="pic-select"/>
                            </div>
                        </Col>

                    </Row>
                </Container>
                </div>
            </Tab>
            <Tab eventKey="photo" title="PHOTO">
                <div>
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Photo} alt="Photo" className="pic-select"/>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Photo2} alt="Photo" className="pic-select"/>
                            </div>
                        </Col>

                    </Row>
                </Container>
                </div>
            </Tab>
            <Tab eventKey="coffee" title="COFFEE">
                <div>
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Coffee} alt="Coffee" className="pic-select"/>
                            </div>
                        </Col>
                        <Col xs={6} md={6}>
                            <div className="pic-frame">
                                <img src={Coffee2} alt="Coffee" className="pic-select"/>
                            </div>
                        </Col>

                    </Row>
                </Container>
                </div>
            </Tab>
            </Tabs>
        );
}

export default Data2; 