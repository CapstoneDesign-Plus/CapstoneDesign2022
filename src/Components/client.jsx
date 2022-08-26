const React = require('react');
const ReactDom = require('react-dom');
const { default: WordRelay } = require('./WordRelay');

ReactDom.render(<WordRelay/>, document.querySelector('#root'));