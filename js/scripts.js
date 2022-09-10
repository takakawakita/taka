/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
//
// 送信ボタンクリックされたら
$ ('#submitButton'). on ('click', function (e) {
  e.preventDefault (); //画面が更新されないように

// Ajax処理
$.ajax ({
  type: 'post',
  url: 'send-mail.php',
  datatype: 'json',
  data: {
     name: $ ('. js-get-val-name'). val (),   // 名前
     email: $ ('. js-get-val-email'). val (),  // メールアドレス
     comment: $ ('. js-get-val-comment'). val ()  // 用件
  }
}).done(function (data) {  // ajax通信が成功したら
     if (data.result) {
       // メール「送信」に成功した時の処理
       // 画面にメッセージを表示、画面をリロードなど。

      } else {
        //メール送信に「失敗」した時の処理
        // 画面にメッセージを表示など
       }
   });
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
