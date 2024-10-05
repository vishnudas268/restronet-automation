// @ts-check
import { test, expect } from '@playwright/test';

function getLoginLocator(page){
  return {
    userName : page.locator("//input[@name='username']"),
    password : page.locator("//input[@name='password']"),
    loginButton : page.locator("//button[@name='login']")
  };
}

function getSideBarLocator(page){
  return {
    locationbar : page.locator("(//a[@class='has-arrow ai-icon '])[7]"),
    branchManagement : page.locator("//a[text()=' Branch Management ']")
  }
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
  const { locationbar, branchManagement} = getSideBarLocator(page)
  await userName.fill("administrator");
  await password.fill("123456");
  await loginButton.click();
  await page.waitForTimeout(6000); 
  await locationbar.click()
  await branchManagement.click()
  await page.waitForTimeout(6000); 
  await expect(page).toHaveTitle("Restronet | View branches :: Admin panel ") 
})
