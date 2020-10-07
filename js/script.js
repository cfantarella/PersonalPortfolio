

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":961},"pages":[{"id":"page-design","displayName":"Design","link":{"linkType":"LinkTypePage","href":"#!page-design"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-photo","displayName":"Photo","link":{"linkType":"LinkTypePage","href":"#!page-photo"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-code","displayName":"Code","link":{"linkType":"LinkTypePage","href":"#!page-code"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true}]}

        $(function () {
            $('.go-down').click(function () {
                $('html,body').animate({scrollTop: $('#after-hero').offset().top}, 500);
            });
        });
    