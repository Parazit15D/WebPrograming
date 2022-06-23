function filtr() {
    var filt = "", temp = "";
    filt = document.getElementById("input_string").value;

    var i = 0;
    while (i < filt.length) {
        temp = filt[i];
        for (var k = i; k <= filt.length; k++) {
            if (temp != filt[k]) {
                document.getElementById("show_result").innerHTML += " " + temp + (k - i).toString();
                i = k;
                break;
            }
        }
    }
}