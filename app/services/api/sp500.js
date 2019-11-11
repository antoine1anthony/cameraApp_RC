import axios from 'axios';
import key from '../../../apiKey';

// Axios base config
const api = axios.create({
    baseURL: 'https://www.alphavantage.co'
  });

// Make a request S&P 500 Quote
export const sp500Request = () => {
  return api.get(`/query?function=SECTOR&apikey=${key.alphaVantageKey}`)
    .then((response) => {
      return response.data
    })
    .catch( (error) =>{
      console.log(error);
    });
}

