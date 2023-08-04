// 予約語(let,const)や数値、文字列をオブジェクトのキーや値にできる
// 参照の仕方は
const person = {
  name: "test",
  age: 30,
  const: "const",
  "test A": "aaa",
  3: 3,
  "-3": -3,
};
console.log(person["test A"]); // []で指定する、クオートで囲う

// オブジェクトのキーはすべてstringで管理しているので11行目のように参照するときは'name'や'3'となっている
// 数字でも勝手に11行目のような参照ではキーは文字列型に変換している

// for inループはそのオブジェクトのキーを取得するループ
for (const key in person) {
  console.log("for in : " + key);
}
// Object.keysはオブジェクトのキーを配列で変えす
// Object.keysループはその変数の中のキーを取得できる
for (const key of Object.keys(person)) {
  console.log("for of key: " + key);
}

// Object.valuesはオブジェクトのバリューを配列で変えす
// Object.valuesループはその変数の中のキーを取得できる
for (const key of Object.values(person)) {
  console.log("for of value: " + key);
}

// Object.valuesはオブジェクトのキーとバリューをセットにして配列で変えす
// Object.valuesループはその変数の中のキーとバリューのセットを取得できる
for (const key of Object.entries(person)) {
  console.log("for of entries: " + key);
}

// キーの順番は数字(少数、負の値は除く)が早い順、その次に記述したキー順になる

// キーの削除
delete person.age;
console.log(person);

// プロパティの省略記法
// const coffee = {
//   name: name,
// };
// 省略記法例
const coffee = {
  name,
};
console.log(coffee);

// スプレッド構文…
// オブジェクトを新しい変数にコピーするとアドレスが参照され、同じオブジェクトを代入するオブジェクトの仕組みをなくし、
// アドレスを参照せず中身だけコピーして、全く違う新しいオブジェクトを生成する構文

const coffee2 = { ...coffee };
console.log(coffee === coffee2); // trueだったものがfalseになる

// Object.assignは既存のオブジェクト同士を結合させる
const o1 = { a: 1 };
const o2 = { b: 2 };
Object.assign(o1, o2);
console.log(o1); // o1にo2の内容を合体させる、また同じキーを持つときはo2を優先する

// 複数入れたいとき
const o3 = { c: 3 };
Object.assign(o1, o2, o3);
console.log(o1); // 右の数字がどんどん優先される形になっている

// 分割代入…77行目のようにキーと同じ名前で代入するときに省略した形で書ける
const book = {
  title: "Ruby",
  price: 100,
};
// const title = book.title; 下と同じ
const { title, price } = book;
console.log(title, price);

//　別の書き方(別名をつけるとき)
const { title: bookTitle } = book;
console.log(bookTitle);
// console.log(title); // 別の変数名を作るとこの指定で呼び出せなくなる

// 特殊なパターン(オブジェクトの中のオブジェクトを分割代入であらわすとき)
const test = {
  a: {
    bbb: "test",
  },
  c: {
    ddd: "test2",
  },
};
const {
  a: { bbb },
  c: { ddd: eee },
} = test;
console.log(bbb);
console.log(eee);

// in演算子…特定のプロパティがそのオブジェクトにあるか否か判断する演算子
console.log("title" in book);

// Optional Chaining…「.」の前に「?」をつけると?より前がnullまたはundefinedだと?より後は実行せず処理する
let hoge;
console.log(hoge?.test);
// 関数や配列でも使える→hoge?.()

// thisについて
// 最初にレキシカル環境を作ったときにglobal objectとthisプロパティを作っている
console.log(this); //  this: global object

// また、関数の呼び出しやブロック文を作ったときにもレキシカル環境を作るが、その時にもthisプロパティを作る
// le : レキシカル環境は( sayThis() )
// outerEnv: global
// this: strict ? undefined : global object

let sayThis = function () {
  console.log(this); // オブジェクトに登録したメソッドとして呼び出した場合はthisはそのオブジェクトになる、なければglobal objectかundefined
};
sayThis();

// メソッドの中のthisは？
// le : レキシカル環境は( car.sayThis() )
// outerEnv: global
// this: car
const car = {
  color: "red",
  sayThis: sayThis,
};
car.sayThis();

// thisはfunctionを呼んだ時の「.」の前についているオブジェクトを指している
// メソッドの中で自分のオブジェクトをさしたい場合はthisを使う

// アロー関数の時のthisは？
// アロー関数の場合はレキシカル環境を作りだした時にthisは作られないので注意(outerEnvを経てthisはglobal objectを指す)

// applyとcallで特定のオブジェクトを指定しthisに代入する(本来thisが持つ参照先オブジェクトをなりすまして書き換えるので自身が持っていないプロパティやメソッドが使える)
// https://wp-p.info/tpl_rep.php?cat=js-application&fl=r11

sayThis = function (a, b) {
  console.log(this, a, b);
};
sayThis.call({ hello: "hello" }, 1, 2);
sayThis.call({ hello: "hello" }, [1, 2], [3, 4]); // 1つの配列にして渡す
// →区切りで引数として渡すのか、それとも配列でまとめて渡すのか、という違い

// 別の例
let f = function () {
  // 関数『f』を定義します。
  console.log(this.name); // 自身が格納されているオブジェクトのプロパティ『name』を出力します。
};

let o = {}; // オブジェクト『o』を定義します。
o.name = "ワンパンマン"; // 関数『o』のプロパティ『name』に文字列『ワンパンマン』を入れます。

f.call(o); // 関数『f』をオブジェクト『o』として実行することで文字列『ワンパンマン』が出力できます。

// bindで特定のオブジェクトを指定し関数を作り出している
// それをthisに代入するには変数に代入する必要があるのが少しapplyとcallとの違い
// また、callとapplyより優先されるので宣言した時点でなりすましができなくなる
// アロー関数で定義した場合はbindで書き換えられないが、パラメータは適用されるのでその部分だけ別のパラメータを入れられなくなり、固定できる
sayThis = sayThis.bind({ hello: "hello" });
sayThis(1, 2); // パラメータを入れたい場合は1,2と入れる

// memo
const pokemon = {
  color: "red",
  versionChange: function (color) {
    this.color = color;
    console.log(this.color);
  },
};
// pokemon2 = { ...pokemon };
console.log(pokemon.color);
pokemon.versionChange("white");
console.log(pokemon.color); // アドレス指定により(ocjectの性質)colorプロパティをそっくりそのまま変えてしまう

// pokemon.color自体を変えたくないとき
// pokemon2 = { ...pokemon }スプレッド構文で中身だけコピーしたオブジェクトを生成して、
// 178行目をpokemon2.versionChange("white");とすると変えずにすむ

// メソッドの省略記法
// メソッドはアロー関数で書かない方がいい→thisが使えなくなるので
// let subuject = {
//   changeSubject: function(title) {

//   }
// }

// 省略形
let subuject = {
  changeSubject(title) {},
};

// プロパティの種類
// ・データプロパティ…単に値の出し入れができるごく普通のプロパティのこと
// ・常に内部的なアクセサ関数を通して値がセットされたり取り出されたりするプロパティ

// getter
const body = {
  height: 160,
  weight: 70,
  get bmi() {
    return (this.weight / (this.height * this.height)) * 10000;
  },
  // setter
  set bmi(newValue) {
    this.weight = newValue / (this.height * this.height) / 10000;
  },
};
// console.log(body.bmi()); // これだと関数を呼んでいるのでプロパティとして呼んでいない
console.log(body.bmi);

body.bmi = 23; // 値が書き変わる瞬間にsetterを通り、
console.log(body.bmi); // 出力されるときにはgetterを通り、returnで返した値を出力している

// データプロパティはキーと4つの属性をもつプロパティの事
// PropertyDescriptor…属性を表す
console.log(Object.getOwnPropertyDescriptor(body, "height")); // heightキーの高度な設定が見れる

// Object.defineProperty(body, "height", { writable: false });
// writable：書き換えられなくなるが、Object.definePropertyでvalueを直接さわれば書き換えられる
// enumerable：ループ処理の許可を設定、falseだとそのキーは無視される　またassignやスプレッド構文は使えなくなる
// configurable：writable,enumerableが変えられなくなる、deleteプロパティが使えなくなる
// 上記3つfalseだと開発者ツールでみると文字が薄くなっている

// Object.definePropertyで別の属性を追加できる
// Object.defineProperties,Object.definePropertyDescriptorsなどもある

// getter,setterはアクセサプロパティなのでwritableとvalueがなくなり、get,setが属性に追加される
// Object.defineProperty(body, "height", { writable: false });
// Object.preventExtensions(プロパティ名)でキーを追加できないので拡張を禁止する
// Object.isExtensible(プロパティ名)でキーを追加できるようにさせ、拡張を許可する
// Object.seal(プロパティ名)はキーを追加できないので拡張を禁止するのとすでにあるプロパティを削除することもできなくなる
// Object.isSealed(プロパティ名)はキーを追加できないので拡張を禁止するのと指定したプロパティのキーのconfigurableがfalseであるとtrueになる
// Object.freeze(プロパティ名)はwritable、configurableをfalseにする
// Object.isFlozen(プロパティ名)はキーを追加できないので拡張を禁止するのと指定したプロパティのキーのconfigurablとwritableがfalseであるとtrueになる
