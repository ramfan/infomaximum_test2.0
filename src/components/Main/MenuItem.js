import React, { PureComponent } from 'react';
import { Link as ScrollIn } from 'react-scroll';
import { withTheme } from 'react-fela';
import { CustomSpans } from '../../utils/CustomElements';


class MenuItem extends PureComponent {
    render() {
        const { item } = this.props.theme.LeftBlock.mainPage;
        return (
            <CustomSpans>
                <ScrollIn style={item} activeStyle='active' className='test1' to={this.props.to_block} spy={true} smooth={true} duration={500} >
                    {this.props.itemName}
                </ScrollIn>
            </CustomSpans>
        );
    }
}

export default withTheme(MenuItem);
