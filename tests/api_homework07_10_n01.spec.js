const { test, expect } = require('@playwright/test');
const { escape } = require('querystring');

//Отправка GET-запроса:
test('GET request', async ({ request }) => {
  const response = await request.get('https://dummyjson.com/products')
  const responseBody = await response.json()
  console.log(responseBody)

//Проверка структуры ответа:
  expect(responseBody).toHaveProperty('products' && 'total')
  expect(Array.isArray(responseBody.products)).toBeTruthy()

//Работа с данными продуктов:
  expect(responseBody.products.length).toBeGreaterThan(0)
  const id4 = responseBody.products[3];
  console.log("Четвертый продукт: ", id4);
  const rating = id4.rating
  expect(rating).toBe(2.51)

//Проверка изображений продуктов:
  let pngFiles = [];
  let arrid4 = [id4];

  while (arrid4.length > 0) {
    const lastObj = arrid4.pop();

    if (typeof lastObj === 'string') {
      if (lastObj.startsWith('https://')) {
        pngFiles.push(lastObj);
      }
    } else if (Array.isArray(lastObj)) {
      for (const lastObjIn of lastObj) {
        arrid4.push(lastObjIn);
      }
    } else if (typeof lastObj === 'object' && lastObj !== null) {
      for (const key in lastObj) {
        arrid4.push(lastObj[key]);
      }
    }
  }
  if (pngFiles.length > 0) {
    console.log("Найденные сслыки: ", pngFiles);
  }
  else {
    expect(pngFiles.length).toBeGreaterThan(0)
  }
  for (let i = 0; i < pngFiles.length; i ++) {
    expect(pngFiles[i].endsWith(".png"))
  }

//Работа с ценами продуктов:
  let arrPrice = []
  let sumPrice = 0.0
  for (let i = 0; i < responseBody.products.length; i ++) {
    expect(responseBody.products[i]["price"]).toBeGreaterThan(0)
    sumPrice += responseBody.products[i]["price"]
    arrPrice.push(responseBody.products[i]["price"]);
  }
  console.log(sumPrice.toFixed(2))
})