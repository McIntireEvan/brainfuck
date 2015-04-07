function interpret(code) {
    var data = [];
    var pointer = 0;

    for (var i = 0; i < code.length; i++) {
        data[i] = 0;
    }

    for (var i = 0; i < code.length; i++) {
        var l = 0;
        switch (code.charAt(i)) {
            case '>':
                pointer++;
                break;
            case '<':
                if (pointer > 0) {
                    pointer--;
                }
                break;
            case '+':
                data[pointer]++;
                break;
            case '-':
                data[pointer]--;
                break;
            //TODO: Write an output buffer and an input buffer
            case '.':
                console.log(String.fromCharCode(data[pointer]))
                break;
            case ',':
                data[pointer] = prompt().charCodeAt(0);
                break;
            case '[':
                if (data[pointer] == 0) {
                    i++;
                    while (code.charAt(i) != ']' || l > 0) {
                        if (code.charAt(i) == '[') l++;
                        if (code.charAt(i) == ']') l--;
                        i++;
                    }
                }
                break;
            case ']':
                if (data[pointer] != 0) {
                    i--;
                    while (code.charAt(i) != '[' || l > 0) {
                        if (code.charAt(i) == ']') l++;
                        if (code.charAt(i) == '[') l--;
                        i--;
                    }
                    i--;
                }
                break;
        }
    } 
}