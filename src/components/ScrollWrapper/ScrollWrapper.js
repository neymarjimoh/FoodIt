import React from 'react';

 
class ScrollButton extends React.Component {
    constructor() {
      super();
  
      this.state = {
          intervalId: 0
      };
    }
    
    scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }
    
    scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
      this.setState({ intervalId: intervalId });
    }
    
    render () {
  return (
          <div>
            <span className='arrow-up' title='Back to top' onClick={ () => { this.scrollToTop(); }} >
              <img src="https://img.icons8.com/color/50/000000/circled-chevron-up.png" alt="up-icon" />
            </span>
          </div>
        )
     }
} 
  
class ScrollApp extends React.Component {
    render () {
      return <React.Fragment>
                <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
             </React.Fragment>
    }
}

export default ScrollApp;