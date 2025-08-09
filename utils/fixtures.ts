
import {LoginPage} from '../pages/HomePage/LoginPage'
import {HomePage } from '../pages/HomePage/HomePage'
import {DebitCardAppPage} from '../pages/DebitCard/DebitCardAppPage'
import {CredtCardAppPage} from '../pages/CreditCard/CredtCardAppPage'
import {TrackingApplicationStatus} from '../pages/TrackingPage/TrackApplicationStatus'
import {CommonLibrary} from '../utils/CommonLibrary'
import {test as base} from '@playwright/test'


type fixtures={
    loginPage:LoginPage
    homePage:HomePage
    debitCardApp:DebitCardAppPage
    creditCardApp:CredtCardAppPage 
    trackingApp:()=> Promise<TrackingApplicationStatus>  
    commonLib:CommonLibrary

}

export const test=base.extend<fixtures>({
 loginPage:async({page},use)=>{
    await use(new LoginPage(page))
     },
 homePage:async({page},use)=>{
    await use(new HomePage(page))
 } ,
 debitCardApp:async({page},use)=>{
    await use(new DebitCardAppPage(page))
 } ,
 creditCardApp:async({page},use)=>{
    await use(new CredtCardAppPage(page)) //here we are passing object to create fixture
 },
 
 trackingApp:async({page},use)=>{   //creating fixture
   const fn = async () => {             //aynomous function adn store in function variable fn
     const commonlib=new CommonLibrary(page)
     const page1=await commonlib.switchToWindow(1)

    return new TrackingApplicationStatus(page1)}
    await use(fn)   //passing this function to create fixture
 }  ,
 commonLib:async({page},use)=>{
   await use (new CommonLibrary(page))
 }
})



//export{test} -- other way to export
