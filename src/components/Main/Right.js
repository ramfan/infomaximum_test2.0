import React, {PureComponent} from 'react';
import { Row, Col} from 'react-grid-system';
import {withTheme} from 'react-fela';
import DetailBlocks from './DetailBlocks';
import FirstBlock from './FirstBlock';
import Cards from './Cards';
import Free from './Free';
import Developers from './Developers';
import {Element} from 'react-scroll';

class Right extends PureComponent {


    render() {
        const {background} = this.props.theme.landingPage;
        return (
            <Row style={{background}}>
                <Col md={12}>
                    <Element name="create">
                        <FirstBlock/>
                    </Element>
                    <Element name='cards'>
                        <DetailBlocks title={'Как это работает?'} isOtherText={false} info={<Cards/>} color={'#000000'}/>
                    </Element>
                    <Element name='free'>
                        <DetailBlocks title={'Сколько стоит?'} isOtherText={false} info={<Free/>} color={'#482727'}/>
                    </Element>

                    <Element name="contacts">
                        <DetailBlocks title={'Контакты'} isOtherText={true} otherText={'Если вам понравился или не понравился наш сервис, вы можете легко рассказать нам об этом'} info={<Developers/>} color={'#000000'}/>
                    </Element>

                </Col>
            </Row>
        );
    }
}

export default withTheme(Right);
