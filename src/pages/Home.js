import React, {useState, useEffect} from 'react'
import Slider from '../components/Slider'
import { Row, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'
import Img from "../pic/Article.png"
import Img1 from "../pic/a2.png"
import Img2 from "../pic/a3.png"
import Img3 from "../pic/a4.png"
import Img4 from "../pic/a5.png"
import Img5 from "../pic/a6.png"
import Img6 from "../pic/a7.png"
import Img7 from "../pic/a8.png"
import Img8 from "../pic/a9.png"
import Img9 from "../pic/a10.png"
import Img10 from "../pic/a11.png"
import Img11 from "../pic/a12.png"
import CardComp from '../components/CardComp'
import NavUser from '../components/NavUser'
import axios from 'axios'

const Containers = styled.div`
padding-left:4em;
padding-right:4em;
padding-bottom:4em;
`
const Centers = styled.div`
align-items:"center";
`


function Home() {
    const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://youtpedia-api.herokuapp.com/berita"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);
    return (
        <div>
            <NavUser/>
        <Containers>
            <Row>
            <div class="col-md-12">
            <Slider/>
            </div>
            </Row>
            <Row>
                <div class="col-md-9">
                <Centers>
                    <Row>
                        
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title><b>ASEAN Director General of Immigration Holds Virtual Meeting, Here's the Discussion</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                        {/* <CardComp id="1" judul="Belajar React Keren" tanggal="12/12/2020"/> */}
                        <Card>
                                <Card.Img variant="top" src={Img9} />
                                <Card.Body>
                                <Card.Title><b>ASEAN Begins with the Bangkok Declaration Held in This Country</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img2} />
                                <Card.Body>
                                <Card.Title><b>Two Southeast Asian Countries That Have Two Climates</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </Row>
                    <Row>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img3} />
                                <Card.Body>
                                <Card.Title><b>ASEAN Begins with the Bangkok Declaration Held in This Country</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img4} />
                                <Card.Body>
                                <Card.Title><b>Threat of Civil War in Myanmar</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img5} />
                                <Card.Body>
                                <Card.Title><b>Myanmar military claims to have killed 1,000 civilians since overthrowing Suu Kyi</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img6} />
                                <Card.Body>
                                <Card.Title><b>ASEAN Director General of Immigration Holds Virtual Meeting, Here's the Discussion</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img7} />
                                <Card.Body>
                                <Card.Title><b>6 Factors Encouraging Cooperation Between ASEAN Countries and Its Obstacles</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img8} />
                                <Card.Body>
                                <Card.Title><b>Two Southeast Asian Countries That Have Two Climates</b></Card.Title>
                                <Card.Text>
                                <Button href="/Detail" class="btn btn-primary">Detail</Button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    </Centers>
                </div>
                
                
                <div class="col-md-3 pt-4 ">
                    <Card>
                    <h1>Trends For You</h1>
                    <p>#Trending in ASEAN</p>
                    <p>#Indonesia</p>
                    <p>#Malaysia</p>
                    <p>#Thailand</p>
                    <p>#Vietnam</p>
                    
                    </Card>
                    
                </div>

            </Row>
           
        </Containers>
        </div>
    )
}

export default Home
