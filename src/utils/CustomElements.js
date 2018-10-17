import { createComponent } from 'react-fela';
import React from 'react';

const button = ({
    color = '#000000',
    margin = '0', border = '0',
    paddingTop = '0px',
    paddingBottom = '0px',
    paddingLeft = '0px',
    paddingRight = '0px',
    width = '',
    boxShadow = 'none',
    fontSize = '14px',
}) => ({
    width,
    padding: 0,
    border,
    font: 'inherit',
    cursor: 'pointer',
    backgroundColor: '#FFFFFF',
    borderRadius: '13px',
    color,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    boxShadow,
    fontSize,
});
export const CustomButton = createComponent(button, 'button');

const spansInMainPage = () => ({
    paddingTop: '15px',
    paddingBottom: '15px',
    display: 'block',
});
export const CustomSpans = createComponent(spansInMainPage, 'span');
