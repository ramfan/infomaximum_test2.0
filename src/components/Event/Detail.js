import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
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
        const { row, expert, social } = this.props.theme.dashBoardSystem.Detail;
        return (
            <Col>
                <Row style={row}>
                    <Insriptions inscription={'Призы'}/>
                    <Descriptions description={'1 место - MacBook Pro 17, 2 место - iPad Pro, 3 место - iPone Xs Max'}/>
                </Row>
                <Row style={row}>
                    <Insriptions inscription={'Эксперты'}/>
                    <ol style={expert}>
                        {expertList}
                    </ol>
                </Row>
                <Row style={row}>
                    <Insriptions inscription={'Ссылка на соц. сети'}/>
                    <span style={social}>vk.com/event169897816</span>
                </Row>
            </Col>
        );
    }
}

export default withTheme(Detail);
