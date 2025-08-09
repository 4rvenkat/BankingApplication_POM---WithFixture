//import dotenv from 'dotenv'
import "../../utils/hooks";
import {test} from "../../utils/fixtures"

//dotenv.config({path:`Environment/.env.sit`})

/*test('Login',async({page})=>{
   const url=process.env.SIT as string
   await page.goto(url)
   const loginPage=new LoginPage(page);
   await loginPage.login("SenthilSmartQAHub","demo")
})*/
 

test('Apply credit Card',async({page,homePage,creditCardApp,trackingApp})=>{
   console.log("before creditcard click")
   await homePage.navigateToCreditCardApplicationForm()
   await creditCardApp.fillCreditCardApplication();
   await page.waitForTimeout(10000)
   await creditCardApp.findcreditCardTrackingnumber()
   await homePage.navigateToHomePage()
  // const newPage=page.waitForEvent('popup')
   await homePage.navigateToTrackApplicationStatus();
  // const page1= await newPage;
  // const page1=await commonLib.switchToWindow(1)
  // const trackingApplicationStatus=new TrackingApplicationStatus(page1)
   const tracApp= await trackingApp()
   await tracApp.trackYourCreditCardApplicationStatus()
   await tracApp.verifyCreditCardApplicationStatus();
   await page.waitForTimeout(3000)
 

})
test('Apply Debit Card',async({page,homePage,debitCardApp,trackingApp})=>{

  
    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardApp.fillDebitCardAppForm();
    await debitCardApp.findDebitCardTrackingnumber()
    await homePage.navigateToHomePage()
    await homePage.navigateToTrackApplicationStatus();
   //  const page1=await commonLib.switchToWindow(1)
   //  const trackingApplicationStatus=new TrackingApplicationStatus(page1)
     const tracApp= await trackingApp()
    await tracApp.trackYourDebitCardApplicationStatus()
    await tracApp.verifyDebitCardApplicationStatus();
    await page.waitForTimeout(3000)
  
 
 })