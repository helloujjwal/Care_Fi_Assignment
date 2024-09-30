const searchEngine = {
    search_bar: "[class='nav-fill'] [id='twotabsearchtextbox']",
    search_button: "[class='nav-right'] [class='nav-search-submit nav-sprite']"

}

const productPage = {
    brand_heading: "[id='brandsRefinements'] [class='a-size-base a-color-base puis-bold-weight-text']",
    brand_name: "//span[@class='a-size-base a-color-base'][normalize-space()='Lenovo']",
    lenevo_checkbox: "[id='p_123/391242'] [class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']",
    product_lenevo_ideapad: "div[class*='slot=MAIN template=SEARCH_RESULTS widgetId=search-results_4'] [class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']",
    ideapad_product_price: "div[class*='slot=MAIN template=SEARCH_RESULTS widgetId=search-results_4'] span[class='a-price-whole']",
    ideapad_acutal_price: "div[class*='slot=MAIN template=SEARCH_RESULTS widgetId=search-results_4'] div[class='a-section aok-inline-block'] span[aria-hidden='true']",
    ideapad_addtocart_button: "[data-csa-c-action-name='addToCart'] [id='a-autoid-4']",
    cart_button: "div[id='nav-cart-text-container'] span[class='nav-line-2']",
    

}

export { searchEngine, productPage }