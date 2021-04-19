import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function PokeItem({ poke }) {
    return (
        <Card className="poke__card"
            hoverable
        >
            <Link to={`/poke/${poke.id}`}>
                <img className="pokeCard__img"
                    style={{ width: '60%' }}
                    src={poke.image}
                    alt={poke.name} />
            </Link>
            <div className="pokeItem__info">
                <h6 className="pokeItem__no">
                    #{poke.no}
                </h6>
                <Link to={`/poke/${poke.id}`}>
                    <h2 className="pokeItem__name">
                        {poke.name}
                    </h2>
                </Link>
                <div className="pokeItem__type-wrap">
                    <div className={`pokeItem__type ${poke.type1__class}`}>
                        {poke.type1}
                    </div>
                    <div className={`pokeItem__type  pokeItem__type2 ${poke.type2__class}`}>
                        {poke.type2}
                    </div>
                </div>
            </div>
        </Card>
    );
}
