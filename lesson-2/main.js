let count = 0;
console.log(count);
count = 30;
console.log(count);
let newCount = 0;
const daysInWeek = 7;
// daysInWeek = 8; 定数化しているので代入できない、また初期値が必ずいる
// 定数を基本使うことを推奨

// 変数は「_」「$」以外は記号が入れられない
// また数字を変数に入れるときは先頭に置けない
// 変数の命名の推奨はキャメルケースが良い(exampleTest)
// スネークケースは命名できるが推奨されない(example_test)

let additionResult = 2 + 5;
// 「=」を代入演算子、「+,-,*,/」は算術演算子という
// 「%」余りがでる、「**」累乗

let result = 5;

result = result + 1; // 6
// ↓省略形
result += 1; // 7
// ↓省略形
console.log(result++); // 7を返すresult++;をする前の値を返すが出力後に8になる
result++; // 9
++result; // 10
console.log(++result); // ++result;をした後の11を返す

// string型にnumber型を代入できる
let number = 5;
let string = 'Hello';

number = 'something';
// ↑他のプログラミング言語ではできないがjavascriptは動的(dynamic)型付けなのでできる
// その逆は静的(static)

const userName = 'taichi';
string = `Hello ${userName}`;
// バッククォートのみできる記法

// 型変換の行われ方
console.log('10' + 10); // '1010'
console.log('10' - 10); // 0
console.log('10' * 10); // 100
console.log('hello' * 10); // NaN number型

let userInput = '10.9';
let calcResult;
calcResult = Number(userInput);
console.log(calcResult); // 10.9
calcResult = parseInt(userInput);
console.log(calcResult); // 10
calcResult = parseFloat(userInput);
console.log(calcResult); // 10.9

array = []; // 配列
// 配列に「apple」を追加
array.push('apple');

const coffee = {
  // オブジェクト
  name: 'Chocolate Mocha', // nameは「キー」、Chocolate Mochaは「バリュー」
  size: 350, // キーとバリューふたつでプロパティという
  test: {
    calories: 430,
  }, // Gitの差分が出てしまうのでつけた方がいい
};
// 新しいプロパティの追加
coffee.barista = 'test';
console.log(coffee);

// null,配列、オブジェクトはtypeof演算子を使うと「object」で返ってくる

function add(num1, num2) {
  // パラメータ、仮引数という
  console.log(num1 + num2);
}
add(2, 3); // 引数、Argumentという。

// returnがなくても引数で受け取ろうとする変数を定義すると77、78行目でreturnされる
// 関数は上下どこに書いても巻き上げられるのでどこに書いてもよいが下に書くことを推奨

const newValue = 'newValue';
const value = 'Hello';
function add2(num1, num2) {
  const value = num1 + num2;
  console.log(newValue); // 関数内でも参照できる→グローバル変数
  console.log(value); // 5が出力されるので85行目のvalueではなく、87行目のvalueが優先される
  // グローバル変数ではなく、ローカル変数が優先されることをシャドーイングという
  return value; // 関数の中で参照しているのでローカルスコープといい、関数・ブロック文の参照なので関数スコープ、ブロックスコープという
}
console.log(value); // 関数内で定義した変数は参照できない→ローカル変数

// 複数業のコメントの書き方
/*
test1
test2
test3
*/
