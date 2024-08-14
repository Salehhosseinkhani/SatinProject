<!DOCTYPE html>
<html lang="fa" dir="rtl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>کالای خواب ساتین</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="{{ asset('css/font.css') }}" rel="stylesheet">
        
        <!-- Styles -->
        <link href="{{ asset('css/project.css') }}" rel="stylesheet">

    </head>
    <body class="antialiased">
    <section class="head-site-web-login">
        <div class="in-head">
            <div class="logo-image-head">
                <a href="#" class="image-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                </a>
                <a href="./project.html" class="name-logo">کالا خواب ساتین</a>              
            </div>
            <div class="search_box">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-search">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>                  
                    <input type="search" class="input-search-box">
            </div>
            <div class="login-basket-head">
                <div class="login">
                    <a href="#" class="login-image-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                          </svg>
                    </a>                      
                    <!-- <a href="/home" class="name-login">ورود / ثبت نام</a> -->
                    @if(Route::has('login'))
                        <a href="" class="name-login">
                            @auth
                                <a href="{{ url('/home') }}" class="home-login-up">خانه</a>
                            @else
                                <a href="{{ route('login') }}" class="home-login-up">ورود/ثبت نام</a>
                            @endauth
                        </a>
                    @endif
                </div>
                <div class="basket">
                    <a href="#basket" class="basket-image-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="section-box-menu">
        <div class="box-menu">
            <div class="menu">
                <a href="./project.html" class="home-menu">
                    <div class="image-home-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>                          
                    </div>
                    <span class="name-span-menu-home">خانه</span>
                </a>
                <div class="test-product-menu">
                    <a href="#section-counterpene-shop" class="home-menu-one">
                        <span class="name-span-menu-one">سرویس رو تختی</span>
                    </a>
                    <a href="" class="image-menu-click" id="img-menu-click">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-menu-down">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        <div class="list-menu-div" id="list-div-menu">
                                <ul class="ul-list-menu">
                                    <li class="item-list-menu">روتختی خوب</li>
                                    <li class="item-list-menu">روتختی بد</li>
                                    <li class="item-list-menu">روتختی متوسط</li>
                                </ul>
                        </div>
                    </a>
                </div>
                <a href="" class="home-menu-one">
                    <span class="name-span-menu-two">سرویس کاوری</span>
                </a>
                <a href="" class="home-menu-one">
                    <span class="name-span-menu-three">رو تختی سه بعدی</span>
                </a>
                <a href="#mattress-id" class="home-menu-one">
                    <span class="name-span-menu-fuor">تشک</span>
                </a>
                <a href="" class="home-menu-one">
                    <span class="name-span-menu-five">لحاف</span>
                </a>
                <a href="#pillow-id" class="home-menu-one">
                    <span class="name-span-menu-six">بالش</span>
                </a>
                <a href="" class="home-menu-one">
                    <span class="name-span-menu-seven">پارچه</span>
                </a>
                <a href="" class="home-menu-one">
                    <span class="name-span-menu-eight">حوله</span>
                </a>

            </div>
            <div class="call-menu">
                <strong class="call-number-strong">28426233</strong>
                <span class="call-number-code">-021</span>
                <div class="call-image">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                </div>
            </div>
        </div>
    </section>
    <section class="image-section">
        <div class="image-div">
            <img src="./image/جشنواره بهاره.jpg" alt="" class="image-sell-product">
        </div>
    </section>
    <section class="section-product-image">
        <div class="box-product-image">
            <div class="box-product-one">
                <a href="#" class="product-one">
                    <img src="../project mahmood/image/روتختی-لحاف-دار-چیداری.webp" alt="" class="image-one">
                </a>
            </div>
            <div class="box-product two">
                <a href="#" class="product-two">
                    <img src="./image/روتختی-کاوری-و-روتشکی.webp" alt="" class="image-two">
                </a>
            </div>
            <div class="box-product-three">
                <a href="#" class="product-three">
                    <img src="./image/لحاف-زمستانه-و-چهارفصل.webp" alt="" class="image-three">
                </a>
            </div>
            <div class="box-product-fuor">
                <a href="#" class="product-fuor">
                    <img src="./image/بالش-طبی-و-الیاف.webp" alt="" class="image-fuor">
                </a>
            </div>
            <div class="box-product-five">
                <a href="#" class="product-five">
                    <img src="./image/تشک-طبی.webp" alt="" class="image-five">
                </a>
            </div>
        </div>
    </section>
    <section class="section-choose-product">
        <div class="div-choose-product">
            <div class="titel-sujestion">
                <div class="new-title-span">
                    <div class="svg-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                          </svg> 
                    </div>
                    <span class="title-name">پیشنهادات</span>
                    <span class="title-name-two">شگفت انگیز</span>
                </div>
            </div>
            <div class="box-choose">
            </div>
        </div>
    </section>
    <section class="section-Advertising-product">
        <div class="Advertising-product">
            <div class="product-Advertising-one">
                <img src="./image/بنر-روتختی-کاوری1 (1).jpg" alt="" class="image-Advertising-product">
            </div>
            <div class="product-Advertising-two">
                <img src="./image/بنر-روتختی.jpg" alt="" class="image-Advertising-product">
            </div>
        </div>
    </section>
    <section class="section-product-shop">
        <div class="div-product-shop">
            <a href="" class="a-shop">
            <div class="product-shop-one">
                    <strong class="shop">بالش طبی</strong>
            </div>
            </a>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">روتختی طرحدار</strong>
                </a>
            </div>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">پارچه ملحفه ای</strong>
                </a>
            </div>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">روتختی طرح دار</strong>
                </a>
            </div>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">روبالشتی</strong>
                </a>
            </div>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">تشک سنتی</strong>
                </a>
            </div>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">ملحفه</strong>
                </a>
            </div>
            <div class="product-shop-one">
                <a href="#" class="a-shop">
                    <strong class="shop">لحاف</strong>
                </a>
            </div>
        </div>
    </section>
    <section class="section-pillow-shop" id="pillow-id">
        <div class="div-pillow-shop-title">
                <i class="svg-pillow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-pillow">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>   
                </i>
                <span class="title-pillow">بالشت</span>
            <div class="title-point"></div>
        </div>
        <div class="shop-pillow-product-choose">
        </div>
        
    </section>
    <section class="section-counterpene-shop" id="section-counterpene-shop">
        <div class="div-pillow-shop-title">
            <i class="svg-pillow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-pillow">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>   
            </i>
            <span class="title-pillow">روتختی</span>
            <div class="title-point"></div>
        </div>
        <div class="shop-counterpene-product-choose">
        </div>
        
    </section>
    <section class="section-mattress-shop" id="mattress-id">
        <div class="div-pillow-shop-title">
            <i class="svg-pillow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-pillow">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>   
            </i>
            <span class="title-pillow">تشک</span>
            <div class="title-point"></div>
        </div>
        <div class="shop-mattress-product-choose">
        </div>
    </section>
    <section class="section-buy-pay">
        <div class="div-buy-pay">
            <div class="mony-picture">
                <a href="./gallery.html" class="img-picture">
                    <img src="./image/گالری-تصاویر.jpg" alt="" class="image-picture">
                </a>
            </div>
            <div class="mony-pay">
                <a href="./sales.html" class="img-picture">
                    <img src="./image/خرید-اقساطی.jpg" alt="" class="image-picture">
                </a>
            </div>
            <div class="mony-buy">
                <a href="#" class="img-picture">
                    <img src="./image/ثبت-گارانتی.jpg" alt="" class="image-picture">
                </a>
            </div>
        </div>
    </section>
    <section class="section-basket-box" id="basket">
        <div class="div-section-basket-box">
            <h2 class="title-basket-box">سبد خرید</h2>
            <div class="title-menu-basket-box">
                <div class="name-product">
                    <span class="span-name-product">نام محصولات</span>
                </div>
                <div class="name-product">
                    <span class="span-name-product">قیمت</span>
                </div>
                <div class="name-product">
                    <span class="span-name-product">تعداد</span>
                </div>
                <!-- <div class="name-product">
                    <span class="span-name-product">مجموع</span>
                </div> -->
            </div>
            <div class="div-product">
            </div>
            <div class="som-count-all">
                <div class="div-som-count-price">
                    <span class="price-som-all">0</span>
                    <strong class="name-price-som-all">تومان</strong>
                </div>
                <div class="btn-som">
                    <button class="btn-pay">پرداخت</button>
                </div>
            </div>
        </div>
    </section>
    <section class="section-footer">
        <div class="div-footer">
            <h1 class="h1-title-footer">خرید سرویس ملحفه ، خرید روتختی ، خرید بالش ، خرید تشک مهمان</h1>
            <div class="span-title-footer">
                <span class="title-span-footer">ساتین تولید کننده و فروشنده انواع کالای خواب با کیفیت ایرانی</span>
            </div>
            <div class="point-title-footer">
                <span class="point-footer">....................................................................................................................................................................................................................................</span>
            </div>
            <div class="footer-about-web">
                <p class="footer-about-p"> ساتین به عنوان کارآفرین حامی زنان سرپرست خانواده فعالیت خودش رو از سال 1399 در زمینه تولید کالای خواب و فروش اینترنتی شروع کرد . و با تلاش و پشتکار تونست برای تعداد زیادی از بانوان سرپرست خانواده کار ایجاد کنه. چیداری با تامین مواد اولیه و آموزش حرفه ای به بانوانی که دارای شرایط خاص پذیرش در گروه چیداری بودن ، محصولات مختلفی رو در زمینه کالای خواب تولید می کنه و با توجه به استقبال خوبی که از طرف شما عزیزان شد مصمم شدیم برای ادامه فعالیت و تولید متنوع تر و باکیفیت تر کالای خواب ، با ایجاد یک برند معتبر ایرانی . در حال حاضر محصولات چیداری شامل انواع حوله تن پوش ، حوله زنانه، حوله مردانه انواع بالش ها، ملحفه ها ، روتختی ها ، تشک ها و سایر ملزومات خواب هست . شما می توانید کلیه محصولات موجود در سایت چیداری رو در بخش فروش کلی کالای خواب به صورت عمده خریداری کنید. ساتین با دقت در انتخاب پارچه و مواد اولیه با کیفیت ، به دنبال تولید محصولاتیه که شایسته مصرف کننده خوب ایرانی باشه.</p>
                <img src="./image/با ساتین.jpg" alt="" class="img-footer-about-web">
            </div>
        </div>
    </section>
    <setion class="section-footer-web">
        <div class="div-footer-web">
            <div class="about-buy">
                <li class="title-buy-list">راهنمای خرید</li>
                <ul class="buy-about-list">
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">تماس با ما</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">رویه های ارسال سفارش</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">رویه های بازگشت کالا</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">شیوه های پرداخت</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">قوانین ومقررات</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">سوالات متداول</a>
                    </li>
                </ul>
            </div>
            <div class="customer-servises">
                <li class="title-buy-list">خدمات مشتریان</li>
                <ul class="buy-about-list">
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">درباره ما</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">ثبت گارانتی محصول</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">فروش عمده کالا</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">فروش اقساطی</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">فروش سازمانی</a>
                    </li>
                    <li class="buy-to-us">
                        <a href="#" class="a-buy-to-us">بلاگ</a>
                    </li>
                </ul>
            </div>
            <div class="about-site">
                <h5 class="title-about-site">منتظر صدای گرمتون هستیم</h5>
                <div class="location-site">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="location-svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>                          
                    <span class="location-name-site">مرکزی :هوانیروز غدیر 1 بلوار شقایق </span>
                </div>
                <div class="call-menu-about">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="call-svg-about">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <strong class="call-number-strong">28426233</strong>
                    <span class="call-number-code">021</span>
                    <div class="call-image">
                    </div>
                </div>
                <div class="number-email-call">پشتیبانی :09132430865</div>
            </div>
        </div>
    </setion>
    <footer class="footer-menu">
        <p class="footer-text">کلیه حقوق مادی و معنوی برای این سایت محفوظ می باشد و هرگونه کپی برداری مورد پیگیرد قرار خواهد گرفت 
        </p>
    </footer>
    <script src="{{ asset('js/project.js') }}"></script>
    </body>
</html>
