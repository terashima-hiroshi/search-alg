/**
 * 選択法（セレクションソート）
 * @param {number[]} arr 並べ替え対象配列
 * @returns ソート済み配列
 */
module.exports = function(arr) {
    // 元データが変わらないように新たに配列を生成
    const sorted = [...arr];

    for (let i = 0; i < sorted.length; i++) {
        // 最小値を検索
        let minIndex = i;
        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[j] < sorted[minIndex]) {
                minIndex = j;
            }
        }

        // 入れ替え
        const tmp = sorted[i];
        sorted[i] = sorted[minIndex]
        sorted[minIndex] = tmp;
    }

    return sorted
};
