/**
 * 挿入法（インサーションソート）
 * @param {number[]} arr 並べ替え対象配列
 * @returns ソート済み配列
 */
 module.exports = function(arr) {
    // 元データが変わらないように新たに配列を生成
    const sorted = [...arr];

    // 1つ目の値をソート済みとして扱うため、開始位置は2番目空とする
    for (let i = 1; i < sorted.length; i++) {
        // 挿入対象の値を取り出し
        const insertValue = sorted[i];
        // ソート済み中で挿入位置を検索
        let j = i - 1;
        for (; j >= 0; j--) {
            if (sorted[j] > insertValue) {
                // 挿入対象より大きい場合は後ろにずらす
                sorted[j + 1] = sorted[j];
                if (j === 0) {
                    // 末端まで探索したら先頭に挿入
                    sorted[j] = insertValue;
                }
            } else {
                // 対象より小さい値の場合、その後ろに挿入
                sorted[j + 1] = insertValue;
                break;
            }
        }
    }

    return sorted
};
