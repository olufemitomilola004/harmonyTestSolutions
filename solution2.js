function ordinal_numbers(number) {
    var num = number % 10,
        num_ber = number % 100;
    if (num == 1 && num_ber != 11) {
        return number + "st";
    }
    if (num == 2 && num_ber != 12) {
        return number + "nd";
    }
    if (num == 3 && num_ber != 13) {
        return number + "rd";
    }
    return number + "th";
}


ordinal_numbers(1)
