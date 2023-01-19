function NotFoundError() {

    //let LoginButton = document.getElementById('Login')

    let UserNameText = document.getElementById('UserName')
    let PasswordText = document.getElementById('Password')

    if(UserNameText.value == 'Sakamochan' && PasswordText.value == '15')
    {
        //URL
        var browse = 'https://github.com/Pop-Apple'
        window.location.href = browse
    }
    else
    {
        var Message = "| 不明なアドレスです。再度入力情報を確認して下さい。 |"
        alert(Message)

        //Reset
        UserNameText.value = null
        PasswordText.value = null
    }
}