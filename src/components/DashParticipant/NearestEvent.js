import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import { withTheme } from 'react-fela';
import { connect } from 'react-redux';
import TextDescription from './TextDescription';
import RowDescription from './RowDescription';
import AdditionalDescription from './AdditionalDescription';
import calendar from '../../assets/date.svg';

class NearestEvent extends PureComponent {
    render() {
        return (
            <div>
                <RowDescription children={<TextDescription descriptionFontSize={'24px'} subscriptionFontSize={'12px'} description={'HackSaransk 2018'} subscription={'Ближайшее событие'}/>}/>
                <RowDescription children={<AdditionalDescription icon={calendar} date={'14 сентября 2018, 19:00'} />}/>
                <RowDescription children={<AdditionalDescription subscription={'Для участия приглашаются программисты, дизайнеры, проект-менеджеры, маркетол...'} />}/>
                <RowDescription children={<AdditionalDescription text={'Призы'} subscription={'Не указано'} />}/>
            </div>
        );
    }
}
// eslint-disable-next-line no-class-assign
NearestEvent = withTheme(NearestEvent);
export default connect(null, null)(NearestEvent);
