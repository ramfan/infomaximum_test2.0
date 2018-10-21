import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import Subscriptions from '../Subscriptions';

class AdditionalDescription extends PureComponent {
    render() {
        return (
            <div style={this.props.theme.dashBoardParticipant.AdditionalDescription}>
                {
                    this.props.icon !== undefined
                        ? <Row align={'center'} style={this.props.theme.marginNull}>
                            <Col md={1}>
                                <img src={this.props.icon} alt=''/>
                            </Col>
                            <Col>
                                <span>{this.props.date}</span>
                            </Col>
                        </Row>
                        : <Row align={'center'} style={this.props.theme.marginNull}>
                            <Col>
                                <span>{this.props.text}</span>
                            </Col>
                        </Row>
                }
                <Col md={12}>
                    <Subscriptions subscription={this.props.subscription}/>
                </Col>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
AdditionalDescription = withTheme(AdditionalDescription);
export default connect(null, null)(AdditionalDescription);
