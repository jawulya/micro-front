import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from "history";
import App from './app';

const mount = (el, { onNavigate, defaultHistory, initialPath } = {}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath],
    });

    onNavigate && history.listen(onNavigate);
    ReactDOM.render(<App history={history} />, el)

    return {
        onParentNavigate({pathname: nextPathName}) {
            const { pathname } = history.location;
            if(pathname !== nextPathName ) {
                history.push(nextPathName);
            }
        }
    }
}
if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#_marketing-root');
    if (root) {
        mount(root, {defaultHistory: createBrowserHistory()});
    }
}
export { mount }