const merge = function(arr1, arr2) {
    const queue1 = [...arr1];
    const queue2 = [...arr2];
    const merged = [];

    // デキュー（先頭要素を切り出し）
    const dequeue = (queue) => queue.splice(0, 1)[0];

    // どちらかが空になるまで繰り返し
    do {
        if (queue1[0] < queue2[0]) {
            merged.push(dequeue(queue1));
        } else {
            merged.push(dequeue(queue2));
        }
    } while(queue1.length && queue2.length);

    // 残ったデータを後ろにくっつける
    merged.push(...queue1, ...queue2);

    return merged;
}

const mergeWrapper = function(arr) {
    const merged = [];
    for (let i = 0; i < arr.length; i = i + 2) {
        if (i + 1 < arr.length) {
            merged.push(merge(arr[i], arr[i + 1]));
        } else {
            merged.push(arr[i]);
        }
    }
    if (merged.length === 1) {
        // すべてマージしたら1次元配列で返す
        return merged[0];
    } else {
        // 2要素以上ある場合はマージを続ける
        return mergeWrapper(merged);
    }
}

/**
 * 挿入法（インサーションソート）
 * @param {number[]} arr 並べ替え対象配列
 * @returns ソート済み配列
 */
 module.exports = function(arr) {
    // 2次元配列に変換
    const sorted = arr.map(value => [value]);
    return mergeWrapper(sorted)
};
