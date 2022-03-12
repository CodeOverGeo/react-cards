import React from 'react';
import useAxios from './hooks/useAxios';
import { formatCard } from './helpers';
import PlayingCard from './PlayingCard';
import './PlayingCardList.css';

const DECK_BASE_URL = 'https://deckofcardsapi.com/api/deck/';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    'cards',
    `${DECK_BASE_URL}/new/draw`
  );

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((card) => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
