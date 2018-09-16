const ASCII = {
    UPPER: {
        MIN: 65,
        MAX: 90
    },
    LOWER: {
        MIN: 97,
        MAX: 122
    }
}

function solution(str, length) {
    return str.replace(/(\w)/g, (s) => {
        let ascii = s.charCodeAt(0);
        if(ascii <= ASCII.UPPER.MAX && length > (ASCII.UPPER.MAX - ascii))  // 대문자 65~90
            ascii = ASCII.UPPER.MIN-1 + (length - (ASCII.UPPER.MAX - ascii));
        else if(ascii <= ASCII.LOWER.MAX && length > (ASCII.LOWER.MAX - ascii))  // 소문자 97~122
            ascii = ASCII.LOWER.MIN-1 + (length - (ASCII.LOWER.MAX - ascii));
        else ascii += length;
        
        return String.fromCharCode(ascii);
    });
}
console.log(solution("a B z Z", 1));