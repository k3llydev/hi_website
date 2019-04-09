import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './RouterConfig';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterConfig />, document.getElementById('main'));

serviceWorker.unregister();