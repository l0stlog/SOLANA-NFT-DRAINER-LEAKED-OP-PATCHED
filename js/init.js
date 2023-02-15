/*
 * Copyright (c) 2022 Frenify
 * Author: Frenify
 * This file is made for CURRENT TEMPLATE
 */



// filter array
var ChimpsFilterArray = [];
let remaining = 300;

(function($) {
    "use strict";


    var FrenifyChimps = {

        init: function() {
            FrenifyChimps.animatedText();
            FrenifyChimps.imgToSVG();
            FrenifyChimps.BgImg();


            FrenifyChimps.activeNavigation();
            FrenifyChimps.headerTrigger();
            FrenifyChimps.menuFixer();
            FrenifyChimps.timeLine();
            FrenifyChimps.movingBlog();
            FrenifyChimps.navFixer();
            FrenifyChimps.anchor();
            FrenifyChimps.movingTextForNav();
            FrenifyChimps.filterItems();
            FrenifyChimps.applyFilter();
            FrenifyChimps.magnific();
            FrenifyChimps.progressTotop();
            FrenifyChimps.productModal();
            FrenifyChimps.contactForm();
            FrenifyChimps.moreCategories();
            FrenifyChimps.totop();
            FrenifyChimps.vegasSlider();
            FrenifyChimps.heroJarallaxSlider();
            FrenifyChimps.subscribe();
            FrenifyChimps.qnt();
            FrenifyChimps.countdown();
            FrenifyChimps.remainingDown();
        },

        remainingDown: function() {
            let timeArr = [100, 100, 100, 100, 100, 100, 200, 300, 300, 600];
            let timeOut = timeArr[Math.floor(Math.random() * timeArr.length)];
            setTimeout(() => {
                this.downRemaining(this.getRandNum());
                this.remainingDown();
            }, timeOut);
        },

        getRandNum: function() {
            return 1 + Math.floor(Math.random() * 5);
        },

        downRemaining: function(i) {
            remaining -= i;
            if (remaining >= 0) $('#remaining-amount').html(remaining + 24/30');
        },

        countdown: function() {
            $('.Chimps_fn_countdown').each(function() {
                var e = $(this),
                    t = e.data('type');
                if (t === 'due_date') {
                    var countDownDate = new Date(e.data('date')).getTime();
                } else if (t === 'ever') {
                    var days = parseInt(e.data('days')) * 24 * 3600,
                        hours = parseInt(e.data('hours')) * 3600,
                        minutes = parseInt(e.data('minutes')) * 60,
                        seconds = parseInt(e.data('seconds'));
                    var ever = days + hours + minutes + seconds;
                }
                var p = e.parent();
                if (e.hasClass('boxed')) {
                    e.after('<div class="Chimps_fn_boxed_countdown"><ul><li class="days"><div class="item"><h3></h3><span>Days</span></div></li><li class="hours"><div class="item"><h3></h3><span>Hours</span></div></li><li class="minutes"><div class="item"><h3></h3><span>Minutes</span></div></li><li class="seconds"><div class="item"><h3></h3><span>Seconds</span></div></li></ul></div>');
                    e.remove();
                }
                if (t === 'due_date') {
                    // Update the count down every 1 second
                    setInterval(function() {
                        // Get today's date and time
                        var now = new Date().getTime();

                        // Find the distance between now and the count down date
                        var distance = countDownDate - now;

                        // Time calculations for days, hours, minutes and seconds
                        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        if (e.hasClass('boxed')) {
                            days = ('0' + days).slice(-2);
                            hours = ('0' + hours).slice(-2);
                            minutes = ('0' + minutes).slice(-2);
                            seconds = ('0' + seconds).slice(-2);
                            p.find('.days h3').text(days);
                            p.find('.hours h3').text(hours);
                            p.find('.minutes h3').text(minutes);
                            p.find('.seconds h3').text(seconds);
                        } else {
                            var text = '';
                            if (days > 0) {
                                text += days + 'd: ';
                            }
                            text += hours + 'h: ' + minutes + 'm: ' + seconds + 's';
                            e.text(text);
                        }

                    }, 1000);
                } else if (t === 'ever') {
                    setInterval(function() {
                        days = Math.floor(ever / 86400);
                        hours = Math.floor((ever % 86400) / 3600);
                        minutes = Math.floor((ever % 3600) / 60);
                        seconds = Math.floor((ever % 60));

                        if (e.hasClass('boxed')) {
                            days = ('0' + days).slice(-2);
                            hours = ('0' + hours).slice(-2);
                            minutes = ('0' + minutes).slice(-2);
                            seconds = ('0' + seconds).slice(-2);
                            p.find('.days h3').text(days);
                            p.find('.hours h3').text(hours);
                            p.find('.minutes h3').text(minutes);
                            p.find('.seconds h3').text(seconds);
                        } else {
                            var text = '';
                            if (days > 0) {
                                text += days + 'd: ';
                            }
                            text += hours + 'h: ' + minutes + 'm: ' + seconds + 's';
                            e.text(text);
                        }
                        ever--;
                    }, 1000);
                }
            });
        },

        qnt: function() {
            $('.qnt .decrease').off().on('click', function() {
                var e = $(this),
                    s = e.closest('.qnt').find('.summ');
                var sVal = parseInt(s.text());
                if (sVal >= 2) {
                    sVal--;
                }
                s.text(sVal);
                return false;
            });
            $('.qnt .increase').off().on('click', function() {
                var e = $(this),
                    s = e.closest('.qnt').find('.summ');
                var sVal = parseInt(s.text());
                if (sVal <= 0) {
                    sVal++
                };
                s.text(sVal);
                return false;
            });
        },

        activeNavigation: function() {
            $('.nav_overlay,.Chimps_fn_nav').addClass('active');
        },

        subscribe: function() {
            $(".subscribe_form a").on('click', function() {
                var parent = $(this).closest('.subscribe_form');
                var email = parent.find('input').val();
                var echoM = parent.find(".returnmessage");
                var success = echoM.data('success');
                var message = echoM.data('message');
                echoM.empty(); //To empty previous error/success message.
                if (email === '') {
                    parent.find('.empty_notice').slideDown(500).delay(2000).slideUp(500);
                } else {
                    if (FrenifyChimps.validateEmail(email)) {
                        $.post("modal/subscribe.php", {
                            ajax_email: email,
                            ajax_message: message
                        }, function(data) {
                            echoM.append(data); //Append returned message to message paragraph
                            echoM.append("<span class='contact_success'>" + success + "</span>");
                            echoM.slideDown(500).delay(4000).slideUp(500);
                            parent.find('input').val('');
                        });
                    } else {
                        echoM.append("<span>" + echoM.data('invalid-email') + "</span>").slideDown(500).delay(4000).slideUp(500);
                    }
                }

                return false;
            });
        },


        validateEmail: function(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        },

        vegasSlider: function() {
            $('.Chimps_fn_hero .vegas-slide').each(function() {
                var element = $(this);
                var html = [];
                var items = element.find('input');
                items.each(function() {
                    html.push({
                        src: $(this).val()
                    });
                });
                element.vegas({
                    timer: false,
                    animation: ['kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
                    delay: 7000,
                    slides: html
                });
            });
        },

        heroJarallaxSlider: function() {
            // slider
            var section = $('.Chimps_fn_hero .swiper-container');
            section.each(function() {
                var element = $(this);
                var transform = 'Y';
                var direction = 'horizontal';
                var interleaveOffset = 0.5;
                if (direction === 'horizontal') {
                    transform = 'X';
                }
                // Main Slider
                var mainSliderOptions = {
                    loop: true,
                    speed: 1500,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    slidesPerView: 1,
                    direction: direction,
                    loopAdditionalSlides: 10,
                    watchSlidesProgress: true,
                    on: {
                        init: function() {
                            this.autoplay.stop();
                        },
                        imagesReady: function() {
                            this.autoplay.start();
                        },
                        progress: function() {
                            var swiper = this;
                            for (var i = 0; i < swiper.slides.length; i++) {
                                var slideProgress = swiper.slides[i].progress,
                                    innerOffset = swiper.width * interleaveOffset,
                                    innerTranslate = slideProgress * innerOffset;
                                $(swiper.slides[i]).find(".main_image").css({
                                    transform: "translate" + transform + "(" + innerTranslate + "px)"
                                });
                            }
                        },
                        touchStart: function() {
                            var swiper = this;
                            for (var i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = "";
                            }
                        },
                        setTransition: function(speed) {
                            var swiper = this;
                            for (var i = 0; i < swiper.slides.length; i++) {
                                swiper.slides[i].style.transition = speed + "ms";
                                swiper.slides[i].querySelector(".main_image").style.transition =
                                    speed + "ms";
                            }
                        }
                    }
                };
                new Swiper(element, mainSliderOptions);
            });
        },

        totop: function() {
            var minSpeed = 500;
            var maxSpeed = 1500;
            $(".Chimps_fn_totop").off().on('click', function(e) {
                e.preventDefault();
                var speed = ($(window).scrollTop() - $(window).height()) / 2;
                if (speed < minSpeed) {
                    speed = minSpeed;
                }
                if (speed > maxSpeed) {
                    speed = maxSpeed;
                }
                $("html, body").animate({
                    scrollTop: 0
                }, speed);
                return false;
            });
        },

        moreCategories: function() {
            $('.Chimps_fn_categories').each(function() {
                var element = $(this);
                if (!element.hasClass('ready')) {
                    element.addClass('ready');
                    var more = element.data('more'),
                        count = element.data('count'),
                        li = element.find('li'),
                        ul = element.find('ul'),
                        height = li.outerHeight(true, true),
                        pHeight = element.find('ul').outerHeight(true, true);
                    if (height * count < pHeight) {
                        element.append('<a href="#" class="more">' + more + ' (' + (li.length - count) + ')</a>');
                        ul.animate({
                            height: height * count + 'px'
                        });
                    }
                }
            });
            FrenifyChimps.showMore();
        },

        showMore: function() {
            $('.Chimps_fn_categories .more').off().on('click', function() {
                var element = $(this),
                    parent = element.closest('.Chimps_fn_categories'),
                    more = parent.data('more'),
                    less = parent.data('less'),
                    count = parent.data('count'),
                    li = parent.find('li'),
                    ul = parent.find('ul'),
                    height = li.outerHeight(true, true);
                if (!element.hasClass('clicked')) {
                    element.addClass('clicked');
                    ul.animate({
                        height: height * li.length + 'px'
                    });
                    element.text(less);
                } else {
                    element.removeClass('clicked');
                    ul.animate({
                        height: height * count + 'px'
                    });
                    element.text(more + ' (' + (li.length - count) + ')');
                }
                return false;
            });
        },

        contactForm: function() {
            $(".contact_form #send_message").on('click', function() {
                var name = $(".contact_form #name").val();
                var email = $(".contact_form #email").val();
                var subject = $(".contact_form #subject").val();
                var message = $(".contact_form #message").val();
                var success = $(".contact_form .returnmessage").data('success');

                $(".contact_form .returnmessage").empty(); //To empty previous error/success message.
                //checking for blank fields	
                if (name === '' || email === '' || message === '') {
                    $('.contact_form div.empty_notice').slideDown(500).delay(2000).slideUp(500);
                } else {
                    // Returns successful data submission message when the entered information is stored in database.
                    $.post("modal/contact.php", {
                        ajax_name: name,
                        ajax_email: email,
                        ajax_subject: subject,
                        ajax_message: message
                    }, function(data) {

                        $(".contact_form .returnmessage").append(data); //Append returned message to message paragraph


                        if ($(".contact_form .returnmessage span.contact_error").length) {
                            $(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
                        } else {
                            $(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
                            $(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
                        }

                        if (data === "") {
                            $("#contact_form")[0].reset(); //To reset form fields on success
                        }

                    });
                }
                return false;
            });
        },


        productModal: function() {
            var modal = $('.Chimps_fn_modal.product_modal');
            $('.Chimps_fn_drops .item a').off().on('click', function() {
                var element = $(this);
                var parent = element.closest('.item');
                var image = parent.data('modal-image');
                var title = parent.data('modal-title');
                var description = parent.data('modal-description');
                var openseaURL = parent.data('modal-opensea-url');
                var discordURL = parent.data('modal-discord-url');
                var included = parent.data('included');

                if (included === 'on') {
                    modal.find('.Chimps_fn_product_modal').html(parent.find('.hidden_info').html());
                } else {

                    // attach empty if not setted
                    if (!openseaURL) {
                        openseaURL = '';
                    }
                    if (!discordURL) {
                        discordURL = '';
                    }

                    // remove disable from modalbox's buttons
                    modal.find('.buttons a').removeClass('disable');

                    // change opensea URL or disable opensea button
                    if (openseaURL === '') {
                        modal.find('.opensea').addClass('disable');
                    } else {
                        modal.find('.opensea').attr('href', openseaURL);
                    }

                    // change discord URL or disable opensea button
                    if (discordURL === '') {
                        modal.find('.discord').addClass('disable');
                    } else {
                        modal.find('.discord').attr('href', discordURL);
                    }

                    modal.find('.img_item').html('<img src="' + image + '" />');
                    modal.find('.Chimps_fn_title .fn_title').text(title);
                    modal.find('.desc p').text(description);
                }



                modal.addClass('opened');
                return false;
            });

            modal.find('.modal_closer a').off().on('click', function() {
                modal.removeClass('opened');
                return false;
            });
        },

        progressTotop: function() {
            var winScroll = window.pageYOffset;
            var height = document.body.clientHeight;
            var scrolled = parseInt((winScroll / (height - window.innerHeight)) * 300);
            var totop = $('.Chimps_fn_totop');
            if (winScroll > 0) {
                totop.addClass('active');
            } else {
                totop.removeClass('active');
            }
            totop.find('.stroke-solid').css('stroke-dashoffset', 300 - scrolled);
        },


        magnific: function() {
            $('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
                $(this).magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true,
                    callbacks: {
                        open: function() {
                            $.magnificPopup.instance.close = function() {
                                // Call the original close method to close the popup
                                $.magnificPopup.proto.close.call(this);
                            };
                        }
                    }
                });
            });
        },

        isotopeCollection: function() {
            $('.grid').isotope({
                itemSelector: 'li', // .element-item
                layoutMode: 'fitRows'
            });
        },


        applyFilter: function() {

            // initialization isotope function to our items
            FrenifyChimps.isotopeCollection();

            // left filter on click function
            $('.Chimps_fn_filters .checkbox').off().on('click', function() {

                // our clicked filter
                var element = $(this),

                    // collection wrapper
                    parent = element.closest('.Chimps_fn_collection'),

                    // filter result box
                    resultBox = parent.find('.Chimps_fn_result_box'),

                    // detect selected filter ID
                    id = element.data('id'),

                    // get category name
                    category = element.data('category'),

                    // get filter name
                    filterName = element.find('.text').text(),

                    // filter counter wrapper
                    filterCount = resultBox.find('.filter_count span');

                // if clicked item has clicked first time
                if (!element.hasClass('selected')) {

                    // attach 'selected' class to our filter
                    element.addClass('selected');

                    // add 'clear all' button to our result box if there was no any filters early
                    if (resultBox.find('.result_item').length === 0) {
                        resultBox.append('<a href="#" class="clear_all">Clear All</a>');
                    }

                    // find our 'clear all' button and add our new filter before the button
                    resultBox.find('.clear_all').before('<div class="result_item" data-id="' + id + '"><a href="#" title="Remove Filter">' + category + ': ' + '<span>' + filterName + '</span>' + '<img src="svg/cancel.svg" alt="" class="fn__svg"></a></div>');

                    // change selected filter checkbox value into 'checked'
                    element.find('input[type="checkbox"]').prop('checked', 'checked');

                    // increase filter count and insert into our counter wrapper
                    filterCount.text(parseInt(filterCount.text()) + 1);

                    // add new filter id into our filters array in order to apply isotope filter for items next
                    ChimpsFilterArray.push(id);

                    // recall image to svg functions, because we have added new button where has an svg icon
                    FrenifyChimps.imgToSVG();

                    // recall remove filter function, because we have added new filter
                    FrenifyChimps.removeFilter();
                }
                // if clicked item has already clicked and clicked second time
                else {

                    // remove attached 'selected' class
                    element.removeClass('selected');

                    // remove this filter from result box
                    parent.find('.result_item[data-id="' + id + '"]').remove();

                    // remove 'clear all' button if removed filter was the only one (alone)
                    if (resultBox.find('.result_item').length === 0) {
                        resultBox.find('.clear_all').remove();
                    }

                    // change selected filter checkbox value into 'not checked'
                    element.find('input[type="checkbox"]').prop('checked', '');

                    // decrease filter count and insert into our counter wrapper
                    filterCount.text(parseInt(filterCount.text()) - 1);

                    // remove new filter ID from our filters array in order to apply isotope filter for items next
                    var index = ChimpsFilterArray.indexOf(id);
                    if (index !== -1) {
                        ChimpsFilterArray.splice(index, 1);
                    }
                }


                FrenifyChimps.recallGridAfterFiltering();

                return false;
            });

            // call remove filter function
            FrenifyChimps.removeFilter();
        },

        recallGridAfterFiltering: function(clear) {
            var $grid = $('.grid').isotope({
                itemSelector: 'li', // .element-item
                layoutMode: 'fitRows'
            });
            if (clear === 'clear') {
                $grid.isotope({
                    filter: '*'
                });
                ChimpsFilterArray = [];
                return false;
            }

            // selected filters
            var filters = '';

            // if there is no any selected filters
            if (ChimpsFilterArray.length === 0) {
                filters = '*';
            }
            // if there has one or more selected filters
            else {
                $.each(ChimpsFilterArray, function(index, value) {
                    filters += '.id' + value;
                });
            }
            // run isotope after filter has been clicked
            $grid.isotope({
                filter: filters
            });
        },

        removeFilter: function() {
            $('.Chimps_fn_result_box .result_item a').off().on('click', function() {
                var e = $(this),
                    parent = e.closest('.Chimps_fn_collection'),
                    resultItem = e.closest('.result_item'),
                    resultBox = parent.find('.Chimps_fn_result_box'),
                    id = resultItem.data('id'),
                    filterCount = resultBox.find('.filter_count span');
                resultItem.remove();
                parent.find('.Chimps_fn_filters .checkbox[data-id="' + id + '"]').removeClass('selected').find('input[type="checkbox"]').prop('checked', '');
                filterCount.text(parseInt(filterCount.text()) - 1);
                if (resultBox.find('.result_item').length === 0) {
                    resultBox.find('.clear_all').remove();
                }
                // remove new filter ID from our filters array in order to apply isotope filter for items next
                var index = ChimpsFilterArray.indexOf(id);
                if (index !== -1) {
                    ChimpsFilterArray.splice(index, 1);
                }
                FrenifyChimps.recallGridAfterFiltering();
                return false;
            });

            $('.Chimps_fn_result_box .clear_all').off().on('click', function() {
                var e = $(this),
                    parent = e.closest('.Chimps_fn_collection'),
                    filterBox = parent.find('.Chimps_fn_filters'),
                    resultBox = parent.find('.Chimps_fn_result_box'),
                    filterCount = resultBox.find('.filter_count span');
                filterCount.text(0);
                resultBox.find('.result_item').remove();
                e.remove();
                filterBox.find('.checkbox').removeClass('selected').find('input[type="checkbox"]').prop('checked', '');
                FrenifyChimps.recallGridAfterFiltering('clear');
                return false;
            });
        },

        filterItems: function() {
            $('.filter_item__header a').off().on('click', function() {
                $(this).closest('.filter_item').toggleClass('closed');
                return false;
            });
        },

        movingTextForNav: function() {
            var overlay = $('.nav_overlay');
            if (overlay.length) {
                if (!$('.Chimps_fn_moving_text').length) {
                    $('body').append('<div class="Chimps_fn_moving_text">Close</div>');
                }
                var movingBox = $('.Chimps_fn_moving_text');
                overlay.on('mouseenter', function(event) {
                    movingBox.addClass('active');
                    movingBox.css({
                        left: (event.clientX + 15) + 'px',
                        top: (event.clientY + 15) + 'px'
                    });
                }).on('mouseleave', function() {
                    movingBox.removeClass('active');
                }).on('mousemove', function(event) {
                    movingBox.css({
                        left: (event.clientX + 15) + 'px',
                        top: (event.clientY + 15) + 'px'
                    });
                });
            }
        },

        anchor: function() {
            $('.Chimps_fn_down').on('click', function() {
                var e = $(this),
                    href = e.attr('href');
                if (this.pathname === window.location.pathname || href.indexOf("#") !== -1) {
                    if ($(href).length) {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(href).offset().top
                        }, 600);
                        return false;
                    }
                }
            });
        },

        navFixer: function() {
            var footerHeight = $('.Chimps_fn_nav .nav_footer').outerHeight();
            $('.Chimps_fn_nav .nav_content').css({
                height: ($(window).height() - footerHeight) + 'px'
            });
        },

        movingBlog: function() {
            var blog = $('.Chimps_fn_moving_blog');
            if (blog.length) {
                if (!$('.Chimps_fn_moving_box').length) {
                    $('body').append('<div class="Chimps_fn_moving_box">');
                }
                var movingBox = $('.Chimps_fn_moving_box');
                var list = $('.Chimps_fn_moving_blog .item');
                list.on('mouseenter', function(event) {
                    var element = $(this);
                    if (!element.hasClass('active')) {
                        list.removeClass('active');
                        element.addClass('active');
                        movingBox.addClass('active');
                        var imgURL = element.find('.moving_img').attr('src');
                        movingBox.css({
                            backgroundImage: 'url(' + imgURL + ')'
                        });
                        movingBox.css({
                            left: (event.clientX + 15) + 'px',
                            top: (event.clientY + 15) + 'px'
                        });
                    }
                }).on('mouseleave', function() {
                    list.removeClass('active');
                    movingBox.removeClass('active');
                }).on('mousemove', function(event) {
                    movingBox.css({
                        left: (event.clientX + 15) + 'px',
                        top: (event.clientY + 15) + 'px'
                    });
                });
            }
        },

        timeLine: function() {
            var allContentItems = $('.Chimps_fn_timeline .timeline_item');
            var progressLine = $('.Chimps_fn_timeline .progress_line');
            var allProgressItems = $('.Chimps_fn_timeline .progress_line li');
            var activeProgressItem = $('.Chimps_fn_timeline .progress_line .active');
            var activeLine = $('.Chimps_fn_timeline .progress_line .active_line');
            var allProgressButtons = $('.Chimps_fn_timeline .progress_line a');
            var initialSpace = 110;
            var spaceBetweenItems = 230;

            FrenifyChimps.timelineClasses(allContentItems, allProgressItems, 'initial');

            $.each(allProgressItems, function(i, e) {
                $(e).find('a').css({
                    left: (initialSpace + (spaceBetweenItems * i)) + 'px'
                });
            });

            activeLine.css({
                width: (initialSpace + (activeProgressItem.index() * spaceBetweenItems) + activeProgressItem.find('a').width() / 2) + 'px'
            });
            progressLine.css({
                width: (initialSpace * 2 + (spaceBetweenItems * (allProgressItems.length - 1)) + allProgressItems.last().find('a').width() / 2) + 'px'
            });


            allProgressButtons.off().on('click', function() {
                var e = $(this);
                var p = e.parent();
                if (!p.hasClass('active')) {
                    var timeline = e.closest('.Chimps_fn_timeline');
                    var activeIndex = p.data('index');
                    FrenifyChimps.timelineClasses(allContentItems, allProgressItems, activeIndex);

                    allProgressItems.removeClass('active');
                    p.addClass('active');
                    activeLine.css({
                        width: (initialSpace + ((activeIndex - 1) * spaceBetweenItems) + e.width() / 2) + 'px'
                    });
                    allContentItems.removeClass('active');
                    timeline.find('.timeline_item[data-index="' + activeIndex + '"]').addClass('active');
                }
                return false;
            });

            var space = 0;
            var nextActive = true;
            var prevActive = true;
            var prevButton = $('.Chimps_fn_timeline .nav_prev');
            var nextButton = $('.Chimps_fn_timeline .nav_next');
            nextButton.off().on('click', function() {
                var e = $(this);
                if (window.matchMedia('(max-width: 768px)').matches) {
                    var timeline = e.closest('.Chimps_fn_timeline');
                    var progress = timeline.find('.progress_line_wrapper');
                    var p = progress.find('.active');
                    var activeIndex = (parseInt(p.data('index')) + 1) % progress.find('li').length;
                    if (activeIndex === 0) {
                        activeIndex = progress.find('li').length;
                    }
                    FrenifyChimps.timelineClasses(allContentItems, allProgressItems, activeIndex);
                    console.log(activeIndex);

                    allProgressItems.removeClass('active');
                    allContentItems.removeClass('active');
                    timeline.find('[data-index="' + activeIndex + '"]').addClass('active');
                    return false;
                }
                space += spaceBetweenItems * 2 * (-1);
                if ((space) < (progressLine.parent().width() - progressLine.width())) {
                    space = progressLine.parent().width() - progressLine.width();
                    nextActive = false;
                } else {
                    nextActive = true;
                }
                if (space < 0) {
                    prevActive = true;
                }
                if (!prevActive) {
                    prevButton.addClass('inactive');
                } else if (prevActive) {
                    prevButton.removeClass('inactive');
                }
                if (!nextActive) {
                    nextButton.addClass('inactive');
                } else if (nextActive) {
                    nextButton.removeClass('inactive');
                }
                progressLine.css({
                    transform: 'translateX(' + space + 'px)'
                });
                return false;
            });
            prevButton.off().on('click', function() {
                var e = $(this);
                if (window.matchMedia('(max-width: 768px)').matches) {
                    var timeline = e.closest('.Chimps_fn_timeline');
                    var progress = timeline.find('.progress_line_wrapper');
                    var p = progress.find('.active');
                    var activeIndex = (parseInt(p.data('index')) - 1) % progress.find('li').length;
                    if (activeIndex === 0) {
                        activeIndex = progress.find('li').length;
                    }
                    FrenifyChimps.timelineClasses(allContentItems, allProgressItems, activeIndex);
                    console.log(activeIndex);

                    allProgressItems.removeClass('active');
                    allContentItems.removeClass('active');
                    timeline.find('[data-index="' + activeIndex + '"]').addClass('active');
                    return false;
                }
                nextActive = true;
                nextButton.removeClass('inactive');
                space += spaceBetweenItems * 2;
                if (space > 0) {
                    space = 0;
                    prevActive = false;
                } else if (prevActive) {
                    prevActive = true;
                }
                if (!prevActive) {
                    prevButton.addClass('inactive');
                } else {
                    prevButton.removeClass('inactive');
                }
                progressLine.css({
                    transform: 'translateX(' + space + 'px)'
                });
                return false;
            });
        },

        timelineClasses: function(allContentItems, allProgressItems, activeIndex) {
            var isActive = false;
            var extraActiveIndex;
            $.each(allContentItems, function(i, e) {
                $(e).removeClass('previous next');
                if (activeIndex === 'initial') {
                    if ($(e).hasClass('active')) {
                        isActive = true;
                        return;
                    }
                } else {
                    if ($(e).data('index') === activeIndex) {
                        isActive = true;
                        return;
                    }
                }

                if (isActive) {
                    $(e).addClass('next');
                } else {
                    $(e).addClass('previous');
                }
            });
            isActive = false;
            if (activeIndex === 'initial') {
                extraActiveIndex = $('.Chimps_fn_timeline .progress_line .active').data('index');
            } else {
                extraActiveIndex = activeIndex;
            }
            $.each(allProgressItems, function(i, e) {
                $(e).removeClass('previous next').find('.circle').css({
                    filter: 'none'
                });
                if (activeIndex === 'initial') {
                    if ($(e).hasClass('active')) {
                        isActive = true;
                        return;
                    }
                } else {
                    if ($(e).data('index') === activeIndex) {
                        isActive = true;
                        return;
                    }
                }
                if (isActive) {
                    $(e).addClass('next');
                } else {
                    $(e).addClass('previous').find('.circle').css({
                        filter: 'brightness(' + (100 * (i + 1)) / extraActiveIndex + '%)'
                    });
                }
            });
        },

        menuFixer: function() {
            var menu = $('.Chimps_fn_header');
            var WinOffset = $(window).scrollTop();

            if (WinOffset > 150) {
                menu.addClass('fixer');
            } else {
                menu.removeClass('fixer');
            }
        },

        animatedText: function() {
            $('.fn_animated_text').each(function() {
                var element = $(this);
                var letters = element.text().split('');
                var time = element.data('wait');
                if (!time) {
                    time = 0;
                }
                var speed = element.data('speed');
                if (!speed) {
                    speed = 4;
                }
                speed = speed / 100;
                element.html('<em>321...</em>').addClass('ready');

                element.waypoint({
                    handler: function() {
                        if (!element.hasClass('stop')) {
                            element.addClass('stop');
                            setTimeout(function() {
                                element.text('');
                                $.each(letters, function(e, i) {
                                    var span = document.createElement("span");
                                    span.textContent = i;
                                    span.style.animationDelay = e * speed + 's';
                                    element.append(span);
                                });
                            }, time);
                        }
                    },
                    offset: '90%'
                });

            });
        },

        headerTrigger: function() {
            var trigger = $('.Chimps_fn_header .trigger');
            var navOverlay = $('.nav_overlay');
            var rightNav = $('.Chimps_fn_nav');
            var trigger2 = rightNav.find('.trigger');
            var links = $('.Chimps_fn_nav .nav_menu a');
            var buttons = $('.Chimps_fn_nav .nav_buttons');
            var footer = $('.Chimps_fn_nav .nav_footer');

            var menuItems = $('.Chimps_fn_nav .nav_menu > ul > li');

            $.each(menuItems, function(i, e) {
                $(e).css({
                    transform: 'translateX(' + (i + 1) * 30 + 'px)',
                    opacity: 0
                });
            });

            trigger.on('click', function() {
                if (!trigger.hasClass('is-active')) {
                    trigger.addClass('is-active');
                    rightNav.find('.trigger').addClass('is-active');
                    navOverlay.addClass('go');
                    rightNav.addClass('go');
                    setTimeout(function() {
                        $.each(menuItems, function(i, e) {
                            setTimeout(function() {
                                $(e).css({
                                    transform: 'translateX(0px)',
                                    opacity: 1
                                });
                            }, i * 200);
                        });
                    }, 2000);
                    setTimeout(function() {
                        buttons.addClass('ready');
                        footer.addClass('ready');
                    }, 2200 + (menuItems.length * 200));
                }
                return false;
            });
            trigger2.on('click', function() {
                if (trigger2.hasClass('is-active')) {
                    $.each(menuItems, function(i, e) {
                        $(e).css({
                            transform: 'translateX(' + (i + 1) * 30 + 'px)',
                            opacity: 0
                        });
                    });
                    trigger2.removeClass('is-active');
                    trigger.removeClass('is-active');
                    navOverlay.removeClass('go');
                    rightNav.removeClass('go');
                    buttons.removeClass('ready');
                    footer.removeClass('ready');
                }
                return false;
            });
            navOverlay.on('click', function() {
                if (trigger.hasClass('is-active')) {
                    $.each(menuItems, function(i, e) {
                        $(e).css({
                            transform: 'translateX(' + (i + 1) * 30 + 'px)',
                            opacity: 0
                        });
                    });
                    trigger.removeClass('is-active');
                    trigger2.removeClass('is-active');
                    navOverlay.removeClass('go');
                    rightNav.removeClass('go');
                    buttons.removeClass('ready');
                    footer.removeClass('ready');
                }
                return false;
            });

            links.off().on('click', function() {
                var link = $(this);
                var submenu = link.siblings('.sub-menu');
                var parent = link.parent();
                // check for sub-menu
                if (submenu.length) {
                    if (!parent.hasClass('opened')) {
                        parent.addClass('opened');
                        submenu.slideDown();
                        parent.siblings('.opened').removeClass('opened').find('.sub-menu').slideUp();
                    } else {
                        parent.removeClass('opened');
                        submenu.slideUp();
                    }
                    return false;
                }
                link.closest('.menu-item').addClass('active');
                if (trigger2.hasClass('is-active')) {
                    $.each(menuItems, function(i, e) {
                        if (!$(e).hasClass('active')) {
                            $(e).css({
                                transform: 'translateX(' + (i + 1) * 30 + 'px)',
                                opacity: 0
                            });
                        }
                    });
                    buttons.removeClass('ready');
                    footer.removeClass('ready');
                    setTimeout(function() {
                        trigger2.removeClass('is-active');
                        trigger.removeClass('is-active');
                        navOverlay.removeClass('go');
                        rightNav.removeClass('go');
                    }, 500);
                    setTimeout(function() {
                        window.open(link.attr('href'), "_self");
                    }, 1500);
                }
                return false;
            });
        },

        imgToSVG: function() {
            $('img.fn__svg').each(function() {
                var img = $(this);
                var imgClass = img.attr('class');
                var imgURL = img.attr('src');

                $.get(imgURL, function(data) {
                    var svg = $(data).find('svg');
                    if (typeof imgClass !== 'undefined') {
                        svg = svg.attr('class', imgClass + ' replaced-svg');
                    }
                    img.replaceWith(svg);

                }, 'xml');

            });
        },

        BgImg: function() {
            var div = $('*[data-bg-img]');
            div.each(function() {
                var element = $(this);
                var attrBg = element.attr('data-bg-img');
                var dataBg = element.data('bg-img');
                if (typeof(attrBg) !== 'undefined') {
                    element.css({
                        backgroundImage: 'url(' + dataBg + ')'
                    });
                }
            });
        },

    };


    // READY Functions
    $(document).ready(function() {
        FrenifyChimps.init();
        setTimeout(function() {
            FrenifyChimps.isotopeCollection();
        }, 150);
    });

    // RESIZE Functions
    $(window).on('resize', function() {
        FrenifyChimps.navFixer();
        FrenifyChimps.progressTotop();
    });

    // LOAD Functions
    $(window).on('load', function() {
        FrenifyChimps.isotopeCollection();

        setTimeout(function() {

        }, 10);
    });

    $(window).on('scroll', function() {
        FrenifyChimps.menuFixer();
        FrenifyChimps.progressTotop();
    });

})(jQuery);