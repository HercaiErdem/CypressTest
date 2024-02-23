
import { Homepage } from "../../pageObjectModel/homepage";
const homepagePOM = new Homepage()

import HomepageSecond from "../../pageObjectModel/homepageSecond";

describe('Using of the First Page Object Model', () => {
    it('Page Object Model Using Examples', () => {

        homepagePOM.navigate()
      //  homepagePOM.pricingBtn() eger homePage class'ına return this; yazmadiysak homepagePOM.  yazmak zorundayiz
      .pricingBtn()
        
    });
});

    describe.only('Using of the Second Page Object Model', () => {
        
        it('Page Object Model Using Examples', () => {

            HomepageSecond.navigate()
           HomepageSecond.pricingBtn.should("be.visible").and("contain", "Pricing").click()
            
        });
        
});