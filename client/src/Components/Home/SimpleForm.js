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
  headerBgColor: '#4a4a4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#282828',
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
            message: 'Hello! I am Jaadu. How may I help you?' ,
            trigger: 'intro1'
          },

          {
            id: 'intro1',
            message: 'Do you want to open BMI Calculator or want to know about different body types or exit?',
            trigger: 'intro-user',
          },
          {
            id: 'intro-user',
            options: [
              { value: 'y', label: 'BMI calculator', trigger: 'yes-response' },
              { value: 'n', label: 'Different Body Types', trigger: 'no-response' },
              { value: 'e', label: 'Exit', trigger: 'exit-response' },
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
            
            trigger: 'intro1',
          },
          
          

//Body-type
          {
            id: 'no-response',
            message: 'Select',
            trigger: 'body-types'
          },
          {
            id: 'body-types',
            options: [
              { value: 'e', label: 'ECTOMORPH', trigger: '1' },
              { value: 'm', label: 'MESOMORPH', trigger: '2' },
              { value: 'endo', label: 'ENDOMORPH', trigger: '3' },
            ]
          },
          {
            id: '1',
            message: 'The Ectomorph is naturally very thin, has narrow hips and shoulders, very low body fat and very thin arms and legs',
            trigger: 'intro1',
          },
          {
            id: '2',
            message: 'The Mesomorph is kind of in between the Ectomorph and the Endomorph. They are able to put on muscle easily and genetically are the ideal body type for bodybuilding. They have very strong legs, broad shoulders and a narrower waist. Generally, they also have very low body fat as well.',
            trigger: 'intro1',
          },
          {
            id: '3',
            message: 'The Endomorph is more round and pear-shaped. They tend to store more body fat throughout the entire body, especially in the legs and arms. It’s much harder for the Endomorph to put on muscle and much easier to gain weight.',
            trigger: 'intro1',
          },


          {
            id: 'exit-response',
            message: 'ThankYou! Have a good day!',
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