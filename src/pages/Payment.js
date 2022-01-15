import React from "react";
import payment1 from '../icon/payment1.jpeg';
import payment2 from '../icon/payment2.jpeg';

function Payment(){
    return(
        <div className="dtl-payment">
            <div className='thanks'>
            <img className='payment1' src={payment1} alt=''/>
            <h1>Your Payment is<br/>
            Succesful</h1>
            <img className='payment2' src={payment2} alt=''/>
            </div>
            <div className='next-btns'>
                    <a className='next-btn'>Next</a>
                </div>

        </div>
    )
}


export default Payment