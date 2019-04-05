// preload ------------------
$(window).load(function() {
    "use strict";
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
        contanimshow();
    });
});

$("body").append('<div class="l-line"><span></span></div>');
// all functions ------------------
function initDogma() {
    "use strict";
    if ($(".content").hasClass("home-content")) {
		$("header").animate({
            top: "-62px"
        }, 500);
		$("header , footer").animate({
            bottom: "-50px"
        }, 500);
	}
	else
	{
		$("header").animate({
            top: "0"
        }, 500);
		$("header , footer").animate({
            bottom: "0"
        }, 500);
	}
// magnificPopup ------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
// bg video ------------------
    var l = $(".background-video").data("vid");
    var m = $(".background-video").data("mv");
    $(".background-video").YTPlayer({
        fitToBackground: true,
        videoId: l,
        pauseOnScroll: true,
        mute: m,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });
// Isotope  ------------------
    $(".hide-column").bind("click", function() {
        $(".not-vis-column").animate({
            right: "-100%"
        }, 500);
    });
    $(".show-info").bind("click", function() {
        $(".not-vis-column").animate({
            right: "0"
        }, 500);
    });
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
        }
    }
    n();
    function d() {
        var a = document.querySelectorAll(".intense");
        Intense(a);
    }
    d();
// Owl carousel ------------------
    var heroslides = $(".hero-slider");
    heroslides.each(function(index) {
        var auttime = eval($(this).data("attime"));
        var rtlt = eval($(this).data("rtlt"));
        $(this).owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: auttime,
            autoplayHoverPause: false,
            autoplaySpeed: 1600,
            rtl: rtlt,
            dots: false
        });
    });
    var sync1 = $(".synh-slider"), sync2 = $(".synh-wrap"), flag = false, duration = 300;
    sync1.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    }).on("changed.owl.carousel", function(a) {
        if (!flag) {
            flag = true;
            sync2.trigger("to.owl.carousel", [ a.item.index, duration, true ]);
            flag = false;
        }
    });
    sync2.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        smartSpeed: 1200,
        autoHeight: true,
    }).on("changed.owl.carousel", function(a) {
        if (!flag) {
            flag = true;
            sync1.trigger("to.owl.carousel", [ a.item.index, duration, true ]);
            flag = false;
        }
    });
    $(".customNavigation.fhsln a.next-slide").on("click", function() {
        sync2.trigger("next.owl.carousel");
		return false;
    });
    $(".customNavigation.fhsln a.prev-slide").on("click", function() {
        sync2.trigger("prev.owl.carousel");
		return false;
    });
    var whs = $(".full-width-slider");
    whs.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        smartSpeed: 1200
    });
    $(".full-width-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".full-width-slider-holder").find(whs).trigger("next.owl.carousel");
		return false;
    });
    $(".full-width-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".full-width-slider-holder").find(whs).trigger("prev.owl.carousel");
		return false;
    });
	if (navigator.appVersion.indexOf("Win")!=-1) {
		var timestamp_mousewheel2 = 0;
		whs.on("mousewheel", ".owl-stage", function(a) {
			var d = new Date();
			if((d.getTime() - timestamp_mousewheel2) > 1000){
				timestamp_mousewheel2 = d.getTime();
			if (a.deltaY < 0) whs.trigger("next.owl"); else whs.trigger("prev.owl");
				a.preventDefault();
			}
		});
	}

    var csi = $(".custom-slider");
    csi.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        smartSpeed: 1200
    });
    $(".custom-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".custom-slider-holder").find(csi).trigger("next.owl.carousel");
		return false;
    });
    $(".custom-sliderr-holder a.prev-slide").on("click", function() {
        $(this).closest(".custom-slider-holder").find(csi).trigger("prev.owl.carousel");
		return false;
    });
    var slsl = $(".slideshow-item");
    slsl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 4e3,
        autoplayHoverPause: false,
        autoplaySpeed: 3600
    });
    var gR = $(".gallery_horizontal"), w = $(window);
    function initGalleryhorizontal() {
        var a = $(window).height(), b = $("header").outerHeight(), c = $("footer").outerHeight(), d = $("#gallery_horizontal");
        d.find("img").css("height", a - b - c);
        d.find("iframe").css("height", a - b - c);
        d.find("iframe").css("width", w - 350);
        if (gR.find(".owl-stage-outer").length) {
            gR.trigger("destroy.owl.carousel");
            gR.find(".horizontal_item").unwrap();
        }
        if (w.width() > 1036) gR.owlCarousel({
            autoWidth: true,
            margin: 10,
            items: 3,
            smartSpeed: 1300,
            loop: true,
            nav: false,
            dots: false,
            onInitialized: function() {
                gR.find(".owl-stage").css({
                    height: a - b - c,
                    overflow: "hidden"
                });
            }
        });
    }
    if (gR.length) {
        initGalleryhorizontal();
        w.on("resize.destroyhorizontal", function() {
            setTimeout(initGalleryhorizontal, 150);
        });
    }
	if (navigator.appVersion.indexOf("Win")!=-1) {
		var timestamp_mousewheel = 0;
		gR.on("mousewheel", ".owl-stage", function(a) {
			var d = new Date();
			if((d.getTime() - timestamp_mousewheel) > 1000){
				timestamp_mousewheel = d.getTime();
			if (a.deltaY < 0) gR.trigger("next.owl"); else gR.trigger("prev.owl");
				a.preventDefault();
			}
		});
	}
    $(".resize-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("next.owl.carousel");
		return false;
    });
    $(".resize-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("prev.owl.carousel");
		return false;
    });
// Nice scroll  ------------------
    var b = {
        touchbehavior: true,
        cursoropacitymax: 1,
        cursorborderradius: "0",
        background: "#eee",
        cursorwidth: "10px",
        cursorborder: "0px",
        cursorcolor: "#fff",
        autohidemode: false,
        bouncescroll: false,
        scrollspeed: 120,
        mousescrollstep: 90,
        grabcursorenabled: false,
        horizrailenabled: true
    };
    $(".nav-inner , .fixed-info-container").niceScroll(b);
    var wn = {
        touchbehavior:false,
        cursoropacitymax: 1,
        cursorborderradius: "0",
        background: "#fff",
        cursorwidth: "6px",
        cursorborder: "0px",
        cursorcolor: "#ccc",
        autohidemode: true,
        bouncescroll: false,
        scrollspeed: 120,
        mousescrollstep: 90,
        grabcursorenabled: false,
        horizrailenabled: true,
		preservenativescrolling: false,
        cursordragontouch: true,
    };
    $("#wrapper").niceScroll(wn);
 
 if ($(window).width() < 1086){
 $("#wrapper").getNiceScroll().remove();
}
// Map  ------------------
    $("#map-canvas").gmap3({
        action: "init",
        marker: {
            values: [ {
                latLng: [ 40.7143528, -74.0059731 ],
                data: "Our office  - New York City",
                options: {
                    icon: "images/marker.png"
                }
            } ],
            options: {
                draggable: false
            },
            events: {
                mouseover: function(a, b, c) {
                    var d = $(this).gmap3("get"), e = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (e) {
                        e.open(d, a);
                        e.setContent(c.data);
                    } else $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: c.data
                            }
                        }
                    });
                },
                mouseout: function() {
                    var a = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    if (a) a.close();
                }
            }
        },
        map: {
            options: {
                zoom: 14,
                zoomControl: true,
                mapTypeControl: true,
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: true,
                draggable: true,
                styles: [ {
                    featureType: "landscape",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 65
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "poi",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 51
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.highway",
                    stylers: [ {
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "road.arterial",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 30
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "road.local",
                    stylers: [ {
                        saturation: -100
                    }, {
                        lightness: 40
                    }, {
                        visibility: "on"
                    } ]
                }, {
                    featureType: "transit",
                    stylers: [ {
                        saturation: -100
                    }, {
                        visibility: "simplified"
                    } ]
                }, {
                    featureType: "administrative.province",
                    stylers: [ {
                        visibility: "off"
                    } ]
                }, {
                    featureType: "water",
                    elementType: "labels",
                    stylers: [ {
                        visibility: "on"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -100
                    } ]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [ {
                        hue: "#ffff00"
                    }, {
                        lightness: -25
                    }, {
                        saturation: -97
                    } ]
                } ]
            }
        }
    });
//  Contact form ------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                subject: $('#subject').val(),
                comments: $("#comments").val(),
                verify: $('#verify').val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
    $(".close-contact").on("click", function() {
        $(".contact-form-holder").removeClass("visform");
		return false;
    });
    $(".showform").on("click", function(a) {
        a.preventDefault();
        $(".contact-form-holder").addClass("visform");
		return false;
    });
// header functions +  menu  ------------------
    var cm = $(".nav-button");
    var nh = $(".nav-inner");
    var no = $(".nav-overlay , .close-share");
    function showmenu() {
        setTimeout(function() {
            nh.addClass("vismen");
        }, 120);
        cm.addClass("cmenu");
        nh.removeClass("isDown");
        no.addClass("visover");
    }
    function hidemenu() {
        nh.addClass("isDown");
        cm.removeClass("cmenu");
        nh.removeClass("vismen");
        no.removeClass("visover");
    }
    cm.on("click", function() {
		if (nh.hasClass("isDown")) {
			showmenu();
		}
		else {
		hidemenu();
        hideShare();
		}
		return false;
    });
    no.on("click", function() {
        hidemenu();
        hideShare();
		return false;
    });
	$(".nav-button").attr("onclick","return true");
    $("nav li.subnav ").append('<i class="fa fa-angle-double-down subnavicon"></i>');
    $(".nav-inner nav li").on("mouseenter", function() {
        $(this).find("ul").stop().slideDown();
        $(".nav-inner").addClass("menhov");
    });
    $(".nav-inner nav li").on("mouseleave", function() {
        $(this).find("ul").stop().slideUp();
        $(".nav-inner").removeClass("menhov");
    });
    function hideShare() {
        $(".share-inner").removeClass("visshare");
        $(".show-share").addClass("isShare");
        $(".share-container ").removeClass("vissc");
    }
    function showShare() {
        no.addClass("visover");
        $(".share-inner").addClass("visshare");
        $(".show-share").removeClass("isShare");
        setTimeout(function() {
            $(".share-container ").addClass("vissc");
        }, 400);
    }
    $(".show-share").on("click", function(a) {
        hidemenu();
        showShare();
    });
    function showFilter() {
        $(".filter-button").addClass("filvisb");
        setTimeout(function() {
            $(".filter-nvis-column").addClass("fnc");
        }, 400);
        $(".filter-button").removeClass("vis-fc");
    }
    function hideFilter() {
        $(".filter-nvis-column").removeClass("fnc");
        setTimeout(function() {
            $(".filter-button").removeClass("filvisb");
        }, 400);
        $(".filter-button").addClass("vis-fc");
    }
    $(".filter-button").on("click", function() {
        if ($(this).hasClass("vis-fc")) showFilter(); else hideFilter();
    });
    function showHidDes() {
        $(".show-hid-content").removeClass("ishid");
        $(".hidden-column").animate({
            left: "0",
            opacity: 1
        }, 500);
        $(".anim-holder").animate({
            left: "350px"
        }, 500);
    }
    function hideHidDes() {
        $(".show-hid-content").addClass("ishid");
        $(".hidden-column").animate({
            left: "-350px",
            opacity: 0
        }, 500);
        $(".anim-holder").animate({
            left: "0"
        }, 500);
    }
    $(".show-hid-content").on("click", function() {
        if ($(this).hasClass("ishid")) showHidDes(); else hideHidDes();
    });
// share  ------------------
    var shs = eval($(".share-container").attr("data-share"));
    $(".share-container").share({
        networks: shs
    });
    function ac() {
        $(".slideshow-item .item").css({
            height: $(".slideshow-item ").outerHeight(true)
        });
        $(".share-container").css({
            "margin-left": -$(".share-container").width() / 2 + "px"
        });
        $(".wh-info-box-inner").css({
            "margin-top": -1 * $(".wh-info-box-inner").height() / 2 + "px"
        });
        $(".filter-vis-column .gallery-filters").css({
            "margin-top": -1 * $(".filter-vis-column .gallery-filters").height() / 2 + "px"
        });
        $(".mm").css({
            "padding-top": $("header").outerHeight(true)
        });
        $(".synh-slider .item").css({
            height: $(".synh-slider").outerHeight(true)
        });
        $(".full-width-slider .item").css({
            height: $(".full-width-slider").outerHeight(true)
        });
        $(".synh-wrap").css({
            "margin-top": -1 * $(".synh-wrap").height() / 5 + "px"
        });
        $(".align-content").css({
            "margin-top": -1 * $(".align-content").height() / 2 + "px"
        });
        $(".enter-wrap-holder").css({
            "margin-top": -1 * $(".enter-wrap-holder").height() / 2 + "px"
        });
        $(".hero-grid .item").css({
            height: $(".hero-grid").outerHeight(true)
        });
        $(".small-column .item").css({
            height: $(".small-column").outerHeight(true)
        });
        $(".filter-nvis-column .gallery-filters").css({
            "margin-top": -1 * $(".filter-nvis-column .gallery-filters").height() / 2 + "px"
        });

    }
    ac();
    $(window).resize(function() {
        ac();
    });
// Init your functions here ------------------



}

function initvideo() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
	if (trueMobile) {
		$(".background-video").remove();

	}

}

// show hide content  ------------------
function contanimshow() {
    setTimeout(function() {
    	$(".elem").removeClass("scale-bg2");
    }, 450);
    var a = window.location.href;
    var b = $(".dynamic-title").text();
    $(".header-title a").attr("href", a);
    $(".header-title a").html(b);
}

function contanimhide() {
    setTimeout(function() {
        $(".elem").addClass("scale-bg2");
    }, 650);
    $(".show-share").addClass("isShare");
}
// Init core  ------------------
$(function() {
    $.coretemp({
        reloadbox: "#wrapper",
        loadErrorMessage: "<h2>404</h2> <br> page not found.",
        loadErrorBacklinkText: "Back to the last page",
        outDuration: 250,
        inDuration: 150
    });
    readyFunctions();
    $(document).on({
        ksctbCallback: function() {
            readyFunctions();
        }
    });
});
// Init all functions  ------------------
function readyFunctions() {
    initDogma();
    initvideo();
}