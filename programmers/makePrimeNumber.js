// 소수 만들기
function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const result = nums[i] + nums[j] + nums[k];
                if (isPrime(result)) {
                    answer++;
                }
            }
        }
    }
    return answer;
}
