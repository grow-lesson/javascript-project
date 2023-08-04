// Node.jsとはjavascriptエンジンが搭載されたソフトウェア。
// ブラウザがなくてもjavascriptを動かすことができる
// LTS…long time support 長期間サポートされることが保証されるバージョン

// node ファイル名…ファイルを実行できる

console.log("hello");

// node.jsをweb上からインストールするとnpmも自動的にダウンロードされる
// npm…node.jsのプログラムを簡単に共有できるソフトウェアの事
// 自分のnode.jsのプログラムを世界中に公開、または別の人が作ったプログラムをインストールできる

// npm init …package.jsonを作成するコマンド。最初からあるなら必要ない。
// npm publish …そのプログラムを公開する

// npm insatall ・・・・で人の作ったプログラムをインストールできる
// npmの公式サイトからインストールできる
// インストールすると、package.jsonの中に「dependencies」にインストールしたパッケージが記載される
// versionも記載される
// 「node_modules」のディレクトリの中にも生成される。node_modulesがない場合はそれもインストールした時点で作られる
// 「dependencies」に記載されたパッケージの中にもpackage.jsonが生成され、その中にも「dependencies」がある
// npm insatalだけだと、package.jsonに記載された内容のパッケージをインストールする
// つまり、node_modulesをコピーする必要はなく、同じものを共有するときはpackage.jsonだけ渡せばいい

// versionの記載について
// "1.2.3"…何もついていないとき→そのバージョンがインストールされる
// "~1.2.3"…チルダがついているとき→3番目のバージョンだけ変わるかもしれないのでインストールタイミングによっては最新版をインストールされる
// "^1.2.3"…ギャレットがついているとき→2,3番目のバージョンだけ変わるかもしれないのでインストールタイミングによっては最新版をインストールされる

// package-lock.json…作成者が作った当時のバージョンで保存されたパッケージ
// チルダやギャレットがついているところが変わる事が困るときはpackage-lock.jsonを参照するので
// npm ciを実行すればよい

// 127から始まるipアドレスは自分のコンピュータを指し示している
// 192から始まるipアドレスはネットワーク上の自分のコンピュータに割り振られている番号

// 127.0.0.1は「localhost」と記述してもよい

// package.jsonの「script」にある変数を使い「npm run 変数」として実行するとサーバーが立ち上がる
// windowsだと、「"server": ".\\node_modules\\.bin\\http-server"」、または「http-server」とすると実行される
// macだと、「"server": "./node_modules/.bin/http-server"」、または「http-server」とすると実行される
// パスの指定に注意

// scriptの変数はtest,start,stop,restartは「npm run」だけで立ち上がる

// npxコマンドはscriptは関係なく、node.jsをインストールをするとデフォルトでインストールされる
// npx パッケージ名とすると、npm installしていなくても使い捨てのコマンドとして実行できる

// npm install -g…グローバルにインストールする
// どのフォルダにいてもそのパッケージが追加するコマンドを使用できるようになる

// npm install --save-dev…
// 例：npm install --save-dev パッケージ名
// devDependenciesに記載がある
// prittierは開発するときだけに使うパッケージなのでそのようなパッケージに使用する
// 本番に関係ないものは不必要なインストールになるのでsave-devでインストールする
