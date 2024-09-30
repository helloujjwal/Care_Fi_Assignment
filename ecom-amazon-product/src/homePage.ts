import { Page, expect } from "@playwright/test";
import { searchEngine } from "./amazon.locator"
import exp from "constants";

const pageURL = ("https://www.amazon.in/");


export class Home_Page {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async launchURL() {
        await this.page.goto(pageURL);
        await this.page.waitForLoadState();
    }

    async verfiySearchEnigneIsVisible(){
        await expect(this.page.locator(searchEngine.search_bar)).toBeVisible();
    }

    async searchLaptop(){
        await (this.page.locator(searchEngine.search_bar)).click();
        await this.page.waitForLoadState();
        await (this.page.locator(searchEngine.search_bar)).fill("Laptop");
        await expect(this.page.locator(searchEngine.search_button)).toBeVisible();
        await (this.page.locator(searchEngine.search_button)).click();
    }

}