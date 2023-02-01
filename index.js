const jsonServer = require('json-server');

const db = {
  doctors: [
    {
      "name": "Elon Musk",
      "specialization": 1,
      "id": 1,
    },
    {
      "name": "Bill Gates",
      "specialization": 2,
      "id": 2,
    },
    {
      "name": "Winston Cherchill",
      "specialization": 3,
      "id": 3,
    },
  ],
  specializations: [
    {
      "name": "Urologist",
      "id": 1,
    },
    {
      "name": "Oculist",
      "id": 2,
    },
    {
      "name": "Therapevt",
      "id": 3,
    },
  ],
  clients: [
    {
      "name": "John",
      "id": 1,
    },
    {
      "name": "Valera",
      "id": 2,
    },
  ],
  sessions: [
    {
      "doctorId": 1,
      "clientId": 2,
      "date": "2023-02-23 18:00",
      "id": 1,
    }
  ]
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;

server.use(middlewares);

server.use(router);
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
