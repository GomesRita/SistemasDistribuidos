import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        {
            duration: '10m',
            target: 10000
        }
    ]
}
export default function () {
  http.get(`http://localhost:8080/`);
  
  sleep(1);
}