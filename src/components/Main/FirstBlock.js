import React, {PureComponent} from 'react';
import {Col, Row} from 'react-grid-system';
import {withTheme} from 'react-fela';
import {CustomButton} from '../../utils/CustomElements';

class FirstBlock extends PureComponent {


    render() {
        const {
            firstBlock: {
                backgroundImage,
                backgroundRepeat,
                backgroundPositionX,
                positionTitle,
                backgroundSize,
                width,
                spans
            },
        } = this.props.theme.landingPage;
        return (
            <Row>
                <Col md={12} style={{backgroundImage, backgroundRepeat, backgroundPositionX, backgroundSize}}>
                    <Row style={{width}}>
                        <Col md={8} style={positionTitle}>
                            <span style={spans('50px', 'bold')}>Запустите IT-событие</span><br/>
                            <span style={spans('40px')}>без лишних затрат</span><br/>
                            <span style={spans('15px')}>Наши виджеты &laquo;Регистрация&raquo;, &laquo;Участники&raquo;, &laquo;Команды&raquo; и &laquo;Проекты&raquo; пзволяют вам </span><br/>
                            <span style={spans('15px')}> быстро запустить любое IT-мероприятие в кратчайшие сроки</span><br/>
                            <CustomButton color={'#E5001C'} margin={'1%'}>
                                <strong>+ &nbsp; Создать событие</strong>
                            </CustomButton>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default withTheme(FirstBlock);
