import dotenv from 'dotenv'
import { LoginPage } from '../../pages/HomePage/LoginPage'
import { CommonLibrary } from '../../utils/CommonLibrary'
import { HomePage } from '../../pages/HomePage/HomePage'
import  '../../utils/hooks'
import {test} from '../../utils/fixtures'  // bypasing playwright test method thru fixture


dotenv.config({path:'Environment/.env.sit'})

test('Online login', async({page,loginPage,homePage,commonLib})=>{

    //const commonLibrary=new CommonLibrary(page)
   

    const loginData=await commonLib.readingValueFromCSV("testdata/LoginDataCred.csv")

    if(await homePage.islogOutPresent()){
       await homePage.logOut()
    }
     
    const loginRole=process.env.role

    for(const csvData of loginData){

    if(csvData.Role===loginRole){
       
        await loginPage.login(csvData.username,csvData.password)
     
    }
    
}
   await commonLib.storageState('Credtiantls/login.json')

 

   await homePage.logOut()



})


