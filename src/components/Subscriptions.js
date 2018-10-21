import React, { PureComponent } from 'react';

class Subscriptions extends PureComponent {
    render() {
        return (
            <span style={{
                display: 'flex', color: '#AAAAAA', fontSize: '14px',
            }}>{this.props.subscription}</span>);
    }
}

export default Subscriptions;
