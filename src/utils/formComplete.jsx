export function isFormComplete(touched, errors, expectedFieldCount){
    const allFieldFilled = Object.keys(touched).length === expectedFieldCount
    const noErrors = Object.keys(errors).length === 0

    return allFieldFilled && noErrors
}
