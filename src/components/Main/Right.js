import React, {PureComponent} from 'react';
import { Row, Col} from 'react-grid-system';
import landing from '../../assets/landing.png';

class Right extends PureComponent {


    render() {
        return (
            <Row style={{background: '#000000'}}>
                <Col md={12} style={{height: '100vh'}}>
                    <Row >
                        <Col md={12} style={{ backgroundImage: `linear-gradient(to left, rgba(255, 147, 21, 0.5) 0%, rgba(238, 12, 40, 0.5) 100%),url(${landing})`, backgroundRepeat: 'no-repeat', backgroundPositionX:'center'}}>
                            <Row style={{ width: '90%'}}>
                                <Col md={8} style={{height: '100vh' ,left: '0', top: '0', transform: 'translate(70%, 30%)'}}>
                                    <span style={{color: '#FFFFFF', fontSize: '50px', fontWeight: 'bold'}}>Запустите IT-событие</span><br/>
                                    <span style={{color: '#FFFFFF', fontSize: '40px'}}>без лишних затрат</span><br/>
                                    <span style={{color: '#FFFFFF', fontSize: '14px'}}>Наши виджеты &laquo;Регистрация&raquo;, &laquo;Участники&raquo;, &laquo;Команды&raquo; и &laquo;Проекты&raquo; пзволяют вам </span><br/><span style={{color: '#FFFFFF', fontSize: '15px'}}> быстро запустить любое IT-мероприятие в кратчайшие сроки</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Right;
