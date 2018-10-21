import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';


class Descriptions extends PureComponent {
    render() {
        return (
            <span style={this.props.theme.Description}>{this.props.description}</span>
        );
    }
}

export default withTheme(Descriptions);
