import React, {PureComponent} from 'react';
import { withTheme } from 'react-fela';
import { Row, Col } from 'react-grid-system';

class NewsColumn extends PureComponent {

    render() {
        return (
            <div style={{ width: '33%', background: 'white' }}>
                <Row >
                    <Col>
                        <img src={hackathon} style={{ width: 'inherit' }}/>
                    </Col>
                </Row>
                <Row style={{ margin: 0, padding: ' 16px' }}>
                    <Col>
                        <span style={{ fontSize: '24px' }}>HackSaransk 2018</span>
                    </Col>
                </Row>
                <Row style={{ margin: 0, padding: ' 16px' }}>
                    <Col>
                        <span style={{ fontSize: '12px' }}>Ближайшее событие</span>
                    </Col>
                </Row>
                <Row style={{ margin: 0, padding: ' 16px' }}>
                    <Col md={1}>
                        <img src={calendar} alt=''/>
                    </Col>
                    <Col>
                        <Subscriptions subscription={'Для участия приглашаются программисты, дизайнеры, проект-менеджеры, маркетол...'}/>
                    </Col>
                </Row>
                <Row style={{ margin: 0, padding: '16px' }}>
                    <Col md={12}>
                        <span>Призы</span>
                    </Col>
                    <Col>
                        <Subscriptions subscription={'Не указано'}/>
                    </Col>
                </Row>
                <Row style={{
                    margin: 0, padding: ' 0 0 0 0', paddingTop: '77px', paddingBottom: '37px',
                }}>
                    <Col style={{ margin: 0, padding: 0 }}>
                        <Button description={'ПРИНЯТЬ УЧАСТИЕ'} color={'#6202EE'}/>
                    </Col>
                    <Col >
                        <Button description={'ПОДРОБНЕЕ'} color={'#6202EE'}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NewsColumn;
