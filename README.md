RUN:
npm install

Endpoints:
- doctors
- clients
- specializations
- sessions

Example:

async function getRequest(endpoint) {
  const request = await fetch(`http://localhost:3000/${endpoint}`);
  return request.json();
}

async function postRequest(endpoint, body) {
  await fetch(`http://localhost:3000/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

async function checkDoctors() {
  let doctors = await getRequest('doctors');
  console.log(doctors);

  const doctorObj = {
    "name": "Grisha",
    "specialization": 2,
  }
  await postRequest('doctors', doctorObj);

  doctors = await getRequest('doctors');
  console.log(doctors);
}

async function checkSpecializations() {
  let specializations = await getRequest('specializations');
  console.log(specializations);
  const specObj = {
    "name": "Surgeon",
  }
  await postRequest('specializations', specObj);

  specializations = await getRequest('specializations');
  console.log(specializations);
}

async function checkSessions() {
  let sessions = await getRequest('sessions');
  console.log(sessions);

  const sessionObj = {
    "doctorId": 2,
    "clientId": 1,
    "date": "2023-02-18 14:45",
  }
  await postRequest('sessions', sessionObj);

  sessions = await getRequest('sessions');
  console.log(sessions);
}


async function main() {
  await checkDoctors();
  await checkSpecializations();
  checkSessions();
}

main();
