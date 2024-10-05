// @ts-check
import { test, expect } from '@playwright/test';

function getLoginLocator(page){
  return {
    userName : page.locator("//input[@name='username']"),
    password : page.locator("//input[@name='password']"),
    loginButton : page.locator("//button[@name='login']")
  };
}


test('login to restronet', async({page}) => {
  await page.goto('https://demo.restronet.com/newdemo/admin/login');
  const { userName, password, loginButton} = getLoginLocator(page)
  await userName.fill("administrator");
  await password.fill("123456");
  await loginButton.click();
  await page.waitForTimeout(6000); 
  await expect(page).toHaveTitle("Restronet | Admin Dashboard :: Admin panel ") 
})

test('Branch Creation', async({page}) => {
  await page.goto('https://demo.restronet.com/newdemo/admin/login');
  const { userName, password, loginButton} = getLoginLocator(page)
  await userName.fill("administrator");
  await password.fill("123456");
  await loginButton.click();
  await page.waitForTimeout(6000); 
  
})
