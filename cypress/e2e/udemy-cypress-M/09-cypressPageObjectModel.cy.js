import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage()

import homepageSecond from "../../pageObjectModel/homepageSecond";
describe('Page Object Model 1. Kullanimi', () => {
    it('POM Kullanim Ornekleri', () => {
        homepagePom.navigate()
        .pricingBtn()// pageObjectModal kalasorunde homepage.js de 
        //navigate() fonksiyonunda  return this; 
        //eklemez isek  .pricingBtn() -> bunu bulamaz ve bizim o zaman 
        // homepagePom.pricingBtn() seklinde yazmamiz gerekecek !!!
    });
});

describe.only('POM 2. kullanimi', () => {
    it('POM Kullanim Ornekleri', () => {
       homepageSecond.navigate()
       homepageSecond.pricingBtn.should('be.visible').and('contain','Pricing').click()
       //Bu yontem kullanilabilir
    });
});