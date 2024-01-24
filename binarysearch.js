// create array of unordered data
const data = [2,4,6,8,10,11,12,20,30,1000];
//create a function tha
function binarySearch(data, num){
   let lenght = data.lenght;
   let left = 0;
   let right = lenght - 1;
   let index;
   let attempt = 0;

   while(left<=right){
        attempt++;
        //create a middle pointer
        const middle = left + Math.floor((right-left)/2);
        //if the num is equal to middle
        if(num==data[middle]){
            index=middle;
            return `${num} is located at index ${index} with ${attempt} attempts!`;
        }
        //update the left and right counter or indexes
        if(num < data[middle]){
                right=middle-1;
        }else{
            left=middle+1;
        }
       return `${num} is not found with ${attempt} attempts!`
    }
}
console.log(binarySearch(data,4));
console.log(binarySearch(data,11));
console.log(binarySearch(data,1000));
console.log(binarySearch(data,1));