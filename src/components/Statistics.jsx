import { Component } from 'react';

import {StatisticsStyled} from './Feedback.styled.jsx';

class Statistics extends Component{


    render(){
        return (<div>
        <h2>Statistics</h2>
        <StatisticsStyled>Good: <span>{this.props.good}</span></StatisticsStyled>
        
        <StatisticsStyled>Neutral: <span>{this.props.neutral}</span></StatisticsStyled>
        
        <StatisticsStyled>Bad: <span>{this.props.bad}</span></StatisticsStyled>
        
        <StatisticsStyled>Total: <span>{this.props.total}</span></StatisticsStyled>
        
        <StatisticsStyled>Positive Feedback: <span>{this.props.positivePercentage}%</span></StatisticsStyled>
        
      </div>)
    }
}

export default Statistics