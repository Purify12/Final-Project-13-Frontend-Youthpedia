import React from 'react'
import img from '../icon/aseanyouth.png';
import webimg from '../icon/webimg.png';
import webimg1 from '../icon/webimg1.png';
import ayfjoin from '../icon/ayfjoin.png';
import webthem from '../icon/webthem.png';
function Webinar()  {
    return(
        <div className='dtl-web'>
            <div className='ayf-dtl'>
                <img className='ayfimg' src={img} alt=''/>
                <img className='webimg' src={webimg} alt=''/>
                <img className='webimg1' src={webimg1} alt=''/>
                <img className='ayfjoin' src={ayfjoin} alt=''/>
                <img className='webthem' src={webthem} alt=''/>
                <h1>ASEAN YOUTH IN DIGITAL ERA</h1>
                <p className='satu'>Participants  : Free <br/>   
                Date : 6-8 Feb 2021 </p>

            </div>
        </div>
    )
}

export default Webinar




