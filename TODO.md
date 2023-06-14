## TODO
[X]. Green ,Yellow , Red based on priority
[X].Add functionality to add personalized image/avatar
[X].Use logger instead of print in lambda handler code
[X].Create task data model
[X].Create functionality to create subtasks from ticket
[].Create Questions&Answers AI model
[].Add a functionality to summarize ticket
[].Add notification on ticket
[].Create mobile version (display size , etc.)
[].Add search bar functionality
[].Create AI/ML model to predict how much time ticket is going to get completed
[].Prompt engineer chatGPT request (e.g Summirize a text triblock ''' {user input} ''') - https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/
[].Improve UI , add animations
[].Create a documentation
[].Create a model , to check for PII data and remove it 


import { Amplify } from 'aws-amplify';
import {
  Predictions,
  AmazonAIPredictionsProvider
} from '@aws-amplify/predictions';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
Predictions.addPluggable(new AmazonAIPredictionsProvider());






TextToSpeech

Predictions.convert({
  textToSpeech: {
    source: {
      text: textToGenerateSpeech
    },
    voiceId: "Amy" // default configured on aws-exports.js 
    // list of different options are here https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
  }
})
.then(result => console.log({ result }))
.catch(err => console.log({ err }));