// 関数はオブジェクト→オブジェクトを作り、変数を宣言している
// 関数宣言文と関数式
function add(a, b) {
  return a + b;
}

let sayHi = function hi() {
  return "hi";
};

console.dir(add(3, 4));
// console.log(hi()); →関数名を指定しても定義エラーになる
// 関数式ではあくまでも式は作らずオブジェクトのみ作る
// よって関数式を呼び出すには
console.log(sayHi());

// そのため関数式では関数名を書いても意味がない
// →別の書き方ができる
// let sayHi = function () {
//   return "hi";
// };

// 関数名を書く式は「名前付き関数式」、書かない式は「無名(anonymous)関数式(匿名関数)」という
// 関数宣言文も同じ関数名を書いた場合は「名前付き関数」、書かない式は「無名関数(匿名関数)」という

// 2つの違い
// 関数宣言文は上に書いても下に書いても処理の際は上に巻き上げられるのでどこでも呼び出せる
// 関数式は巻き上げられないので上から処理する順番に沿わない場合はエラーになる

// メソッドとはオブジェクトのキーバリューのバリューにある関数のこと
const person = {
  name: "test",
  sayHi: function () {
    return "hi";
  },
};
console.log(person.sayHi());
// sayHiメソッドという

// アロー関数(無名関数の別の書き方)
let testA = () => {
  return "test";
};
console.log(testA());

// 1つの式を返すときは
let testB = () => "testB";
console.log(testB());

// 仮引数を指定するときも1つの場合は()がいらない
let userName = "tama";
let testC = name => `${name} bbb`;
console.log(testC(userName));

// オブジェクトの場合は？
let fruit = "apple";
let testD = fruit => ({
  fruit_name: fruit,
});
console.log(testD(fruit));

// デフォルトパラメータについて
par = (p = "paramater") => `result: ${p}`;
console.log(par()); // 引数が指定されていない場合はデフォルトパラメータが採用される

// レストパラメータについて
let sum = (...nums) => {
  console.log(nums);
  let total = 0;
  for (num of nums) {
    total += num;
  }
  return total;
};
console.log(sum(1, 3, 5, 7));
// ...numsとすることで仮引数を配列にすることができる
// (a,b,...nums)と記述すると、aに1、bに3が入り、残りはnumsとして配列になる
// →残りをすべて配列としてまとめるパラメータの事(残用パラメータ) ES6採用
// ES6より前はargumentsという変数をアロー関数以外の関数であれば参照すれば配列として受け取る

// コールバック関数について
let subtract = (a, b, callback) => {
  let result = a + b;
  callback(result); // callbackにcbアロー関数が入っていて、resultを入れ実行
};
subtract(
  1,
  3,
  (cb = resultSum => {
    // callbackでcbアロー関数に入り、resultの値がresultSumに入る
    // cbという変数はなくてもいいがつけた方がcallback();が呼ばれたときに呼び出す無名関数だとわかる
    console.log(resultSum);
  })
);
// () => {}　変数宣言しない無名関数かつアロー関数…コールバック関数にだけ使うことがある
() => {
  console.log("test");
};
