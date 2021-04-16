import { Row, Col } from "antd";
import PokeItem from "./PokeItem";

export default function PokeList({pokes}) {
    return (
        <Row gutter={[32, 32]}>
            {pokes.map(poke => (
                <Col 
                    key={poke.id} 
                    lg={{ span: 12 }} 
                    xl={{ span: 8 }}
                    xxl={{ span: 6 }}
                >
                    <PokeItem poke={poke}/>
                </Col>
            ))}
        </Row>
    );
}