## 目的

为了让赛码网和牛客网上编程系统采用v8引擎时能够在本地调试代码, 手动写了函数实现输入输出

## 使用方式

1. 在input.txt内输入内容
2. 在主文件的头部加入如下代码
   const {readline ,print} = require('./input');
3. 正常使用readline\print写代码即可

## 函数列表

- 读取size个字符：gets(size)
      将读取至多size个字符，当还未达到size个时如果遇到回车或结束符，会提前结束。回车符可能会包含在返回值中。
  
- 输出信息：printsth(sth, ...)
      往控制台输出sth，当有多个参数时，空格分隔；最后不加回车。
  
- 输出一行：print(sth, ...) 
      往控制台输出sth，当有多个参数时，空格分隔；最后加回车。
  
- 读取一个（长）整数：readInt()
      从控制台读取一个（长）整数。
  
- 读取一个浮点型：readDouble()
      从控制台读取一个浮点型。
  
- 读取一行输入：read_line()   readline()
- 读取row行输入：read_lines(row)  readlines(row)

## 例子

> [乘法表](https://exercise.acmcoder.com/online/online_judge_ques?ques_id=3819&konwledgeId=40)

### sample.js

```
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
```
### input.txt
```
2 3 4
```

