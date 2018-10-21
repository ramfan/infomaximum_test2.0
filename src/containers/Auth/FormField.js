/* eslint-disable import/prefer-default-export */
import { Col, Row } from 'react-grid-system';
import React from 'react';
import { theme } from '../../utils/theme';

export const renderField = ({
    input, label, icon, type, meta: { touched, error, warning },
}) => (
    <Row align={'center'}>
        {
            icon !== undefined
                ? <Col md={1}><img src={icon}/></Col> : null
        }
        <Col md={ icon !== undefined ? 11 : 12 }>
            <input {...input} placeholder={label} type={type} style={theme.FormField}/>
            {touched
            && ((error && <span>{error}</span>))}
        </Col>
    </Row>
);
