/*
 * @Author       : helishou
 * @Date         : 2021-08-16 00:30:05
 * @LastEditTime : 2021-08-18 10:39:35
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \print\SaimaNiukeInputOutput\index.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */

const fs = require("fs");
const { get } = require("http");
const path = require("path");

let data = fs.readFileSync(__dirname + path.sep + "input.txt");
let _r1 = /(\s+)/g; //去除中间多个空格
let _r2 = /(^\s*)|(\s*$)/g; //去除首尾空格
data = data
  .toString()
  .split("\n")
  .map((i) => i.replace(_r1, " ").replace(_r2, ""));
let i = 0;

/**
 * @description : 将读取至多1024个字符，当还未达到1024个时如果遇到回车或结束符，提前结束。读取多行最简单的办法是while((line = read_line()) != '')。
 * @param        {*}
 * @return       {String}
 */
function readline() {
  return data[i++];
}

/**
 * @description : 读取row行
 * @param        {Number|'all'} row
 * @return       {String}
 */
function readlines(row) {
  let r = [...data];
  if (row == "all") {
    r = r.splice(i).join("\n");
  } else {
    if (row >>> 0 !== row) {
      throw TypeError("readlines only accept positive integer or 'all'!");
    }
    r = r.splice(i, row).join("\n");
    i += row;
  }
  return r;
}

/**
 * @description :  读取一个（长）整数。
 * @param        {*}
 * @return       {Number}
 */
function readInt() {
  let array = data[i].split(" ");
  let temp = array.shift() >> 0;
  if (array.length === 0) {
    i++;
  } else {
    data[i] = array.join(" ");
  }
  return temp;
}

/**
 * @description :  将读取至多size个字符，当还未达到size个时如果遇到回车或结束符，会提前结束。回车符可能会包含在返回值中。
 * @param        {*}
 * @return       {string}
 */
function gets(size) {
  let str = data[i];
  let temp = str.substring(0, size);
  if (size > data[i].length) {
    i++;
  } else {
    data[i] = str.substring(size, data[i].length);
  }
  return temp;
}

/**
 * @description : 读取一个浮点型
 * @param        {*}
 * @return       {Number}
 */
function readDouble() {
  let array = data[i].split(" ");
  let temp = parseFloat(array.shift());
  if (array.length === 0) {
    i++;
  } else {
    data[i] = array.join(" ");
  }
  return temp;
}

/**
 * @description : 往控制台输出sth，当有多个参数时，空格分隔；最后加回车。
 * @param        {*}
 * @return       {String}
 */
function print(...msg) {
  console.log(...msg);
}

/**
 * @description : 往控制台输出sth，当有多个参数时，空格分隔；最后不加回车。
 * @param        {*}
 * @return       {String}
 */
function printsth(...msg) {
  process.stdout.write(...msg);
}

module.exports = {
  readline,
  read_line:readline,
  readlines,
  read_lines:readlines,
  print,
  printsth,
  readInt,
  readDouble,
  gets,
};
