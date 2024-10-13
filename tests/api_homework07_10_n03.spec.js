const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { escape } = require('querystring');

//Настройка данных:
//Отправка PUT-запроса:
test('PUT request to update user', async ({ request }) => {
  const userId = 11; 
  const updatedUserData = {
      "title": "API1234",
      "body": "Test"
  };
  
  const response = await request.put(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      data: updatedUserData 
  });

//Проверка ответа: 
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

//Извлечение данных:
const responseBody = await response.json()
console.log(responseBody)

//Проверки:
const title = responseBody.title
expect(title).toMatch("API")

const uid = responseBody.id
expect(uid).toBe(userId)

let titlereq = updatedUserData.title
expect(title).toBe(titlereq)
})