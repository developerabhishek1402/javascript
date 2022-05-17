var sellingPrice = 199;
var listingPrice = 799;
var courseName = "Angular Bootcamp";

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;



displayDiscountPercentage = Math.round(discountPercentage);

console.log(`The total discount on the ${courseName} is ${displayDiscountPercentage} % `);

