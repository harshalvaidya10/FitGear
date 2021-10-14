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
              message: 'Hello! I am Jaadu. How may I help you?',
              trigger: 'intro1'
            },

            {
              id: 'intro1',
              message: 'Do you want to open BMI Calculator or want to know about the different body types?',
              trigger: 'intro-user',
            },
            {
              id: 'intro-user',
              options: [
                { value: 'y', label: 'BMI calculator', trigger: 'yes-response' },
                { value: 'n', label: 'Different Body Types', trigger: 'no-response' },
                { value: 'a', label: 'Trainers', trigger: 'trainer' },
                // { value: 'e', label: 'Exit', trigger: 'exit-response' },
              ]
            },
          
            //BMI calculator
            {
              id: 'yes-response',
              // message: 'Great!',
              message: 'Enter you weight in kg',
              trigger: 'weight',
            },
            {
              id: 'weight',
              user: true,
              trigger: 'yes-response1'
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
              trigger: 'calculator'
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
            //first body-type
            {
              id: '1',
              message: 'The Ectomorph is naturally very thin, has narrow hips and shoulders, very low body fat and very thin arms and legs',
              trigger: 'diet1',
            },
            {
              id: 'diet1',
              message: 'Do you want to see the diet plan for this particular body-type?',
              trigger: 'yesno1',

            },
            {
              id: 'yesno1',
              options: [
                { value: 'yy', label: 'Diet Plan ', trigger: 'yes1' },
                { value: 'nn', label: 'Workout Plan', trigger: 'no1' },
              ]
            },
            {
              id: 'yes1',
              message: `Ectomorphs should consume complex carbohydrates found in foods like beans, whole grains, and vegetables.
            `,
            trigger:'intro1',
            
            },
            {
              id: 'no1',
              message: ` For an ectomorph experts suggest that aerobic training and resistance training are the preferred type of workout.
            `,
            trigger:'intro1',
            },
          
            //second body type
            {
              id: '2',
              message: 'The Mesomorph is kind of in between the Ectomorph and the Endomorph. They are able to put on muscle easily and genetically are the ideal body type for bodybuilding. They have very strong legs, broad shoulders and a narrower waist. Generally, they also have very low body fat as well.',
              trigger: 'diet2',
            },
            {
              id: 'diet2',
              message: 'Do you want to see the diet plan or workout plan for this particular body-type?',
              trigger: 'yesno2',

            },
            {
              id: 'yesno2',
              options: [
                {value: 'yy', label: 'Diet Plan', trigger: 'yes2' },
                { value: 'nn', label: 'Workout Plan', trigger: 'no2' },
              ]
            },
            {
              id: 'yes2',
              message: `Mesomorphs typically require a higher calorie intake and it should contain more protein. Most experts point to a diet of roughly equal parts protein, fats, and carbs.
            `,
            trigger:'intro1',
            },
            {
              id: 'no2',
              message: `Mesomorphs would do well to keep a consistent regimen of 30-45 minutes of cardio scheduled three to five times a week.
            `,
            trigger:'intro1',
            },
            //third body type
            {
              id: '3',
              message: 'The Endomorph is more round and pear-shaped. They tend to store more body fat throughout the entire body, especially in the legs and arms. It’s much harder for the Endomorph to put on muscle and much easier to gain weight.',
              trigger: 'diet3',
            },
            {
              id: 'diet3',
              message: 'Do you want to see the diet plan for this particular body-type?',
              trigger: 'yesno3',

            },
            {
              id: 'yesno3',
              options: [
                { value: 'yy', label: 'Diet Plan', trigger: 'yes3' },
                { value: 'nn', label: 'Workout Plan', trigger: 'no3' },
              ]
            },
            {
              id: 'yes3',
              message: `According to nutritionists, endomorphs should intake more toward proteins, fats and carbs.
            `,
              trigger: 'intro1',
            },
            {
              id: 'no3',
              message: `For exercise, endomorphs should focus primarily on aerobic activities like running, biking, or even dancing.
            `,
            trigger:'intro1',
            },
              //trainers
              {
                id: 'trainer',
                options: [
                  { value: 't1', label: 'Trainer 1', trigger: 't1' },
                  { value: 't2', label: 'Trainer 2', trigger: 't2' },
                  { value: 't2', label: 'Trainer 3', trigger: 't3' },
                  { value: 't2', label: 'Trainer 4', trigger: 't4' },
                ]
              },
              //first trainer
              {
                id: 't1',
                component: (
                  <div> Add trainers details <a href="" style={{color:'green', textDecoration: 'none'}} target="_blank">youtube</a> </div>
                ),
                asMessage: true,
                // trigger: '',
                
              },
                //second trainer
                {
                  id: 't2',
                  component: (
                    <div> Add trainers details  <a href="" style={{color:'green', textDecoration: 'none'}} target="_blank">youtube</a> </div>
                  ),
                  asMessage: true,
                  // trigger: '',
                  
                },
                  //thirdtrainer
              {
                id: 't3',
                component: (
                  <div> Add trainers details  <a href="" style={{color:'green', textDecoration: 'none'}} target="_blank">youtube</a> </div>
                ),
                asMessage: true,
                // trigger: '',
                
              },
                //fourth trainer
                {
                  id: 't4',
                  component: (
                    <div> Add trainers details  <a href="" style={{color:'green', textDecoration: 'none'}} target="_blank">youtube</a> </div>
                  ),
                  asMessage: true,
                  // trigger: '',
                  
                },

            // //exit button
            // {
            //   id: 'exit-response',
            //   message: 'ThankYou! Have a good day!',
            //   end: true,
            // },

          ]}
          {...config}
        />
      </ThemeProvider>
    );

  }

}


export default SimpleForm;