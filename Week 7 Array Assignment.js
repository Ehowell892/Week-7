let ages=[3,9,23,64,2,8,28,93,69];
let newAge=ages[ages.length - 1] - ages[0];
console.log(newAge); 
let averageAge=0;
for (let index=0; index<ages.length; index++)
    {
        averageAge+=ages[index];
    }
    averageAge=averageAge/ages.length;
    console.log(averageAge);
///////////////////////2///////////////////////////////////

    let names=['Sam','Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    let averageLength=0;
    for(let index=0; index<names.length; index++)
        {
            averageLength+=names[index].length;
        }
        averageLength=averageLength/names.length;
        console.log(averageLength);
        let allNames="";
        for(let index=0; index<names.length; index++)
            {
                allNames+=names[index] +" ";
            }
            console.log(allNames);
////////////////////////5////////////////////////////////
    let nameLengths=[];
    for(let index=0; index<names.length; index++)
        {
            nameLengths.push(names[index].length);
        }
        console.log(nameLengths);

///////////////////////6///////////////////////////////////
averageLength=0;
        for(let index=0; index<nameLengths.length; index++)
            {
                averageLength+=nameLengths[index];
            }
            averageLength=averageLength/nameLengths.length;
            console.log(averageLength);
///////////////////////////7////////////////////////////////
            function f1(word, n){
                var result='';
                for (let index = 0; index<n; index ++){
                    result+=word;
                } 
                return result;
            }
            console.log(f1('result', 3));
//////////////////////////////8///////////////////////////////
            function f2(firstName, lastName){
                return firstName+' '+lastName;
            }
            console.log(f2('Evan', 'Howell'));
//////////////////////////9///////////////////////////////////
            function f3(numbers){
                var sum = 0;
                for (let index = 0; index<numbers.length; index ++){
                    sum+=numbers[index];
                } if (sum>100){
                    return  true;
                } else return  false;
            }
            console.log(f3([1,5,8,14,69]));
            console.log(f3([25,34,69,54]));
////////////////////////////10////////////////////////////////
function f4(numbers){
    var sum = 0;
    for (let index = 0; index<numbers.length; index ++){
        sum+=numbers[index];
    }
    return sum / numbers.length;
}
console.log(f4([1,5,8,14,69]));
//////////////////////11////////////////////////////////////////
function f5(numbers1, numbers2){
    var sum1 = 0;
    var sum2 = 0;
    for (let index = 0; index<numbers1.length; index ++){
        sum1+=numbers1[index];
    }
    for (let index = 0; index<numbers2.length; index ++){
        sum2+=numbers2[index];
    }
    if (sum1 > sum2)
        return true;
    else return false;
}
console.log(f5([1,5,8,14,69], [67,4,87,12,36]));
console.log(f5([1,5,8,14,69,600], [67,4,87,12,36]));
////////////////////12/////////////////////////////////////////////
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.50){
        return true;
    } else return false;
}
console.log (willBuyDrink(true, 12));
console.log (willBuyDrink(true, 9.50));
console.log (willBuyDrink(false, 15));
///////////////////13///////////////////////////////////////
function willBuyGame(onSale, moneyInPocket){
    if (onSale == true && moneyInPocket > 70){
        return true;
    } else return false;
}
console.log(willBuyGame(false, 75));
console.log(willBuyGame(true, 80));
console.log(willBuyGame(true, 65));
/////////////////////////////////////////////////////////////////