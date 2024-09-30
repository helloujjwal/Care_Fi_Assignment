import { test } from '@playwright/test'
import { Page } from '@playwright/test'
import { Home_Page } from '../src/homePage';
import { Product_Page } from '../src/productPage';




let page: Page;
let productPage: Product_Page;
let homePage: Home_Page;


test.describe('Laptops Product Page tests', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        homePage = new Home_Page(page);
        productPage = new Product_Page(page);
        await homePage.launchURL()
        await homePage.searchLaptop()
        
    })

    test('Verify the Brand Title on the left panel and Click on the Lenovo Product', async ({ }) => {
        await productPage.verfiyLaptopBrandHeading();
        await productPage.clickOnCheckboxOfSpecificLaptopBrand();
        await productPage.verifyLenovoIdeapadDetails();
        await productPage.clickOnCartButton();
    })

    

    

    



})
