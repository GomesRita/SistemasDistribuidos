import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 50, 
  duration: '20s', 
};

export default function () {
  let res = http.get('http://localhost:8080/');

  sleep(1);
}
