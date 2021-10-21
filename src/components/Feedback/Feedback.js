import {useState} from 'react';
import Stats from './Stats'
import s from './Feedback.module.css';
import ButtonSet from '../FeedbackOptions/ButtonSet';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default function Feedback() {
  const [good, leaveGoodFeedback] = useState(0);
  const [neutral, leaveNeutralFeedback] = useState(0);
  const [bad, leaveBadFeedback] = useState(0);

  const FeedbackOptions = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = (clickedBtn) => {

      switch (clickedBtn) {         
        case 'good':
          leaveGoodFeedback(prevState => prevState + 1);
          break;
        case 'neutral':
          leaveNeutralFeedback(prevState => prevState + 1);
          break;
        case 'bad':
          leaveBadFeedback(prevState => prevState + 1);
          break;
        default:
          return;
      }
  }
  
  const countTotalFeedback = () => {
        return good + neutral + bad;
      }
  
  const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  
  return (
    <div className={s.feedback}>
      <Section className={s.title} title="Please give us Your feedback!">
        <ButtonSet
          options = {FeedbackOptions}
          onClick={onLeaveFeedback} 
        />      
      </Section>               

      <Section className={s.title} title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Stats 
          onGood={good} 
          onNeutral={neutral} 
          onBad={bad}
          onTotal = {countTotalFeedback()}
          onPositivePercentage = {countPositiveFeedbackPercentage()}
          />   
              ) : (
          <Notification message="No feedback given"/>       
        )}        
      </Section>
    </div>
  )
}