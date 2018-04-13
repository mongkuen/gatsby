import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';

const duration = 250;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
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
    this.state = { in: false };
  }

  componentDidMount() {
    this.setIn();
  }

  setIn() {
    this.setState({ in: true });
  }

  render() {
    return (
      <Transition in={this.state.in} timeout={duration}>
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
