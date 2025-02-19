import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '2m',
            target: 1000
        },
        {
            duration: '10m',
            target: 1000
        },
        {
            duration: '2m',
            target: 0
        }
    ]
}

export default function () {
  let n1 = Math.floor(Math.random() * 100);
  let n2 = Math.floor(Math.random() * 100);

  http.get(`http://localhost:82/?n1=${n1}&n2=${n2}`);
  
  sleep(1);
}