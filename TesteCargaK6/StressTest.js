import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '10s',
            target: 200
        },
        {
            duration: '30s',
            target: 200
        },
        {
            duration: '10s',
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