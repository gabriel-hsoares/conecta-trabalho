import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '1m', target: 30 },
    { duration: '30s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.01']
  }
};

export default function () {
  const url = __ENV.TARGET_URL || 'http://localhost:4173';
  const response = http.get(url);

  check(response, {
    'status 200': (r) => r.status === 200,
    'tempo abaixo de 1s': (r) => r.timings.duration < 1000
  });

  sleep(1);
}
