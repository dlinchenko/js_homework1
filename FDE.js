var comp = function (a, b) {
    if (a===b){
        return 1;
    }
    else {
        return -1;
    }
};


console.log(comp("abc", "abc"));
console.log(comp("abC", "abc"));