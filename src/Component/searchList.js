function CardList({ data }) {
    return (
      <div className="cardList">
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
  }
export default CardList