import React, { PureComponent } from 'react';
import { Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import { CustomButton } from '../../utils/CustomElements';
import { actionCreators } from '../../duckStore';


class CreateEventButton extends PureComponent {
    constructor(props) {
        super(props);
        this.handlerCreateEvent = this.handlerCreateEvent.bind(this);
    }

    handlerCreateEvent() {
        this.props.getCreateEvent(true);
    }

    render() {
        return (
            <Col style={{ display: 'flex' }} onClick={this.handlerCreateEvent}>
                <Route>
                    <Link to={this.props.path}>
                        <CustomButton
                            color={'#E5001C'}
                            margin={'0 auto'}
                            width={''}
                            boxShadow={'0px 1px 1px 0px rgba(224,224,224,1)'}
                            paddingTop={'8px'}
                            paddingBottom={'10px'}
                            paddingLeft={'40px'}
                            paddingRight={'35px'}
                            fontSize={'12px'}
                        >
                            + &nbsp; {this.props.description}
                        </CustomButton>
                    </Link>
                </Route>
            </Col>
        );
    }
}
// eslint-disable-next-line no-class-assign
CreateEventButton = withTheme(CreateEventButton);
const { getCreateEvent } = actionCreators;
export default connect(null, { getCreateEvent })(CreateEventButton);
