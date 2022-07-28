function checkPalindrome(text) {    
    var l = text.length;
    for (var i = 0; i < l / 2; i++) {
        if (text.charAt(i) !== text.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

if (checkPalindrome("kasurrusak")) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is NOT a palindrome");
}