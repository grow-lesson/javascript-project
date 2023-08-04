// プロトタイプチェーン…オブジェクトに必要なプロパティや関数がない場合、
// __proto__が参照するコンストラクタ関数のprototypeオブジェクトにさかのぼって探すこと
// [[Prototype]]を参照する

// console.log()で「__proto__」の中身が見れる
// 「__proto__」プロトタイプの中に存在するgetterの事。
const obj = {
  a: 1,
  b: 2,
};
// obj.__proto__ = {
//   c: 3,
// }
Object.setPrototypeOf(obj, {
  c: 3,
}); // 10行目と同じ

// 10行目と、13行目を同時に行う
// const obj = Object.create({ c: 3 });

// 複数
// const obj = Object.create(
//   { c: 3 },
//   {
//     d: {
//       value: 4,
//     },
//   }
// );
console.log(Object.getPrototypeOf(obj)); // プロトタイプを見る

// for in…プロトタイプまでさかのぼって参照する。
// 順番はプロパティの後にプロトタイプがくる

// Object.keys,values,entries…プロパティの参照のみ行う
// for inループは推奨しない

// クラス…似たようなオブジェクトを生成する生成図
// const user1 = {
//   name: "test1",
//   age: 15,
// };
// const user2 = {
//   name: "test2",
//   age: 20,
// };
// const user3 = {
//   name: "test3",
//   age: 30,
// };
// このような同じようなオブジェクトを何度も作るのは効率が悪いので
// 関数としてオブジェクトを作れば効率がいい

// const UserFactory = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };

// const user1 = UserFactory("test1", 30);
// このような書き方もあるが、javascriptではクラスの表記を用意してある
const UserConstructor = function (name, age) {
  // アロー関数は使えない
  // this = Object.create(UserConstructor.prototype) 暗黙的にthisというものがprototypeオブジェクトとして定義される
  this.name = name;
  this.age = age;
  // this.greeting = function () {
  //   return `Hi! This is ${this.name}. I am ${this.age} years old.`;
  // };
  // return this;として返している
};
const user1 = new UserConstructor("test1", 30); // newを使って呼び出される関数をコンストラクタ関数という
console.log(user1);

// コンストラクタ関数を使わずに53行目にあるような関数はファクトリ関数という
// クラスから生まれるオブジェクトをインスタンスという

// コンストラクタ関数の中にある関数greetingだが、毎回呼び出されてしまうそのため、以下のような記載もできる
// すべての関数はprototypeというプロパティを持つ(アロー関数は持たない)また、3行目にあるのとは別物
// newという演算として呼ばれたとき(コントラクタ関数として呼ばれたときに)
UserConstructor.prototype.greeting = function () {
  return `Hi! This is ${this.name}. I am ${this.age} years old.`;
};

// よって、
// ・prototype・・・Functionオブジェクトだけがもつプロパティ。参照先はオブジェクト。[[prototype]]と表現されている箇所
// ・__proto__・・・全てのオブジェクトが持つ内部プロパティ。プロトタイプチェーン。暗黙の参照(自身のプロパティになければこの__proto__先を辿ること)を実現する内部で実装されているプロパティ。
// newして生成されたインスタンスの__proto__にコンストラクタのprototypeオブジェクトが代入される

// 単純なオブジェクトを作るコンストラクタ関数
const o = new Object({ hi: "Hi" });
// o = {}と一緒

// 単純な配列を作るコンストラクタ関数
const a = new Array(["a", "b"]);

// 単純な関数を作るコンストラクタ関数
const f = new Function("a", "b", "return a + b");

// hasOwnPropertiy…そのオブジェクトにプロパティがあるか返す演算子
// 演算子は内部的にthisをつかって参照して探している
console.log(o.hasOwnProperty("hi"));
console.log(Object.prototype.hasOwnProperty.call(o, "hi")); // 103行目と同じだが、キーにhasOwnPropertyがあると正しく表示してくれないのでこっちも使う

// new.target…この単語で一つのプロパティという意味。コンストラクタ関数を指し示す事ができる。
// console.log(new.target)
// アロー関数やコンストラクタ関数の外で使うことはできない
// コンストラクタ関数ではない関数で使うとundefinedと取得できる

// コンストラクタ関数でreturnを使うと、返り値がオブジェクトの場合上書きされ、文字列などは無視される

// class構文…関数オブジェクトと似てるが呼び出し方は違うので注意
class User {
  id = 120;
  // コンストラクタメソッドの中に定義されたものはnewでコンストラクタ関数を真っ先に定義した瞬間に呼び出される
  constructor(a, b) {
    (this.name = a), (this.value = b);
  }
  greeting() {} // class Userの{}には省略記法のメソッドのみかける
}
const test = new User("test", "100");
// console.log(User())は使えない
console.log(test);

// クラスとコンストラクタ関数の違いと共通点
// enumerable：ループ処理の許可を設定、falseだとそのキーは無視される　またassignやスプレッド構文は使えなくなる
// これがクラスがfalseになる
// 自動的にstrictモードになる(2015年以降に登場したので)
// クラスは式として使える→使わない方がいい

// フィールド宣言構文(115行目)…メソッドのみしか書けなかったクラスに変数を代入し宣言できる構文
// 変数を宣言できるコンストラクタメソッドよりも早く実行される

// プライベートフィールド…「#」を使うとそのクラスの中だけでしかアクセスできなくなる
// constructorメソッドで定義はできない

// extends…クラスの継承
class Animal {
  age = 0;
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  eat() {}
}
class Bird extends Animal {
  name = "bird";
  constructor(age, name) {
    super(age, name);
  }
  fly() {}
}
const bird = new Bird(3, "pi-chan");
console.log(bird);
