import React, { useState, useCallback, useEffect } from 'react';
import Card from './Card';
import update from 'immutability-helper';
import {connect} from 'react-redux';
// import homes from '../../json/game-of-thrones';

const style = {
    width: 400,
}




const Container = (props) => {
    const house =props.match.params.homename;
    const home =props.homes.houses.filter((el)=>{return el.name == house});
    const peoples =home[0].people;


    {
        const [cards, setCards] = useState(peoples);
        useEffect((cards) => {
            setCards(cards = peoples);
        },[peoples]);

        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex]
                setCards(
                    update(cards, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                    }),
                )
            console.log(cards)},
            [cards],
        )
        const renderCard = (card, index) => {
            return (
                <Card
                    key={index}
                    index={index}
                    id={card.id}
                    text={card.name}
                    moveCard={moveCard}
                    description={card.description}
                    house ={house}
                />
            )
        }
        return (
            <>
                <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        homes: state
    };
};
export default connect(mapStateToProps)(Container)
