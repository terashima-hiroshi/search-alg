const sort = function (arr) {
    // 先頭の値を基準値とする
    const base = arr[0];
    const smaller = [];
    const bigger = [];

    // 基準値より小さい値と大きい値でグルーピング
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            smaller.push(arr[i]);
        } else {
            bigger.push(arr[i]);
        }
    }

    // 小さい順に値をいれていく
    const sorted = [];

    if (smaller.length) {
        // 基準より小さい値のグループがあれば、その中でさらにソート
        sorted.push(...sort(smaller));
    }

    sorted.push(base);

    if (bigger.length) {
        // 基準より大きい値のグループがあれば、その中でさらにソート
        sorted.push(...sort(bigger));
    }

    return sorted;
}

/**
 * クイックソート
 * @param {number[]} arr 並べ替え対象配列
 * @returns ソート済み配列
 */
 module.exports = function(arr) {
    return sort(arr)
};
