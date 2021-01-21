//Repository Link:

//convert kilometer to meter (negative values will be ignored)
function kilometerToMeter(kilometerValue) {
  const meterValue = Math.abs(kilometerValue) * 1000;
  return meterValue;
}

//calculate your budget before going to the market (negative and float values will be ignored)
function budgetCalculator(numOfGhori, numOfPhone, numOfLaptop) {
  numOfGhori = parseInt(Math.abs(numOfGhori));
  numOfPhone = parseInt(Math.abs(numOfPhone));
  numOfLaptop = parseInt(Math.abs(numOfLaptop));
  const priceOfGhori = 50 * numOfGhori;
  const priceOfPhone = 100 * numOfPhone;
  const priceOfLaptop = 500 * numOfLaptop;
  const totalPrice = priceOfGhori + priceOfPhone + priceOfLaptop;
  return totalPrice;
}

//calculate your hotel cost for your next tour(negative and float values will be ignored)
function hotelCost(lengthOfStay) {
  lengthOfStay = parseInt(Math.abs(lengthOfStay));
  let totalCost = 0;
  if (lengthOfStay <= 10) {
    totalCost = lengthOfStay * 100;
  } else if (lengthOfStay <= 20) {
    const firstPart = 10 * 100;
    const remaining = lengthOfStay - 10;
    totalCost = firstPart + remaining * 80;
  } else {
    const firstPart = 10 * 100;
    const secondPart = 10 * 80;
    const remaining = lengthOfStay - 20;
    totalCost = firstPart + secondPart + remaining * 50;
  }
  return totalCost;
}

//find your mega friend
function megaFriend(friends) {
  let totalString = 0;
  let largestName;
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > totalString) {
      totalString = friends[i].length;
      largestName = friends[i];
    }
  }
  return largestName;
}
