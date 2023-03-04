import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import {SectionStyled} from './Feedback.styled.jsx';
import Section from './Section';
import React, { Component } from 'react';


export class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const gradeValue = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return { [gradeValue]: prevState[gradeValue] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render(){
  return (
    <SectionStyled>
    <Section title="Please leave feedback">
      <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>
      <Section>
{Boolean(this.countTotalFeedback()) &&  <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
      />}
    </Section></SectionStyled>
  )};
};
