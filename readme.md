# Care.Fi - Assignment 

Description:-

This script automates the process of searching for laptop on Amazon by Brand Name and Price.

Playwright https://playwright.dev/
TypeScript https://www.typescriptlang.org/
This tests are purely for Playwright features practice, usage of Page Object Model.

Getting Started

Prerequisites

Install Playwright and browser binaries for Chromium, Firefox and WebKit.

```bash
npm init playwright@latest
```
    

You need to have Node.js installed.

Useful Commands

Open terminal in the project root directory

Run all Tests  
```bash
npx playwright test 
```
Run Tests for dynamic html table Feature
```bash
npx playwright test test ecom-amazon-product/tests/productPage.spec.ts
npx playwright test test ecom-amazon-product/tests/homePage.spec.ts
```
Run Tests in headed mode for dynamic html table Feature
```bash
npx playwright test dynamic-html-table/tests/tablePage.spec.ts --headed
```