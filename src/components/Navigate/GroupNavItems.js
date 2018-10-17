import React, { PureComponent } from 'react';
import { Row, Col } from 'react-grid-system';
import NavItem from './NavItem';
import total from '../../assets/MenuItemPublicData.svg';
import MyEvents from '../../assets/MyEvents.svg';
import SearchEvent from '../../assets/SearchEvent.svg';
import ProfileSettings from '../../assets/ProfilleSettings.svg';
import Exit from '../../assets/Exit.svg';

class GroupNavItems extends PureComponent {
    render() {
        return (
            <Row style={{ display: 'contents' }}>
                <NavItem Icon={total} description={'Общие данные'} exit={false}/>
                <NavItem Icon={MyEvents} description={'Мои события'} exit={false}/>
                <NavItem Icon={SearchEvent} description={'Поиск сбытия'} exit={false}/>
                <NavItem Icon={ProfileSettings} description={'Настройки профиля'} exit={false}/>
                <NavItem Icon={Exit} description={'Выход'} exit={true}/>
            </Row>
        );
    }
}

export default GroupNavItems;
