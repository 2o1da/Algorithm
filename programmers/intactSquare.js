function gcd(w, h) {
    return w % h === 0 ? h : gcd(h, w % h);
}

function solution(w, h) {
    const answer = w * h - (w + h - gcd(w, h));

    return answer;
}
