import React, {PureComponent} from 'react';
import {Row, Col} from 'react-grid-system';
import DashSystemLayout from '../DashSystem/DashSystemLayout';
import {withTheme} from 'react-fela';

class System extends PureComponent {

    render() {
        return (
            <Row style={this.props.theme.systemLayout}>
                <DashSystemLayout/>
            </Row>
        );
    }
}

export default withTheme(System);
