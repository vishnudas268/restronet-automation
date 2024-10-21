// @ts-check
import { test, expect } from '@playwright/test';

const baseurl = process.env.BASE_URL
const userName = process.env.USERNAME
const password = process.env.PASSWORD

function getLoginLocator(page){
  return {
    userNameField : page.locator("//input[@name='username']"),
    passwordField : page.locator("//input[@name='password']"),
    loginButton : page.locator("//button[@name='login']")
  };
}

function getSideBarLocator(page){
  return {
    locationbar : page.locator("(//a[@class='has-arrow ai-icon '])[7]"),
    branchManagement : page.locator("//a[text()=' Branch Management ']")
  }
}

function getBranchCreationLocators(page) {
  return {
    branchNameField : page.locator("//input[@name='br_mail']"),
    branchMobileField : page.locator("//input[@name='br_phone']"),
    branchAddressField : page.locator("//textarea[@name='br_address']"),
    submitButton : page.locator("//button[@type='submit']")
  }

test('Branch Creation', async({page}) => {
  // @ts-ignore
  await page.goto(baseurl);
  const { userNameField, passwordField, loginButton} = getLoginLocator(page)
  const { locationbar, branchManagement} = getSideBarLocator(page)
  await userNameField.fill(userName);
  await passwordField.fill(password);
  await loginButton.click();
  await page.waitForTimeout(6000); 
  await locationbar.click()
  await branchManagement.click()
  await page.waitForTimeout(6000); 
  await expect(page).toHaveTitle("Restronet | View branches :: Admin panel ") 
})

}