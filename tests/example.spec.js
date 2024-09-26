// @ts-check
const { test, expect } = require('@playwright/test');


test('login to restronet', async({page}) => {
  await page.goto('https://demo.restronet.com/newdemo/admin/login');
  const userName = page.locator("//input[@name='username']");
  const password = page.locator("//input[@name='password']")
  await userName.fill("administrator");
  await password.fill("123456");
})
