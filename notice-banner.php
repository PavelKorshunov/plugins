<style>
    .notice-banner {
        display: none;
        position: fixed;
        right: 0;
        top: 25%;
        z-index: 5;
        max-width: 250px;
        background-color: #839294;
        border-radius: 4px 0 0 4px;
        box-shadow: -1px 3px 12px #5d5d5d;
    }
    .notice-banner__header {
        padding: 15px 20px;
        text-align: center;
        border-bottom: 1px dashed #fff;
    }
    .notice-banner__body {
        padding: 15px 10px;
        text-align: center;
    }
    .notice-banner__close {
        top: -6px;
        color: #000;
        left: -24px;
        cursor: pointer;
        font-size: 1.6em;
        position: absolute;
    }
    .notice-banner__title,
    .notice-banner__text {
        color: #fff;
    }
    .notice-banner__title {
        font-size: 1em;
    }
    .notice-banner__text {
        margin: 0;
        font-size: 12px;
    }
    .notice-banner__text-title {
        font-size: 16px;
    }
    .notice-banner__text-info{
        text-align: left;
        display: block;
    }
    .notice-banner__text-bold {
        font-weight: 500;
    }
    .notice-banner__more {
        color: #fff!important;
        font-size: 0.9em;
        margin: 5px 0;
        display: block;
    }
    .notice-banner__link-wrap {
        text-align: center;
    }
    .notice-banner__link {
        display: inline-block;
        padding: 5px 20px;
        color: #fff!important;
        text-decoration: none;
        font-size: 0.9em;
        margin-top: 5px;
        background-color: #ff7901;
        box-shadow: 0 1px 4px #3c3535;
    }
    .notice-banner__link:hover {
        color: #fff;
        text-decoration: none;
    }
    .notice-close {
        right: -63px;
        cursor: pointer;
        transform: rotate(270deg);
        border-radius: 4px 4px 0 0;
    }
    .notice-close .notice-banner__header {
        border-bottom: none;
    }
    .notice-close .notice-banner__body,
    .notice-close .notice-banner__close {
        display: none;
    }
    @media (min-width: 768px) {
        .notice-banner {
            top: 35%;
        }
    }
</style>
<script>
    (function(){
        var noticeBanner = document.querySelector('.notice-banner');
        var date = new Date;
        date.setDate(date.getDate() + 1);

        setTimeout(function(){
            noticeBanner.style.display = "block";
        }, 500);

        function cookieSearch(cookie)
        {
            if(document.cookie.indexOf(cookie) > -1)
            {
                return true;
            }
            return false;
        }

        noticeBanner.addEventListener('click', function(event){
            if(event.target.className === "notice-banner__close")
            {
               noticeBanner.classList.add("notice-close");
               if(cookieSearch("notice_banner") === false)
               {
                   document.cookie = 'notice_banner=true; path=/; expires=' + date.toUTCString();
               }
            }
            else if(noticeBanner.classList.contains("notice-close"))
            {
               noticeBanner.classList.remove("notice-close");
            }
        });
        if(cookieSearch("notice_banner"))
        {
            noticeBanner.classList.add("notice-close");
        }
    })();
</script>
<div class="notice-banner">
    <div class="notice-banner__header">
        <span class="notice-banner__title">Заказать</span>
        <span class="notice-banner__close">&times;</span>
    </div>
    <div class="notice-banner__body">
        <p class="notice-banner__text">
            <span class="notice-banner__text-title">Закажи <b class="notice-banner__text-bold">БЕСПЛАТНО!</b></span><br>
            <span class="notice-banner__text-info">Lorem Ipsum является стандартной <b class="notice-banner__text-bold">рыбой</b>.<br>
            для текстов на латинице с начала <b class="notice-banner__text-bold">XVI века</b><br>
                В то время некий безымянный печатник создал большую коллекцию размеров <b class="notice-banner__text-bold">и форм шрифтов</b></span>
        </p>
        <a class="notice-banner__more" href="/articles/1620/">Правила</a>
        <div class="notice-banner__link-wrap">
            <a class="notice-banner__link" href="/catalog/obraztsy/">Купить</a>
        </div>
    </div>
</div>