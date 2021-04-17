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
            <div className="poke__info">
                <h6 className="poke__id">
                    #{poke.id}
                </h6>
                <h2 className="poke__name">
                    {poke.name}
                </h2>
                <div className="pokeType__wrap">
                    <div className={`poke__type ${poke.type1__class}`}>
                        {poke.type1}
                    </div>
                    <div className={`poke__type  poke__type2 ${poke.type2__class}`}>
                        {poke.type2}
                    </div>
                </div>
            </div>
        </Card>
    );
}
