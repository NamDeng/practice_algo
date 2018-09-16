function solution(str, length) {
    return str.replace(/(\w)/g, (s) => {
        const ascii = s.charCodeAt(0);
        if(ascii <= 90 && length > (90 - ascii)) { // 대문자 65~90
            return String.fromCharCode(64 + (length - (90 - ascii)));
        } else if(ascii <= 122 && length > (122 - ascii)) { // 소문자 97~122
            return String.fromCharCode(96 + (length - (122 - ascii)));
        } else return String.fromCharCode(ascii + length);
    });
}
console.log(solution("a B z Z", 1));