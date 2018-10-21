import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-grid-system';
import { withTheme } from 'react-fela';
import Layout from '../../components/Layout';
import Left from '../../components/Main/Left';
import Right from '../../components/Main/Right';
import Auth from '../Auth/Auth';

class MainPage extends PureComponent {
    render() {
        return (
            <Row style={Object.assign(this.props.theme.marginNull, this.props.theme.paddingNull)}>
                { this.props.toggle
                    ? <Col style={this.props.theme.paddingNull}>
                        <Auth/>
                        <Layout
                            left={<Left/>}
                            right={<Right/>}
                        />
                    </Col>
                    : <Col style={this.props.theme.paddingNull}>
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
