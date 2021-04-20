import { Row, Col } from "antd";
import PokeItem from "./PokeItem";

export default function PokeList({pokes}) {
    return (
        <Row gutter={[32, 32]} >
            {pokes.map(poke => (
                <Col 
                    key={poke.id}
                    sm={{ span: 12 }}
                    lg={{ span: 8 }} 
                    xl={{ span: 6 }}
                    xxl={{ span: 4 }}
                >
                    <PokeItem poke={poke}/>
                </Col>
            ))}
        </Row>
    );
}