import superagent from 'superagent';

export default function apiRequest({
  method = 'get',
  url,
  payload,
  query,
  type = 'application/json',
}) {
  const _apiRequest = superagent(method, url);

  return (
    new Promise((resolve, reject) => {
      _apiRequest
        .set('Content-Type', type)
        .send(payload)
        .query(query)
        .then(resolve)
        .catch((error) => {
          reject(error);
        });
    })
  );
}
