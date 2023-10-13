import React from "react";
import './Card.css';
import star from "../images/icon-star.svg"

const Card = ({onRating, submitRating, rating}) => {
    return (
        <main>
            <div className="starIcon">
                <img src={star} alt="star" className="star"/>
            </div>  
            <div className="text">
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>   
            <div className="btn-container">
                <div className="buttons">
                    <button className={`${rating === 1 ? 'selected-btn' : 'btn'}`} onClick={() => onRating(1)}>1</button>
                    <button className={`${rating === 2 ? 'selected-btn' : 'btn'}`} onClick={() => onRating(2)}>2</button>
                    <button className={`${rating === 3 ? 'selected-btn' : 'btn'}`} onClick={() => onRating(3)}>3</button>
                    <button className={`${rating === 4 ? 'selected-btn' : 'btn'}`} onClick={() => onRating(4)}>4</button>
                    <button className={`${rating === 5 ? 'selected-btn' : 'btn'}`} onClick={() => onRating(5)}>5</button>
                </div>
                <button onClick={() => submitRating(rating)} className="submit">SUBMIT</button>
            </div>     
        </main>
    )
}

export default Card;