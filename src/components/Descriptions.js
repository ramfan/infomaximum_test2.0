import React, { PureComponent } from 'react';


class Descriptions extends PureComponent {
    render() {
        return (
            <span style={{ fontSize: '14px' }}>{this.props.description}</span>
        );
    }
}

export default Descriptions;
