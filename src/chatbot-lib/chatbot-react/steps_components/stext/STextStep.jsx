import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';
import Image from './Image';
import ImageContainer from './ImageContainer';
import Loading from '../common/Loading';
import TextStepContainer from './TextStepContainer';

class STextStep extends Component {
  /* istanbul ignore next */
  state = {
    loading: true
  };

  componentDidMount() {
    const { step, speak, previousValue, triggerNextStep } = this.props;
    const { component, delay, waitAction } = step;
    const isComponentWatingUser = component && waitAction;

    setTimeout(() => {
      this.setState({ loading: false }, () => {
        if (!isComponentWatingUser && !step.rendered) {
          triggerNextStep();
        }
        speak(step, previousValue);
      });
    }, delay);
  }

  getMessage = (o) => {
    const { previousValue, step } = this.props;
    const { message } = step;

    return o ? o.label.replace(/{previousValue}/g, previousValue) : '';
  };

  renderMessage = (o) => {
    const { step, steps, previousStep, triggerNextStep } = this.props;
    const { component } = step;

    if (component) {
      return React.cloneElement(component, {
        step,
        steps,
        previousStep,
        triggerNextStep
      });
    }

    return this.getMessage(o);
  };

  render() {
    const {
      step,
      isFirst,
      isLast,
      avatarStyle,
      bubbleStyle,
      hideBotAvatar,
      hideUserAvatar
    } = this.props;
    const { loading } = this.state;
    let { avatar, user,SelectedOptions } = step;
    user=true;
    const showAvatar = user ? !hideUserAvatar : !hideBotAvatar;

    return (
      <TextStepContainer className={`rsc-ts ${user ? 'rsc-ts-user' : 'rsc-ts-bot'}`} user={user}>
        <ImageContainer className="rsc-ts-image-container" user={user}>
          {isFirst && showAvatar && (
            <Image
              className="rsc-ts-image"
              style={avatarStyle}
              showAvatar={showAvatar}
              user={user}
              src={avatar}
              alt="avatar"
            />
          )}
        </ImageContainer>
        {SelectedOptions.map((o,index)=>(
          <Bubble
          className="rsc-ts-bubble"
          style={bubbleStyle}
          user={user}
          showAvatar={showAvatar}
          isFirst={isFirst}
          isLast={isLast}
        > {loading ? <Loading /> : this.renderMessage(o)}
        </Bubble>
        ))}
        
         
      </TextStepContainer>
    );
  }
}

STextStep.propTypes = {
  avatarStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  bubbleStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  hideBotAvatar: PropTypes.bool.isRequired,
  hideUserAvatar: PropTypes.bool.isRequired,
  previousStep: PropTypes.objectOf(PropTypes.any),
  previousValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array
  ]),
  speak: PropTypes.func,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  steps: PropTypes.objectOf(PropTypes.any),
  triggerNextStep: PropTypes.func.isRequired
};

STextStep.defaultProps = {
  previousStep: {},
  previousValue: '',
  speak: () => {},
  steps: {}
};

export default STextStep;
