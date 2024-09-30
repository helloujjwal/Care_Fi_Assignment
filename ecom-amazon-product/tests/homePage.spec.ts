import { test } from '@playwright/test'
import { Page } from '@playwright/test'
import { Home_Page } from '../src/homePage'




let page: Page;
let homePage: Home_Page;


test.describe('Dynamic HTML Table Tag tests', () => {
    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        context.clearCookies();
        page = await context.newPage();
        homePage = new Home_Page(page);
        await homePage.launchURL()
        
    })

    test('Verify the Search Engine On Amazon Page', async ({}) => {
        await homePage.verfiySearchEnigneIsVisible()
        //await page.pause();
        await homePage.searchLaptop()
    })

    



})