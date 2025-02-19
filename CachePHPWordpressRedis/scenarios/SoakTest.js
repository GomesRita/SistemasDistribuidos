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

  http.get(`http://localhost:8080/wp-json/wp/v2/posts/10`);
  
  sleep(1);
}