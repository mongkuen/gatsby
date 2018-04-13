import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { pageTrasitionEvent, pageTransitionTime } from 'src/siteMetadata';

const defaultStyle = {
  transition: `opacity ${pageTransitionTime}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  exiting: { opacity: 0 },
};

class FadeTransition extends React.Component {
  constructor(props) {
    super(props);
    this.setIn = this.setIn.bind(this);
    this.listenerHandler = this.listenerHandler.bind(this);
    this.state = { in: false };
  }

  componentDidMount() {
    this.setIn(true);
    global.window.addEventListener(pageTrasitionEvent, this.listenerHandler);
  }

  componentWillUnmount() {
    global.window.removeEventListener(pageTrasitionEvent, this.listenerHandler);
  }

  setIn(inProp) {
    this.setState({ in: inProp });
  }

  listenerHandler(event) {
    const currentPath = global.window.location.pathname;
    const nextPath = event.detail.pathname;
    if (currentPath !== nextPath) this.setIn(false);
  }

  render() {
    return (
      <Transition in={this.state.in} timeout={pageTransitionTime}>
        {state => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            {this.props.children}
          </div>
        )}
      </Transition>
    );
  }
}

FadeTransition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.shape({}),
  ]).isRequired,
};

export default FadeTransition;
