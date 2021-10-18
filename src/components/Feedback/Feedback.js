import React, {Component} from 'react';
import Stats from './Stats'
import s from './Feedback.module.css';
import ButtonSet from '../FeedbackOptions/ButtonSet';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';


class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    options = Object.keys(this.state);    
  
    onLeaveFeedback = (clickedBtn) => {
      this.setState((prevState) => ({         
          [clickedBtn]: prevState[clickedBtn] + 1      
      }));
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
      }
  
    countPositiveFeedbackPercentage = () => {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {
        return (
    <div className={s.feedback}>
      <Section className={s.title} title="Please give us Your feedback!">
        <ButtonSet
          options = {this.options}
          onClick={this.onLeaveFeedback} 
        />      
      </Section>               

      <Section className={s.title} title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Stats 
          onGood={this.state.good} 
          onNeutral={this.state.neutral} 
          onBad={this.state.bad}
          onTotal = {this.countTotalFeedback()}
          onPositivePercentage = {this.countPositiveFeedbackPercentage()}
          />   
              ) : (
          <Notification message="No feedback given"/>       
        )}        
      </Section>
    </div>
    );
  }
}

export default Feedback;

