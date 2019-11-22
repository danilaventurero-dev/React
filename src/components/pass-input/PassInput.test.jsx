import React from 'react';
import ReactDOM from 'react-dom';
import PassInput from './PassInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PassInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
