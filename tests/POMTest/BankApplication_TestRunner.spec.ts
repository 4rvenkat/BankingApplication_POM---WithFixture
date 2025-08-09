import test, { chromium } from "@playwright/test";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CredtCardAppPage } from "../../pages/CreditCard/CredtCardAppPage";
import { TrackingApplicationStatus } from "../../pages/TrackingPage/TrackApplicationStatus";
import { DebitCardAppPage } from "../../pages/DebitCard/DebitCardAppPage";
import { CommonLibrary } from "../../utils/CommonLibrary";
//import dotenv from 'dotenv'
import "../../utils/hooks";

//dotenv.config({path:`Environment/.env.sit`})

/*test('Login',async({page})=>{
   const url=process.env.SIT as string
   await page.goto(url)
   const loginPage=new LoginPage(page);
   await loginPage.login("SenthilSmartQAHub","demo")
})*/
 

test('Apply credit Card',async({page})=>{
 
   const homePage=new HomePage(page);
   const credtCardApp=new CredtCardAppPage(page)
   const commonlib=new CommonLibrary(page)
   await homePage.navigateToCreditCardApplicationForm()
   await credtCardApp.fillCreditCardApplication();
   await page.waitForTimeout(10000)
   await credtCardApp.findcreditCardTrackingnumber()
   await homePage.navigateToHomePage()
  // const newPage=page.waitForEvent('popup')
   await homePage.navigateToTrackApplicationStatus();
  // const page1= await newPage;
   const page1=await commonlib.switchToWindow(1)
   const trackingApplicationStatus=new TrackingApplicationStatus(page1)
   await trackingApplicationStatus.trackYourCreditCardApplicationStatus()
   await trackingApplicationStatus.verifyCreditCardApplicationStatus();
   await page.waitForTimeout(3000)
 

})
test('Apply Debit Card',async({page})=>{



    const homePage=new HomePage(page);
    const debitCardApp=new DebitCardAppPage(page)
    const commonlib=new CommonLibrary(page)
    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardApp.fillDebitCardAppForm();
    await debitCardApp.findDebitCardTrackingnumber()
    await homePage.navigateToHomePage()
    await homePage.navigateToTrackApplicationStatus();
    const page1=await commonlib.switchToWindow(1)
    const trackingApplicationStatus=new TrackingApplicationStatus(page1)
    await trackingApplicationStatus.trackYourDebitCardApplicationStatus()
    await trackingApplicationStatus.verifyDebitCardApplicationStatus();
    await page.waitForTimeout(3000)
  
 
 })