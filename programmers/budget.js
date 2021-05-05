function solution(d, budget) {
    var answer = 0;
    let sum = 0;

    d.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < d.length; i++) {
        answer++;
        sum += d[i];
        if (sum > budget) {
            answer--;
            break;
        }
    }
    return answer;
}
