import Card from "./Card";
import React, {useContext, useEffect} from "react";
import MyContext from "../context/MyContext";

function Body(){
    const{cards, moves, setMoves, openCards, setOpenCards} = useContext(MyContext);

    const myClasses = document.getElementsByClassName("hideMe");
    const myInner = document.getElementsByClassName("card_inner");
    const tebrik = document.getElementsByClassName("congr")[0];
    let myShuffle = cards;

    // Shuffle the card in the list 'a'
    function shuffle(a){
        for(let i = a.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    const bestscores = JSON.parse(localStorage.getItem("bestscores"));

    if(!bestscores){
        localStorage.setItem("bestscores", JSON.stringify([]));
    }

    let myBest = 100;
    if(bestscores && bestscores.length > 0){
        const mike = JSON.parse(localStorage.getItem("bestscores"));
        myBest = Math.min(...mike);
    }

    useEffect(() => {
        myShuffle = shuffle(cards);
    }, []);
    
    useEffect(() => {
        if (myClasses.length === 12) {
            for (let i = 0; i < myInner.length; i++) {
                myInner[i].classList.remove("hideMe");
                myInner[i].classList.toggle("is-flipped");
            }
            const bestscores = JSON.parse(localStorage.getItem("bestscores"));
            bestscores.push(moves + 1);
            localStorage.setItem("bestscores", JSON.stringify(bestscores));
            if (moves < myBest) {
                myBest = moves;
            }
            myShuffle = shuffle(cards);
            tebrik.classList.add("tebrik");
            setTimeout(() => {
                tebrik.classList.remove("tebrik");
                setMoves(0);
            }, 5000);
        }

        if (openCards.length === 2) {
            setTimeout(() =>
             {
                if (
                    openCards[0].src === openCards[1].src &&
                    openCards[0].alt !== openCards[1].alt
                ) {
                    openCards[0].parentNode.parentNode.classList.add("hideMe");
                    openCards[1].parentNode.parentNode.classList.add("hideMe");
                    setOpenCards([]);
                    setMoves(moves + 1);
                } else if (openCards[0].src !== openCards[1].src) {
                    openCards[0].parentNode.parentNode.classList.toggle("is-flipped");
                    openCards[1].parentNode.parentNode.classList.toggle("is-flipped");
                    setOpenCards([]);
                    setMoves(moves + 1);
                }
            }, 300);
        }
        console.log(bestscores);
    }, [openCards]);

    const handleRestart = () => {
        for (let i = 0; i < myInner.length; i++) {
            myInner[i].classList.remove("hideMe");
            myInner[i].classList.remove("is-flipped");
        }
        setMoves(0);
        myShuffle = shuffle(cards);
        tebrik.classList.remove("tebrik");
    };

    return (
        <div>
            <h1>Play Flip Card Game</h1>
            <p>
                Select two cards with same content consequtively to make them vanish
            </p>
            <div className="cards-container">
                {myShuffle.map((card, index) => {
                return <Card key={index} image={card.image} myId={card.id} />;
                })}
                <div className="congr">
                <p>Your Score: {moves}</p>
                </div>
            </div>

            <p>Moves: {moves}</p>
            <p>Best Score: {myBest}</p>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}

export default Body;