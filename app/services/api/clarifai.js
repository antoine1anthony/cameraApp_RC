import key from '../../../apiKey';

// Initialise Clarifai api
export const clarifaiApp = new Clarifai.App({
    apiKey: `${key.clarifaiKey}`
  });
  