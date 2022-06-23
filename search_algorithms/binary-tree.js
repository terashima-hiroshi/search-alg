/** ソートアルゴリズム一覧 */
const sortAlgorithms = [
  { code: "bubble", name: "バブルソート" },
  { code: "selection", name: "選択法" },
  { code: "insertion", name: "挿入法" },
  { code: "merge", name: "マージソート" },
  { code: "quick", name: "クイックソート" },
];

/**
 * ノードの型
 * @typedef {Object} Node
 * @property {number} value
 * @property {Node} left
 * @property {Node} right
 */

/**
 * 二分木の作成
 * @param {number[]} arr
 * @returns {Node}
 */
const createTree = function (arr) {
  // 配列が空の場合はノードが存在しないと判断
  if (!arr.length) return null;

  // 配列の真ん中の値を取り出し
  const centerIndex = Math.floor(arr.length / 2);
  const centerValue = arr[centerIndex];

  // 左側の木を作成する用のデータをピックアップ
  const smaller = [];
  for (let i = 0; i < centerIndex; i++) smaller.push(arr[i]);
  // 右側の木を作成する用のデータをピックアップ
  const bigger = [];
  for (let i = centerIndex + 1; i < arr.length; i++) bigger.push(arr[i]);

  const node = {
    value: centerValue,
    left: createTree(smaller),
    right: createTree(bigger),
  };

  return node;
};

/**
 * 検索
 * @param {Node} node 二分木
 * @param {number} target 検索対象
 * @returns {Node} ノード
 */
const searchNode = function (node, target) {
  if (node.value === target) {
    return node;
  } else if (target < node.value) {
    // 検索対象がノードの値をより小さい場合は左の木を検索
    return searchNode(node.left, target);
  } else if (node.value < target) {
    // 検索対象がノードの値をより大きい場合は左の木を検索
    return searchNode(node.right, target);
  }

  // ありえないパターン
  return null;
};

/**
 * 線形探索
 * @param {number[]} arr 検索範囲の一覧
 * @param {number} target 検索対象数値
 * @returns インデックス（見つからない場合はnull）
 */
module.exports = function (arr, target) {
  // 最初にソート
  const sortAlg = sortAlgorithms[0].code;
  const sort = require("../sort_algorithms/" + sortAlg);
  const sorted = sort(arr);

  // 二分木を作成
  const tree = createTree(sorted);
  console.log("created binary tree:", tree);

  // 二分木から対象の値を検索
  const node = searchNode(tree, target);
  if (node) {
    return { tree, node };
  } else {
    return null;
  }
};
