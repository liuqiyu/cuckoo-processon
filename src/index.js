import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './assets/style/reset.css';
import './assets/style/scss/base.less';
import './assets/font/ali/iconfont.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
