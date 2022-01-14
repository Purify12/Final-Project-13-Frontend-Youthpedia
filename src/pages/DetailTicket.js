import React from "react";
import thx from '../pic/thx.png';
import thx1 from '../pic/thx1.png';

function DetailTicket(){
    return(
        <div className="dtl-ticket">
            <div className='thanks'>
            <img className='thx' src={thx} alt=''/>
            <h1>Thank you for registering!<br/><br/>
Please check your email for further information</h1>
            <img className='thx1' src={thx1} alt=''/>
            </div>
        </div>
    )
}


export default DetailTicket