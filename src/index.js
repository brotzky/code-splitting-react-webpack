import React from 'react';
import { render } from 'react-dom';
import Root from './root';

import './styles/index.scss';

// rendering the Root component into <div id="App"></div>
render(<Root />, document.getElementById('App'));
