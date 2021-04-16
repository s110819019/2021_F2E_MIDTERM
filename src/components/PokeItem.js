import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function PokeItem({ poke }) {
    return (
        <Card className="bg-gray poke">
            <Link to={`/poke/${poke.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={poke.image}
                    alt={poke.name} />
            </Link>
            <div className="poke__info">
                <h6 className="poke__area">
                    {poke.area}
                </h6>
                <h2 className="poke__name">
                    {poke.name}
                </h2>
                {/* <p className="poke__description">
                    {poke.description}
                </p> */}
                <div className="poke__more">
                    <Link to={`/poke/${poke.id}`} className="poke__link">
                        See More ...
                    </Link>
                </div>
            </div>
        </Card>
    );
}
