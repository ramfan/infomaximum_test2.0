import React, { PureComponent } from 'react';
import { withTheme } from 'react-fela';


class Insriptions extends PureComponent {
    render() {
        return (
            <span style={this.props.theme.Inscription}>{this.props.inscription}</span>
        );
    }
}

export default withTheme(Insriptions);
