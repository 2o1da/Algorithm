// 124나라의 숫자
function solution2(n) {
    let answer = "";
    const numbers = [4, 1, 2];

    while (n) {
        answer = numbers[n % 3] + answer;
        n = n % 3 == 0 ? n / 3 - 1 : Math.floor(n / 3);
    }

    return answer;
}
