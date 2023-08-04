// 〇〇 === 〇〇 は同値演算子 1 === '1' false
// 〇〇 == 〇〇 は等値(等価)演算子　1 == '1' true
// 同値演算子を推奨

// オブジェクトの真偽値について
const coffee1 = { name: 'test' };
const coffee2 = { name: 'test' };
console.log(coffee1 === coffee2); // false

const coffee3 = coffee1;
console.log(coffee1 === coffee3); // true

// Truthy,Falsyについて
const test = 9;
if (test) {
  // Falsy…0,-0,0n,"",null, undefined,NaN、それ以外はTruthy
  console.log('Hello!');
}

// 論理積のTruthy,Falsyについて
// 条件式の左がTruthyであれば右側の値を返す
// 条件式の左がFalsyであれば左側の値を返す

// 論理和のTruthy,Falsyについて
// 条件式の左がTruthyであれば左側の値を返す
// 条件式の左がFalsyであれば右側の値を返す

// Null合体演算子(Nullish Coalescing)
// ??を使う。Nullじゃなかったらその値をそのまま使い、Nullの場合は別の値をつかう。
// (1 ?? 2 )→1が返る
// (null ?? 2) →2が返る

// !…エクスクラメーションマーク

// 文と式の違い(statement expression)
// 変数の代入時に右辺にかけるもの、値を生成、評価するものを式、実行すると何かをするものを文という

// 参考演算子…値を返す条件式

// switch文…冗長な条件式を簡略化できる文
function vegetableColor(vegetable) {
  switch (vegetable) {
    case 'tomato':
      console.log('tomato is red!');
      break;
    case 'pumpkin':
      console.log('pumpkin is orange!');
      break;
    case 'onion':
      console.log('onion is white!');
      break;
  }
}
vegetableColor('orange'); // orangeまで出力される

// while文
let count = 0;
while (count < 10) {
  console.log(count);
  count += 1;
}

// do while文…一番最初に必ず実行される繰り返し文
let count2 = 0;
do {
  console.log(count2);
  count2 += 1;
} while (count < 10);

// for of 配列のループ
const fruits = ['apple', 'banana', 'grape'];
for (let i = 0; i < 5; i += 1) {
  console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
}
// ↓
for (fruit of fruits) {
  console.log(fruits);
}
// fruitはlet,constでも処理できる
// {
//   const fruit = 'apple';
// }
// {
//   const fruit = 'banana'
// }
// これが続くようなイメージなのでブロック文の中で何回も定義できてしまう

// for in オブジェクトのループ
const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true,
};
for (const key in coffee) {
  console.log(key);
  console.log(coffee[key]); // name:Caffe Latte,size:350...
}

// 配列でfor inループを使うと
for (const key in fruits) {
  console.log(key);
  console.log(fruits[key]); // 0:apple,1:banana...
}

// continue文…入れるとその下の処理が行われずに次のループ処理へ行く

// ラベル文:例1
coffeeCondition: if (true) {
  for (const key in coffee) {
    if (key === 'size') {
      console.log('break!');
      break coffeeCondition;
    }
    console.log(key);
    console.log(coffee[key]);
  }
  console.log('inside an if statement');
}
// 出力例
// name
// Caffe Latte
// inside an if statementは出力されない→cofeeConditionの文の終わりに行く

// ラベル文:例2
if (true) {
  coffeeCondition: for (const key in coffee) {
    if (key === 'size') {
      console.log('break!');
      continue coffeeCondition;
    }
    console.log(key);
    console.log(coffee[key]);
  }
  console.log('inside an if statement');
}
// 出力例
// name
// Caffe Latte
// inside an if statement

// 二個は記述できずエラーになる
// ラベル文は関数には使えない
// ループ文にしか使えない

// try catch文…エラーが起きたとしても処理を継続する文
try {
  console.log('1');
  console.log(chocolate);
} catch {
  console.log('2');
}
console.log('3');

// chocolateが定義されていないので「1,2,3」で出力される
// chocolateが定義(例えば空文字)されていれば「1,3」で出力される
// 構文エラーではcatchしない(例：かっこが抜けてるなど)

// finally…try catch文の最後に入れられる文
// 関数内でtryやcatchでreturnしてもfinallyは実行される
// finally文でreturnすると「tryやcatchでreturnした後の処理」と「tryやcatchでreturnする前の処理」は無視される

throw 'error';
