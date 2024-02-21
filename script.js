//1 Display a number on the text field
function displayNumber(num){
    result.value+=num
}
//2 clear the text field
function clearText(){
    result.value=''//it will assign an empty value to the text field
}
//3 evaluate the expression
function evaluateExpression(){
    result.value=eval(result.value)
}
//4 remove last character from the text field
function removeLastCharacter(){
    result.value=result.value.slice(0,-1)
}