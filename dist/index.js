function perm(str) {
    return subString(str.split('')).join(',');
}
function subString(charArray) {
    if (charArray.length <= 1) {
        return charArray;
    }
    const currChat = charArray[0];
    const previousSubString = subString(charArray.splice(1));
    const currenSubString = previousSubString.map((word) => word = currChat + word);
    return [currChat, ...previousSubString, ...currenSubString];
}
console.log(perm('abcde'));
//# sourceMappingURL=index.js.map