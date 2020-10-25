import Card from './Card/Card';

function Cards({ details = [] }) {
    const cards = details.map((detail) => (<Card {...detail} />))
    return (<div className="Flex" style={{ flexWrap: 'wrap', justifyContent: 'right' }}>
        {cards}
    </div>)
}

export default Cards;