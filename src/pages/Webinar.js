import React from 'react'
import NavUser from '../components/NavUser'
import { Button, Card, PlaceholderButton } from 'react-bootstrap'
import E1 from "../pic/w1.png"
import E2 from "../pic/w2.png"
import E3 from "../pic/w3.png"
import E4 from "../pic/w4.png"
import E5 from "../pic/w5.png"
import E6 from "../pic/w6.png"
import E7 from "../pic/w7.png"
import E8 from "../pic/w8.png"
import Img2 from "../pic/like.png"
import In from "../bendera/indonesia.png"
import Ls from "../bendera/laos.png"
import Sg from "../bendera/singapura.png"
import Ml from "../bendera/malaysia.png"
import Ph from "../bendera/filipina.png"


function Webinar() {
    return (
        <div>
            <NavUser/>
            <div class="row py-2 pl-4">
                <div class="col-md-2">
                <Button variant="outline-dark"><img src={In}/>INDONESIA</Button>
                </div>
                <div class="col-md-2">
                <Button variant="outline-dark"><img src={Ls}/>LAOS</Button>
                </div>
                <div class="col-md-2">
                <Button variant="outline-dark"><img src={Sg}/>SINGAPORE</Button>
                </div>
                <div class="col-md-2">
                <Button variant="outline-dark"><img src={Ml}/>MALAYSIA</Button>
                </div>
                <div class="col-md-2">
                <Button variant="outline-dark"><img src={Ph}/>PHILIPPINES</Button>
                </div>
            </div>
            <div class="row p-4">
                <div class="col-md-12 pb-4 mb-4">
                    <div class="row py-2">
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E1} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>ASEAN CROSS BORDER VIRTUAL INTERNSHIP</b></Card.Title>
                                        <Card.Text>
                                        Participents          : Free           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              :  28 Aug 2021         
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E2} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>EMPOWERING ASEAN YOUTH THROUGH CROSS-BORDER INTERNSHIP </b></Card.Title>
                                        <Card.Text>
                                        Participantes         : Free           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 13 Feb 2021         
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E3} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>HEALTHY CARE CAREER</b></Card.Title>
                                        <Card.Text>
                                        Participantes         : Free               
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 23 Jan 2021          
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E4} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>ASEAN YOUTH IN DIGITAL ERA</b></Card.Title>
                                        <Card.Text>
                                        Participantes         : Free         
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 6-8 Feb 2021         
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E5} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>ASEAN EDUTECH</b></Card.Title>
                                        <Card.Text>
                                        Participantes         : Free          
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 27 Feb 2021          
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E6} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>ASEAN SOCIAL ENTERPRISE DEVELOPMENT PROGRAMME</b></Card.Title>
                                        <Card.Text>
                                        Participantes         : Free    
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 16 Apr 2021          
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E7} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>INSPIRE NEXT GENERATION YOUNG WOMEN LEADERS</b></Card.Title>
                                        <Card.Text>
                                        Participantes         : Free        
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 8 Mar 2021         
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                        <div class="col-md-6">
                            <Card>
                                <div class="row">
                                    <div class="col-md-6 py-2">
                                        <Card.Img variant="top" src={E8} />
                                    </div>
                                    <div class="col-md-6 p-2">
                                        <Card.Body>
                                        <Card.Title><b>GROWING SOCIAL ENTREPRENEURSHIP MINDSET AMONG ASEAN YOUTHS</b></Card.Title>
                                        <Card.Text>
                                        LParticipantes         : Free         
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 24 Apr 2021         
                                        </Card.Text>
                                        <p class="p-2">
                                        <Button variant="primary" size="sm" href="/Favorite">
                                            <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                                        </Button>
                                        </p>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Webinar
