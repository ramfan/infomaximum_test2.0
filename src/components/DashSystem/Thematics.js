import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import vector from '../../assets/Vector.svg';

class Thematics extends PureComponent {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Row align={'center'} style={{ margin: '1%' }}>
                        <Col md={1}>
                            <img src={vector} alt=""/>
                        </Col>
                        <Col>
                            <span>Мобильное приложение (3)</span>
                        </Col>
                    </Row>
                    <Row align={'center'} style={{ margin: '1%' }}>
                        <Col md={1}>
                            <img src={vector} alt=""/>
                        </Col>
                        <Col>
                            <span>Робототехника (2)</span>
                        </Col>
                    </Row>
                    <Row align={'center'} style={{ margin: '1%' }}>
                        <Col md={1}>
                            <img src={vector} alt=""/>
                        </Col>
                        <Col>
                            <span>VR (1)</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Thematics);
