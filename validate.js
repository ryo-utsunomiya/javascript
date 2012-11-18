function validateRegEx(regex, inputStr, helpText, helpMessage) {
    if (!regex.test(inputStr)) {
        if (helpText != null)
            helpText.innerHTML = helpMessage;
        return false;
    }
    else {
        if (helpText != null)
            helpText.innerHTML = "";
        return true;
    }
}

function validateDate(inputField, helpText) {
    if (!validateNonEmpty(inputField, helpText))
        return false;
     return validateRegEx(/^\d{2}\/\d{2}\/(\d{2}|\d{4})$/, inputField.value, helpText, "日付を入力してください");
}

function validatePhone(inputField, helpText) {
    if (!validateNonEmpty(inputField, helpText))
        return false;
        
    return validateRegEx(/^\d{3}-\d{3}-\d{4}/, inputField.value, helpText, "電話番号を入力してください");
}

function validateEmail(inputField, helpText) {
    if (!validateNonEmpty(inputField, helpText))
        return false;
    
    return validateRegEx(/^[\w\.-_\+]+@[\w-]\.\w{2,4}$/, inputField.value, halpText, "Eメールアドレスの形式が不正です");
}
