import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import CommandForm from '../../containers/Command/CommandForm';

class CreateCommand extends PureComponent {
    render() {
        const { col, row, span } = this.props.theme.dashBoardParticipant.CreateCommand;
        return (
            <Col md={12} style={col}>
                <Row style={row}>
                    <span style={span}>Создание команды</span>
                </Row>
                <CommandForm/>
            </Col>
        );
    }
}
// eslint-disable-next-line no-class-assign
CreateCommand = withTheme(CreateCommand);
export default connect(null, null)(CreateCommand);
