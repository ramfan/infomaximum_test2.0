import React, { PureComponent } from 'react';


class Insriptions extends PureComponent {
    render() {
        return (
            <span style={{
                display: 'block', color: '#AAAAAA', fontSize: '11px',
            }}>{this.props.inscription}</span>
        );
    }
}

export default Insriptions;
