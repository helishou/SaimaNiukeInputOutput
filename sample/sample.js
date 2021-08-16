/*
 * @Author       : helishou
 * @Date         : 2021-08-16 00:02:50
 * @LastEditTime : 2021-08-16 13:25:06
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \print\SaimaNiukeInputOutput\sample\sample.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const {gets,read_line,readline,read_lines,print,readInt}=require('../index')

let arr = read_line().split(" ");
let n = parseInt(arr[0]);
let m = parseInt(arr[1]);
let k = parseInt(arr[2]);

let right = n * m, left = 0; 
let mid = Math.floor((right+left)/2);

while(left <= right){
    let sum = 0;
    mid = Math.floor((right+left)/2);
    for(let i = 1; i <= n; i++){
        sum += mid >= m * i? m: Math.floor(mid/i);
    }
    
    if(sum < k){
       left = mid + 1;
    }
    else{
        right = mid - 1;
    }
}
print(left)