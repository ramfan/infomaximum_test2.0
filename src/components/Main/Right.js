import React, {PureComponent} from 'react';
import { Row, Col} from 'react-grid-system';
import {withTheme} from 'react-fela';
import DetailBlocks from './DetailBlocks';
import FirstBlock from './FirstBlock';
import Cards from './Cards';
import Free from './Free';
import Developers from './Developers';

class Right extends PureComponent {


    render() {
        const {background} = this.props.theme.landingPage;
        console.log(this.props);
        return (
            <Row style={{background}}>
                <Col md={12}>
                    <FirstBlock/>
                    <DetailBlocks title={'Как это работает?'} isOtherText={false} info={<Cards/>} color={'#000000'}/>
                    <DetailBlocks title={'Сколько стоит?'} isOtherText={false} info={<Free/>} color={'#482727'}/>
                    <DetailBlocks title={'Контакты'} isOtherText={true} otherText={'Если вам понравился или не понравился наш сервис, вы можете легко рассказать нам об этом'} info={<Developers/>} color={'#000000'}/>
                </Col>
            </Row>
        );
    }
}

export default withTheme(Right);
