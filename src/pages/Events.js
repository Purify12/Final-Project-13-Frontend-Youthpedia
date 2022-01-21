import React from 'react'
import NavUser from '../components/NavUser'
import { Button, Card } from 'react-bootstrap'
import E1 from "../pic/e1.png"
import E2 from "../pic/e2.png"
import E3 from "../pic/e3.png"
import E4 from "../pic/e4.png"
import E5 from "../pic/e5.png"
import E6 from "../pic/e6.png"
import E7 from "../pic/e7.png"
import E8 from "../pic/e8.png"
import Img2 from "../pic/like.png"

function Events() {
    return (
        <div>
            <NavUser/>
            <div class="row py-2 pl-4">
                <div class="col-md-2">
                <Button variant="warning">All Events</Button>
                </div>
                <div class="col-md-2">
                <Button variant="warning">Online Events</Button>
                </div>
                <div class="col-md-2">
                <Button variant="warning">Offline Events</Button>
                </div>
                <div class="col-md-2">
                <Button variant="warning">Festival</Button>
                </div>
                <div class="col-md-2">
                <Button variant="warning">Competition</Button>
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
                                        <Card.Title><b>BALI TIIATEX EXPO 2021 (PAMERAN PARIWISATA, INVESTASI, PERDAGANGAN, PERINDUSTRIAN, UKM, PERIKANAN DAN PERTANIAN)</b></Card.Title>
                                        <Card.Text>
                                        Location               : Online           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              :  27 Agustus - 4 September 2021         
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
                                        <Card.Title><b>Lomba Pekan Usaha – Ruang UMKM Festival</b></Card.Title>
                                        <Card.Text>
                                        Location               : Online           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 20 Agustus - 17 September 2021         
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
                                        <Card.Title><b>Festival Budaya</b></Card.Title>
                                        <Card.Text>
                                        Location               : Grebeg Syawalan, Yogyakarta           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 10 November 2021          
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
                                        <Card.Title><b>Lomba Cipta Puisi Se-Asia Tenggara</b></Card.Title>
                                        <Card.Text>
                                        Location               : Bali         
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 2-5 Desember 2021         
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
                                        <Card.Title><b>Lomba Cerdas Cermat Palang Merah Indonesia</b></Card.Title>
                                        <Card.Text>
                                        Location               : Online          
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 3 September 2021          
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
                                        <Card.Title><b>SUNDANCE FILM FESTIVAL: ASIA 2021</b></Card.Title>
                                        <Card.Text>
                                        Location               : Online    
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 23-26 September 2021          
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
                                        <Card.Title><b>ELCOMFEST 2021</b></Card.Title>
                                        <Card.Text>
                                        Location               : Online           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 25-26 September 2021         
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
                                        <Card.Title><b>JOGJA TITAF Expo 2021 (Trade Investment
Industry Tourism Agriculture Marine – Fisheries and Foresty)</b></Card.Title>
                                        <Card.Text>
                                        Location               : Jogja City Mall           
                                        </Card.Text>
                                        <Card.Text>
                                        Schedule              : 18 – 21 November 2021         
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

export default Events
