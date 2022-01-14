import React, {useState, useEffect} from 'react'
import Slider from '../components/Slider'
import { Row, Card } from 'react-bootstrap'
import styled from 'styled-components'
import Img from "../pic/Article.png"
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
            <Slider/>
            </Row>
            <Row>
                <div class="col-md-9">
                <Centers>
                    <Row>
                        
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                        <CardComp id="1" judul="Belajar React Keren" tanggal="12/12/2020"/>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </Row>
                    <Row>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-md-4 pt-4 ">
                            <Card>
                                <Card.Img variant="top" src={Img} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
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
                    <p>#Indonesia</p>
                    <p>#Indonesia</p>
                    <p>#Indonesia</p>
                    <a href="/Detail" class="btn btn-primary">Detail</a>
                    </Card>
                    
                </div>

            </Row>
           
        </Containers>
        </div>
    )
}

export default Home
