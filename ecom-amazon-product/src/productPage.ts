import { Page, expect } from "@playwright/test";
import { productPage } from "./amazon.locator"


export class Product_Page {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async verfiyLaptopBrandHeading(){
        await this.page.waitForLoadState();
        await expect(this.page.locator(productPage.brand_heading)).toContainText("Brands");
    }

    async clickOnCheckboxOfSpecificLaptopBrand(){
        await expect(this.page.locator(productPage.brand_name)).toContainText("Lenovo");
        await expect(this.page.locator(productPage.lenevo_checkbox)).toBeVisible();
        await (this.page.locator(productPage.lenevo_checkbox)).click();
        await this.page.waitForLoadState();
    }

    async verifyLenovoIdeapadDetails(){
        await expect(this.page.locator(productPage.product_lenevo_ideapad)).toBeVisible();
        await expect(this.page.locator(productPage.ideapad_product_price)).toContainText("49,190");
        await expect(this.page.locator(productPage.ideapad_acutal_price)).toContainText("₹70,090");
        await expect(this.page.locator(productPage.ideapad_addtocart_button)).toBeVisible();
        await (this.page.locator(productPage.ideapad_addtocart_button)).click();
    }

    async clickOnCartButton(){
        await expect(this.page.locator(productPage.cart_button)).toBeVisible()
        await (this.page.locator(productPage.cart_button)).click();
    }









}