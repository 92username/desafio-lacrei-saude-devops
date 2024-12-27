const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Bem-vindo à API Lacrei Saúde!');
});

describe('Testando a API básica', () => {
  it('Deve responder com a mensagem correta na rota raiz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Bem-vindo à API Lacrei Saúde!');
  });
});
