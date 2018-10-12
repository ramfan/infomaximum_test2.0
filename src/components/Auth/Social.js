import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-grid-system';
import {withTheme} from 'react-fela';

class Social extends PureComponent {

    render() {
        return (
            <Col md={4} >
                <img src={this.props.social} style={this.props.theme.authForm.socialBlock.Icon}/>
            </Col>
        );
    }
}

export default withTheme(Social);
