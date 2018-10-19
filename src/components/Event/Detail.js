import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import Insriptions from '../Insriptions';
import Descriptions from '../Descriptions';

class Detail extends PureComponent {
    render() {
        const experts = ['Иванов Иван Иванович', 'Петров Петр Петрович', 'Сидоров Сидор Ефграфович'];
        const expertList = [];
        for (let i = 0; i < experts.length; i += 1) {
            expertList.push(
                <li>
                    <Descriptions description={experts[i]}/>
                </li>,
            );
        }
        return (
            <Col>
                <Row style={{ display: 'block', margin: '1%' }}>
                    <Insriptions inscription={'Призы'}/>
                    <Descriptions description={'1 место - MacBook Pro 17, 2 место - iPad Pro, 3 место - iPone Xs Max'}/>
                </Row>
                <Row style={{ display: 'block', margin: '1%' }}>
                    <Insriptions inscription={'Эксперты'}/>
                    <ol style={{ padding: '0 0 0 15px' }}>
                        {expertList}
                    </ol>
                </Row>
                <Row style={{ display: 'block', margin: '1%' }}>
                    <Insriptions inscription={'Ссылка на соц. сети'}/>
                    <span style={{ fontSize: '14px', color: '#EE0C28' }}>vk.com/event169897816</span>
                </Row>
            </Col>
        );
    }
}

export default Detail;
