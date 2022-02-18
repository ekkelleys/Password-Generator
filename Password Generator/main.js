


let retValEL = document.getElementById('btn-1')
    
//found this really similar solution, although it doesn't use an array, it uses charAt() method to target the values in the charset string.

function generatePassword() {
    let length = 12, // set how long the password length should be
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789£$&()*+[]@#^-_!?" //character index
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) { // loop through the character index
        retVal += charset.charAt(Math.floor(Math.random() * n)); // Math floor and Math Random
    }
    document.querySelector('#btn-1').innerHTML = retVal // had to use querySelector instead of getElementByID

    console.log(retVal)
    return retVal; // our randomized password
    
}

function generatePassword2(){
    let length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789£$&()*+[]@#^-_!?"
        retVal = "";
    for(let i = 0, n = charset.length; i < length; ++i){
        retVal += charset.charAt(Math.floor(Math.random()* n));

    }
    document.querySelector ('#btn-2').innerHTML = retVal
    return retVal;
}
function generatePassword3(){
    let length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789£$&()*+[]@#^-_!?"
        retVal = "";
    for(let i = 0, n = charset.length; i < length; ++i){
        retVal += charset.charAt(Math.floor(Math.random()* n));

    }
    document.querySelector ('#btn-3').innerHTML = retVal
    return retVal;
}
function generatePassword4(){
    let length = 12,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789£$&()*+[]@#^-_!?"
        retVal = "";
    for(let i = 0, n = charset.length; i < length; ++i){
        retVal += charset.charAt(Math.floor(Math.random()* n));

    }
    document.querySelector ('#btn-4').innerHTML = retVal
    return retVal;
}

// This was a bit beyond me so had to do some research on how to copy a value from a button to the clipboard. Bassically what I learned about this project is the fact that,
// since I used buttons to store the values, I made this project more complicated then needed.

function copyString () {
    let str = document.querySelector("#btn-1").innerText;
    // Create new element
    let el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
    // Alert that the Value has been Copied
    alert("Value Coppied to Clipboard")
    console.log(el);
 }
function copyString2 () {
    let str = document.querySelector("#btn-2").innerText;
    
    let el = document.createElement('textarea');
    
    el.value = str;
    
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    el.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(el);
    alert("Value Coppied to Clipboard")
    console.log(el);
 }
function copyString3 () {
    let str = document.querySelector("#btn-3").innerText;
    
    let el = document.createElement('textarea');
    
    el.value = str;
    
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    el.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(el);
    alert("Value Coppied to Clipboard")
    console.log(el);
 }
function copyString4 () {
    let str = document.querySelector("#btn-4").innerText;
    
    let el = document.createElement('textarea');

    el.value = str;

    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Value Coppied to Clipboard")
    console.log(el);
 }
// I think, actually I KNOW, that there is a better way to do this, because i am using the same code over and over (which I should not do..). I just can't figure it out at the minute.
// If i ever come back to this, I would need to figure out a way to streamline the password funciton and the copy functions; so They targets 'btn-1','btn-2','btn-3','btn-4' automatically
// Maybe i have learned that already? but can't think of a way.

//Also I think it is important to keep my wrong answer down here.

//let arrayCharacters = ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
// let arrayNum = [0,1,2,3,4,5,6,7,8,9]
// let arraySymb = ["£","$","&","(",")","*","+","[","]","@","#","^","-","_","!","?"]
//76 items in the array
// function startPass() {
//   for (let i = 0; i < arrayCharacters.length; i++) {
    // let randomPassword = Math.floor(Math.random(passwordEl[i]) * arrayCharacters.length) + 1;
    // return arrayCharacters[randomPassword];
    //This isn't working but it's my best guess... need to fix...
    
//}


