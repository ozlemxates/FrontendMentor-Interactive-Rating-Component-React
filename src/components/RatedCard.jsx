import React from "react";
import './RatedCard.css';
import thankYou from "../images/illustration-thank-you.svg"

const RatedCard = ({rating}) => {
    return (
        <main>
            <div className="thankYouIcon">
                <img src={thankYou} alt="thankYou" className="thankYou" />
            </div>  
            <div className="rate">
                <p>You selected {rating} out of 5</p>
            </div>   
            <div className="text">
                <h1>Thank You!</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>     
        </main>
    )
}

export default RatedCard;