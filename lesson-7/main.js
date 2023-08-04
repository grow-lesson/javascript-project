// レキシカル環境(LexicalEnvironment)→オブジェクトのようなものととらえていい
// outerEnvは外側の環境を意味する、外側の環境をアドレスで指定している
// consoleで表示しようとすると、まずは今いるブロック文にあるか判断する
// その後に変数がない場合はouterEnvで外側の環境にアクセスし、変数を探す

// レキシカル環境が作られるのは関数は呼び出したときに作られ、それ以外のブロック文だと定義した時点で作られる
// 関数式を定義した時にはそのレキシカル環境にオブジェクトは作られるがその内部のレキシカル環境は作られないということになる
// 引数もレキシカル環境に登録される

// [[Environment]]プロパティ…誰も触れないプロパティ→作られた所のレキシカル環境をさしている

//　関数におけるouterEnvの決まり方は持ち運びができるので関数オブジェクトが持っている[[Environment]]プロパティ
//  が指し示すレキシカル環境になる

// クロージャ→外部の変数の情報を持った関数
// →[[Environment]]プロパティ…その関数オブジェクトが作られた所のレキシカル環境の情報を持っている
// 関数は関数の中に関数が入ることがあるので[[Environment]]プロパティを経由し参照先にアクセスする

let apple = "apple";
let outerFunc = () => {
  let mango = "mango";
  return () => {
    let orange = "orange";
    console.log(orange, mango, apple);
  };
};
let innerFunc = outerFunc();
innerFunc(); // レキシカル環境を作った後、outerEnvでinnerFuncのEnviromentプロパティを呼び出す
// その参照先はその関数の中でouterFuncという関数があるのでレキシカル環境はそのouterFunc関数のレキシカル環境になる

let generatePerson = name => {
  let age = 0;
  return {
    getName: () => name,
    getAge: () => age, // このような形で後で書き換えることができないメリットがある
    incrementAge: () => {
      age += 1;
    },
  };
};
const test = generatePerson("test");
console.log(test.getAge());
test.incrementAge();
test.incrementAge();
console.log(test.getAge());
console.log(test.getName());

// 即時実行関数式…関数を作りすぐに実行する式(41行目のように代入することが不要になる)(Immediately Invoked Function Expression)
// アロー関数Ver
const counter = (() => {
  let count = 0;
  return () => {
    count = 3;
    console.log(count);
  };
})();
counter();
// 無名関数や名前付き関数Ver
const counterB = (() => {
  let count = 0;
  return () => {
    count = 3;
    console.log(count);
  };
})(); // ←()を中に入れることができる
counterB();

// 再帰関数…自分自身を呼び出す関数
// 階乗計算
let factorial = n => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5));

// 別の書き方 1
// let factorial = function fact(n) {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

// 別の書き方 2
// let factorial = function fact(n) {
//   if (n === 0) return 1;
//   return n * arguments.callee(n - 1);
// };
// console.log(factorial(5));

// 効率の良い書き方
// let factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
// console.log(factorial(5));

// 実行コンテキスト(execution context)…実行する関数や状態、レキシカル環境がたまった情報
// スタック…実行コンテキストを貯めておく場所(仕様書上では実行コンテキストスタックといい、ブラウザ上ではコールスタックという)
// 再帰関数で引数を20000にするとエラーが出る。それはスタックが多すぎてエラーになった
