const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc,cur) => acc + cur ,0)


console.log(myTotal);

const shoopingCart = [
    {
        itemName: "js course",
        price: 500
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobil dev couse",
        price: 5999

    }
]

const prizeToPay = shoopingCart.reduce((acc, cur) => acc + cur.price,0)
console.log(prizeToPay);



