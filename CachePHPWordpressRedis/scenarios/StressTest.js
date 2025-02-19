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
  http.get(`http://localhost:8080/wp-json/wp/v2/posts/10`);
  
  sleep(1);
}