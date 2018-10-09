import {createComponent} from 'react-fela';
import React from 'react';

const button = ({color = '#000000', margin = '0', border = '0'}) => ({
    padding: 0,
    border: border,
    font: 'inherit',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    borderRadius: '13px',
    color: color,
    paddingTop: '6px',
    paddingBottom: '8px',
    paddingLeft: '40px',
    paddingRight: '40px',
    margin: margin
});
export const CustomButton = createComponent(button, 'button');

const spansInMainPage = () => ({
    paddingTop: '15px',
    paddingBottom: '15px',
    display: 'block'
});
export const CustomSpans = createComponent(spansInMainPage, 'span');