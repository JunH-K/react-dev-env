import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

console.log(hot);
import App from 'App';

console.log(App);
const Hot = hot(App);

ReactDom.render(<Hot />, document.querySelector('#root'));
