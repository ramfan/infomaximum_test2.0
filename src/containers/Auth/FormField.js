/* eslint-disable import/prefer-default-export */
import { Col, Row } from 'react-grid-system';
import React from 'react';

export const renderField = ({
    input, label, icon, type, meta: { touched, error, warning },
}) => (
    <Row align={'center'}>
        <Col md={1}><img src={icon}/></Col>
        <Col md={11}>
            <input {...input} placeholder={label} type={type} style={{
                width: '100%', height: '30px', border: 'none', borderBottom: '2px solid #D2D2D2', marginTop: '2%', marginBottom: '2%',
            }}/>
            {touched
            && ((error && <span>{error}</span>))}
        </Col>
    </Row>
);