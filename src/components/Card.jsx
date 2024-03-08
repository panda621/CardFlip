import React, { useContext } from "react";
import MyContext from "../context/MyContext";

// The card takes in an image and an ID
function Card({ myId, image }) {
    // Use the context to manage the card Flips
    const { openCards, setOpenCards } = useContext(MyContext);

    // COnfigure flipping cards
    const cardFlipFunc = (e) => {
        if (e.target.classList.contains("card-image")) {
            e.target.parentNode.parentNode.classList.toggle("is-flipped");
        } 
        else if (e.target.classList.contains("card__face--front")) {
            e.target.parentNode.classList.toggle("is-flipped");

            var newOpen = e.target.nextElementSibling.childNodes[0];

            setOpenCards((prev) => [...prev, newOpen]);

            if (openCards.length > 2) {
                for (let i = 0; i < openCards.length; i++) {
                    openCards[i].parentNode.parentNode.classList.toggle("is-flipped");
                }
            }
        }
    };

    return (
        <div className="card">
            <div className="card__inner" onClick={cardFlipFunc}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back">
                    <img className="card-image" src={image} alt={myId} />
                </div>
            </div>
        </div>
    );
}

export default Card;
