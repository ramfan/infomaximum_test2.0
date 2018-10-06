import React, {PureComponent} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Layout from '../Layout';
import Left from './Left';
import Right from './Right';

class MainPage extends PureComponent {


    render() {
        return (
            <Layout
                left={<Left/>}
                right={<Right/>}
            />
        );
    }
}

export default MainPage;
