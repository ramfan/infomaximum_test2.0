import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';

class Subscriptions extends PureComponent {
    render() {
        return (
            <span style={this.props.theme.Subscription}>{this.props.subscription}</span>);
    }
}

export default withTheme(Subscriptions);
