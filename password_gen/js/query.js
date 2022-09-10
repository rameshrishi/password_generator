var password = document.getElementById("password");
function genPassword(){
    var char = "abcdefghijklmnopqrstuvwxyz";
    var nums = "1234567890";
    var symbol = "~!@#$%^&*()";
    var genpass = char+nums+symbol;
    const password_length = 10;
    var password = "";
    for(var i = 0;i <= password_length; i++){
        var randompassword = Math.floor(Math.random()*(genpass.length));
        password += genpass.substring(randompassword,randompassword+1);
    }
    document.getElementById("password").value = password;
}
function captalization(){
    var capital = document.getElementById("cap");
    var pass_cap = genPassword.toUpperCase();
    pass_cap.concole.log();
}
function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");  
  }