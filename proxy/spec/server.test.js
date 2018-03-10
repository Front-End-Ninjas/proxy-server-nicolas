const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method with 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  test('It should response the GET method with 404', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(404);
  });
});
