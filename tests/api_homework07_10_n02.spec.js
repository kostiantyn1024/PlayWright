const { test, expect } = require('@playwright/test');
const { escape } = require('querystring');

//Отправка GET-запроса:
test('GET request', async ({ request }) => {
  const response = await request.get('https://dummyapi.online/api/social-profiles/1')

//Проверки на ответ:  
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
  
  expect(response.headers()['content-type']).toBe('application/json');

  expect(response.headers()['server']).toBe("Netlify" || "Cloudflare" || "AWS" || "Apache"); 

  if (!response.headers()['content-length']) {
    console.log ("content-length is null")
  }
  else {
    expect(response.headers()['content-length']).toBeLessThan(600)

  }

//Проверка содержимого тела ответа:
const responseBody = await response.json();
expect(responseBody).toHaveProperty("languages")
const languages = responseBody["languages"]
let countElementsLanguages = languages.length
console.log(countElementsLanguages)

expect(responseBody).toHaveProperty("customFields")
const customFields = responseBody["customFields"]
const test = responseBody.customFields[0];
expect(test.fieldName).toBe("FavoriteBook")
expect(test.fieldValue).toMatch("1984")
})