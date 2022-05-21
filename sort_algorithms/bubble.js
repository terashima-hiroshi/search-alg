/**
 * バブルソート
 * @param {number[]} arr 並べ替え対象配列
 * @returns ソート済み配列
 */
module.exports = function(arr) {
    // 元データが変わらないように新たに配列を生成
    const sorted = [...arr];
    // 小さい数値から順に並び替えていく
    for (let i = 0; i < sorted.length; i++) {
        // 入れ替えは末尾から行う
        for(let j = sorted.length - 1; j > i; j--) {
            // ひとつ前の要素より小さい場合は入れ替え
            if (sorted[j - 1] > sorted[j]) {
                const tmp = sorted[j - 1];
                sorted[j - 1] = sorted[j];
                sorted[j] = tmp;
            }
        }
    }
    return sorted
};
