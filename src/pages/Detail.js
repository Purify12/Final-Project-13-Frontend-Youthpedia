import React from 'react'
import styled from 'styled-components'
import Img from "../pic/Detail.png"
import Img2 from "../pic/like.png"
import { Button } from 'react-bootstrap'
import NavUser from '../components/NavUser'

const Center = styled.div`
text-align:center;
`

function Detail() {
    return (
        <div>
            <NavUser/>
        <div class="row p-4">        
            <Center>
                <h1>ASEAN Strengthens Commitment to Eradication Hoax Spread</h1>
                <img class="img-responsive" width="50%" height="auto" className="img-responsive" src={Img}  alt="logo" />
                <p> </p>
            </Center>
            <p>SINGAPORE - A series of meetings at the Ministerial level and ASEAN Senior Officials in the field of information, the 16th Senior Officials' Meeting Responsible for Information (SOMRI), 14th ASEAN Ministers' Meeting Responsible for Information (AMRI) and Related Meetings, were held on 7-11 May 2018 in Singapore . Singapore as Chair of SOMRI and AMRI for the 2018-2019 period raised the theme "Inclusive and Informed Digital ASEAN" with a focus on maximizing the benefits of digitalization to improve the quality of life of people in the region and build an ASEAN Community that is responsible for information.
                </p><p>The meeting discussed the importance of increasing digital literacy and preventing the spread of fake news/hoax, which are priorities for ASEAN Ministers in the information sector. The rapid development of information technology and media provides easy access to information for the public but is often used negatively to spread fake news that can disrupt security and stability in society.</p>
            <p>
                <Button variant="primary" size="sm">
                <img class="img-responsive" width="auto" height="auto" className="img-responsive" src={Img2}  alt="logo" />
                </Button>
                 1
            </p>
        </div>
        </div>
    )
}

export default Detail
