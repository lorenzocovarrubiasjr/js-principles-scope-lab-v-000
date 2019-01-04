// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
   return bestCustomer;
}

function overwriteBestCustomer(a) {
  bestCustomer = a;
  return bestCustomer;
}

function leastFavoriteCustomer() {
  const leastFavoriteCustomer = "not me";
  return leastFavoriteCustomer
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "def not me";
  return leastFavoriteCustomer;
}
