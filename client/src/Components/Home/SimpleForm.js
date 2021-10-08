import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Post from './post';
import { ThemeProvider } from 'styled-components';

const config = {
  width: "400px",
  height: "500px",
  floating: true,
  zIndex: 1001
};
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#383838',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#383838',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ChatBot
        steps={[

          {
            id: 'intro',
            message: 'Hello! I am a bot.',
            trigger: 'intro1'
          },

          {
            id: 'intro1',
            message: 'Do you want to open BMI calculator, Calorie counter?',
            trigger: 'intro-user',
          },
          {
            id: 'intro-user',
            options: [
              { value: 'y', label: 'BMI calculator', trigger: 'yes-response' },
              { value: 'n', label: 'Calorie counter', trigger: 'no-response' },
            ]
          },
          {
            id: 'yes-response',
            // message: 'Great!',
            message: 'Enter you weight in kg',
            trigger: 'weight',
          },
          {
            id: 'weight',
            user: true,
            trigger:'yes-response1'
          },
          {
            id: 'yes-response1',
            // message: 'Great!',
            message: 'Enter you height in cms',
            
            trigger: 'height',
          },
          {
            id: 'height',
            user: true,
            trigger:'calculator'
          },
          {
            id: 'calculator',
            // message: 'Great!',
            
            component: <Post />,
            asMessage: true,
            
            // trigger: 'bmi1',
          },

          {
            id: 'no-response',
            message: 'Sorry to hear that.',
            end: true,
          },
         
        ]}
        {...config}
      />
      </ThemeProvider>
    );
    
  }

}


export default SimpleForm;