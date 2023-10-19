import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
    const {getByText} = render( <App/> );

    const textPattern = /STAR WARS: SAGA/i;

    expect(screen.getByText(textPattern)).toBeInTheDocument();
});
