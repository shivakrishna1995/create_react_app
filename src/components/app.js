import React, { useEffect, useState, useRef } from 'react';
import Header from './header';
import Container from './container';
import './app.scss';

export default () => {
    return <div className="_app">
        <Header />
        <Container />
    </div>
}