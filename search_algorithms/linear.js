/**
 * 線形探索
 * @param {number[]} arr 検索範囲の一覧
 * @param {number} target 検索対象数値
 * @returns インデックス（見つからない場合はnull）
 */
module.exports = function (arr, target) {
  let index = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
};
