// グローバル変数…自動的に関数やオブジェクトを一覧に管理している(console,parseInt...)
console.log(globalThis);

// letなどは2015年以降の変数定義
// var,letの違い
// ・再定義可能(var)
// ・ブロック文、if文の中にある変数を外でスコープできる。
// ・関数はどちらもスコープできない
// ・変数宣言の時varだとグローバル変数として保存されるが、letはグローバル変数として保存されない
// ・varはホイスティング(巻き上げ)が起こる
// ・関数宣言文もグローバル変数として保存
// 関数宣言文とvarの違いは？
// ・巻き上げまでは一緒だが、varは初期値まで巻き上げられなく、関数式だとオブジェクトとして値も巻き上げられる

// 'use strict'→ディレクティブのようなもの、文としてとらえる
// 昔は緩かったルールが今仕様にさせ厳しいルールにできる
// varのようなブロック文の中にある変数をスコープできるが、それをletのように制限できる
// 関数宣言文はブロック文の中に書かれるとvarと同じ扱いになるので定義は巻き上げられても中身(オブジェクト)は巻き上げられない
// grape = 'grape'とすると「glovalThis.grape = 'grape'」と同じ扱いになるのでvarで宣言しているのと一緒になる

// primitiveとobjectについて
// primitive(基本型)→number,string,boolean,undefined,null
// object→配列、オブジェクト、関数

// ディスクとメモリ
// ディスクとは電源を落としても、ブラウザを終了しても残るデータ
// メモリとは電源を落としたり、ブラウザを終了した時に残らないデータ

// primitiveは値がメモリにそのまま入っているが、objectは変数にアドレスが入り、そのアドレスから本当の値を参照する
const coffee = {
  name: "Caffe Latte",
};
const coffee2 = coffee; // constは直接値を再代入されることを許していない(primitiveな値)がアドレスを変えることはできる(object)ので再代入できてしまう
coffee2.name = "Moca";
console.log(coffee); // coffee2の中身を変えたのにcoffeeも変わってしまう

const coffee3 = {
  name: "Caffe Latte",
};
console.log(coffee === coffee3); // アドレスが違うのでfalse

// constで定義しても値が変わってしまう性質をミュータブル、その逆をイミュータブルという
// ミュータブルはobject、イミュータブルはprimitiveであるといえる。

// ガベージコレクションについて
// 上にあるコードみたいに使わなくなった「Caffe Latte」のアドレスを自動的に削除してくれる動きの事
// JavaScriptエンジンにおいてメモリを自動で削除するシステムのこと
