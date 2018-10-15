import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Layout from '../../components/Layout';
import Left from '../../components/Main/Left';
import Right from '../../components/Main/Right';
import Auth from '../Auth/Auth';
import {Col, Row} from 'react-grid-system';
import {withTheme} from 'react-fela';

class MainPage extends PureComponent {


    render() {
        return (
            <Row style={{marginRight: 0}}>
                { this.props.toggle?
                    <Col style={this.props.theme.paddingNull}>
                        <Auth/>
                        <Layout
                            left={<Left/>}
                            right={<Right/>}
                        />
                    </Col>:
                    <Col style={this.props.theme.paddingNull}>
                        <Layout
                            left={<Left/>}
                            right={<Right/>}
                        />
                    </Col>
                }

            </Row>
        );
    }
}
// eslint-disable-next-line no-class-assign
MainPage = withTheme(MainPage);
export default connect(state => ({
    toggle: state.duckReducer.showPopup,
}))(MainPage);
