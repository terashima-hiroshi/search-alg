const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/** 探索アルゴリズム */
const searchAlgorithms = [
  { code: "linear", name: "線形探索" },
  { code: "binary-tree", name: "二分木探索" },
];
/** デフォルト入力値 */
const defaultInputNumbers = [0, 0, 0, 0, 0];

// 初期表示画面
app.get("/", (req, res) => {
  // デフォルトでランダムな値を設定する
  for (let i = 0; i < defaultInputNumbers.length; i++) {
    // 100までの整数を生成
    defaultInputNumbers[i] = Math.floor(Math.random() * 100);
  }
  // 初期データで画面を表示
  res.render("index.ejs", {
    algorithms: searchAlgorithms,
    inputNumbers: defaultInputNumbers,
    target: defaultInputNumbers[0],
    result: "数値を入力し、検索ボタンを押下してください",
    selectedAlgorithm: searchAlgorithms[0].code,
  });
});

// 検索結果画面
app.post("/", (req, res) => {
  // 入力した数値は文字列で渡ってくるため、数値型に変換
  const inputNumbers = req.body.inputNumbers.map((value) => Number(value));
  const target = Number(req.body.target);
  const alg = req.body.algorithm;
  let result;
  try {
    console.log("start search. ");
    console.log("algorithm:", alg, "input:", inputNumbers, " target:", target);
    const start = new Date().getTime();

    // 選んだアルゴリズムを読み込み
    const search = require("./search_algorithms/" + alg);
    if (search) {
      // ソート処理を実行
      const ret = search(inputNumbers, target);
      if (ret === null) {
        result = "見つかりませんでした"
      } else if (typeof ret === "number") {
        result = ret + 1 + "番目";
      } else if (typeof ret === "object") {
        result = "ノード：" + JSON.stringify(ret);
      }

      const end = new Date().getTime();
      console.log("search end.");
      console.log("result", ret, " time:", end - start, "ミリ秒");
    } else {
      // 結果がない場合(基本的にあり得ない)
      throw new Error("サーチアルゴリズムの結果が異常です");
    }
  } catch (err) {
    console.log(err);
    result = "エラーが発生しました";
  }

  // 結果をHTMLに組み込んで返却
  res.render("index.ejs", {
    algorithms: searchAlgorithms,
    inputNumbers: inputNumbers,
    target: target,
    result: result,
    selectedAlgorithm: alg,
  });
});

app.listen(process.env.PORT || 3000);
console.log("listen: http://localhost:3000");
