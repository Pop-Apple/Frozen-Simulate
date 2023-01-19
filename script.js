function NotFoundError() {

    //let LoginButton = document.getElementById('Login')

    let UserNameText = document.getElementById('UserName')
    let PasswordText = document.getElementById('Password')

    if(UserNameText.value == 'Sakamochan' && PasswordText.value == '15')
    {
        //URL
        var browse = 'https://pop-apple.github.io/Frozen-Simulate/Freeze/'
        window.location.href = browse
    }
    else
    {
        var Message = "不明なアドレスです。\n\n再度入力情報を確認して下さい。\n\nDevelop by Sakamochan"
        alert(Message)

        //Reset
        UserNameText.value = null
        PasswordText.value = null
    }
}