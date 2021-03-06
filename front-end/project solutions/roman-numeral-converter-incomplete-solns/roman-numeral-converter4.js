
function convertToRoman(num) {
    let numAsString = num.toString();
    let length = numAsString.length;
    console.log(`length: ${length}`);
    let romanString;
    if (length >= 1) {
        let onesPlaceSubstring = convertDigit(numAsString, "ones");
        romanString = onesPlaceSubstring;
    }
    if (length >= 2) {
        tensPlaceArabic = numAsString[0];
        let tensPlaceSubstring = convertDigit(tensPlaceArabic, "tens")
        onesPlaceArabic = numAsString[1];
        let onesPlaceSubstring = convertDigit(onesPlaceArabic, "ones");
        romanString = tensPlaceSubstring + romanString;
    }
    if (length >= 3) {
        hundredsPlaceArabic = numAsString[0];
        let hundredsPlaceSubstring = convertDigit(hundredsPlaceArabic, "hundreds")
        tensPlaceArabic = numAsString[1];
        let tensPlaceSubstring = convertDigit(tensPlaceArabic, "tens")
        onesPlaceArabic = numAsString[2];
        let onesPlaceSubstring = convertDigit(onesPlaceArabic, "ones");
        romanString = hundredsPlaceSubstring + tensPlaceSubstring + onesPlaceSubstring;
    }
    if (length >= 4) {
        thousandsPlaceArabic = numAsString[0];
        let thousandsPlaceSubstring = convertDigit(thousandsPlaceArabic, "thousands")
        hundredsPlaceArabic = numAsString[1];
        let hundredsPlaceSubstring = convertDigit(hundredsPlaceArabic, "hundreds")
        tensPlaceArabic = numAsString[2];
        let tensPlaceSubstring = convertDigit(tensPlaceArabic, "tens")
        onesPlaceArabic = numAsString[3];
        let onesPlaceSubstring = convertDigit(onesPlaceArabic, "ones");
        romanString = thousandsPlaceSubstring + hundredsPlaceSubstring + tensPlaceSubstring + onesPlaceSubstring;
    }
    return romanString;
}

function convertDigit(numAsString, place) {
    let numeral;
    if (numAsString === "0") {
        return "";
    }
    if (place === "ones") {
        const onesConversion = {
            "1": "I",
            "2": "II",
            "3": "III",
            "4": "IV",
            "5": "V",
            "6": "VI",
            "7": "VII",
            "8": "VIII",
            "9": "IX"
        };
        numeral = onesConversion[numAsString];
    } else if (place === "tens") {
        const tensConversion = {
            "1": "X",
            "2": "XX",
            "3": "XXX",
            "4": "XL",
            "5": "L",
            "6": "LX",
            "7": "LXX",
            "8": "LXXX",
            "9": "XC"
        }
        numeral = tensConversion[numAsString]
    } else if (place === "hundreds") {
        const hundredsConversion = {
            "1": "C",
            "2": "CC",
            "3": "CCC",
            "4": "CD",
            "5": "D",
            "6": "DC",
            "7": "DCC",
            "8": "DCCC",
            "9": "CM"
        }
        numeral = hundredsConversion[numAsString]
    } else if (place === "thousands") {
        const thousandsConversion = {
            "1": "M",
            "2": "MM",
            "3": "MMM",
        }
        numeral = thousandsConversion[numAsString]
    }
    return numeral;
}

// console.log(convertToRoman(4));
// console.log(convertToRoman(36));
// console.log(convertToRoman(40));
// console.log(convertToRoman(400));
console.log(convertToRoman(3999));

   // tell it what to do when it sees a 9
   // tell it what to do when it sees a 4

//    handle zeros in any given place