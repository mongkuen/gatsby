import createHistory from 'history/createBrowserHistory';
import { pageTrasitionEvent, pageTransitionTime } from 'src/siteMetadata';

const getUserConfirmation = (pathname, callback) => {
  const event = new global.window.CustomEvent(pageTrasitionEvent, {
    detail: { pathname },
  });
  global.window.dispatchEvent(event);
  setTimeout(() => callback(true), pageTransitionTime);
};

const history = createHistory({ getUserConfirmation });
history.block(location => location.pathname);
exports.replaceHistory = () => history;
