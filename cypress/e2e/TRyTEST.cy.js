/// <reference types= "cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


describe('Add random items', () => {
  it('NewLink', () => {
cy.visit("https://magento.softwaretestingboard.com/")
let SELECTORitems=["Gear","Women"]
let RandomIndex=Math.floor(Math.random()*SELECTORitems.length);
console.log(RandomIndex+"*********************")
cy.contains(SELECTORitems[RandomIndex]).click({force:true})  //********* 

//عدد المنتجات كتير نستخدم هذا الكود
// cy.get(".products-grid.grid").find("div.product-item-info").then((RandomClick)=>{
//   const RandonIndex=Math.floor(Math.random()*RandomClick.length);
//   cy.wrap(RandomClick[RandomIndex]).click({multiple:true})

// });

//عدد المنتجات محدود ونفسه في الخانتين للتسهيل نسخدم هذا الكود

//cy.get('#ui-id-5').click()//************men

let RandomIndexToselect=Math.floor(Math.random()*4);
cy.get('.product-items').find('.product-item').eq(RandomIndexToselect).click({multiple:true});



let Randomsize=Math.floor(Math.random()*3);
let RandomColor=Math.floor(Math.random()*3);
if (RandomIndex==1) {

cy.get('.swatch-attribute-options').find('.swatch-option').eq(Randomsize).click();
cy.get('.swatch-attribute-options.clearfix').find('.swatch-option.color').eq(RandomColor).click();

cy.get('.stock > span').invoke("text").then((theText)=>{

  if (theText=='In stock') {
    
    cy.get('#product-addtocart-button').click()
  } else {
   
    cy.log('Sorry this item is not available')
    
  }
})

  
} else {
  

  cy.get('#product-addtocart-button').click();

}

  });
});