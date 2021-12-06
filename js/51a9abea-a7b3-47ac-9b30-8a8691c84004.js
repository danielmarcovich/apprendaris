  $('#BtnPagoOfertaUno, #BtnPagoOfertaDos, #BtnPagoOfertaTres').click(function() {
      console.log('Add to Card');
    fbq('track', 'AddToCart');
  });
//   ,'#BtnPagoOfertaDos', '#BtnPagoOfertaTres'

$(document).ready(function () {
  $("#collapseabout").on("show.bs.collapse", function () {
    console.log("show");
    $(".read-more-about").hide();
  });
});

$(function () {
    var vimeo_iframe = $("#vimeo_player")[0];
    var player = $f(vimeo_iframe);

    player.addEvent("ready", function () {
        player.api("setVolume", 0.05);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Create Countdown
    var Countdown = (target) => {
        return {
            // Backbone-like structure
            $el: $(target),

            // Params
            countdown_interval: null,
            total_seconds: 0,

            // Initialize the countdown
            init: function () {
                // DOM
                this.$ = {
                    hours: this.$el.find(".bloc-time.hours .figure"),
                    minutes: this.$el.find(".bloc-time.min .figure"),
                    seconds: this.$el.find(".bloc-time.sec .figure"),
                };

                // Init countdown values
                var countDownDate = this.$el.attr("data-init-finishdate");
                console.log(countDownDate, Date.parse(countDownDate, "yyyy-MM-dd HH:mm:ss"));
                if (!countDownDate) {
                    this.values = {
                        hours: this.$.hours.parent().attr("data-init-value"),
                        minutes: this.$.minutes.parent().attr("data-init-value"),
                        seconds: this.$.seconds.parent().attr("data-init-value"),
                    };
                } else {
                    var dateparsed = Date.parse(countDownDate, "yyyy-MM-dd HH:mm:ss");
                    var now = new Date().getTime();
                    var distance = dateparsed - now;

                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    this.values = {
                        hours: hours,
                        minutes: minutes,
                        seconds: seconds,
                    };
                }

                console.log("hora actual", hours);

                if (hours <= 23 && hours >= 9) {
                    var costura_premium = '&#xDA;LTIMOS <span class="yellow">8</span> CUPOS DISPONIBLES <span class="rose">-50%</span> + <span class="yellow">BONOS</span>'
                    var progressbar =   `<div class="circle" data-percent="84">
                                            <div style="font-weight: bolder;"></div>
                                        </div>`
                    var cupos = '<b>&#xDA;LTIMOS <span class="yellow">8</span> CUPOS DISPONIBLES</b>';
                    var cuposcanto = '<b>&#xDA;LTIMOS <span class="yellow">8</span> CUPOS DISPONIBLES</b>';
                    var cupodescuento = '<b>&#xDA;LTIMOS <span class="yellow">8</span> CUPOS DISPONIBLES</b>';
                    $(".premium").html(costura_premium);
                    $("#progressbar").html(progressbar);
                    $("#cupodescuentos").html(cupodescuento);
                    $("#cantocupo").html(cuposcanto);
                    $("#cantocupo2").html(cuposcanto);
                    $("#cupo").html(cupos);
                    $("#cupo2").html(cupos);
                    $("#cupo3").html(cupos);
                    console.log("1", hours);
                }

                if (hours <= 9 && hours >= 12) {
                    var costura_premium = '&#xDA;LTIMOS <span class="yellow">6</span> CUPOS DISPONIBLES <span class="rose">-50%</span> + <span class="yellow">BONOS</span>'
                    var progressbar =   `<div class="circle" data-percent="88">
                                            <div style="font-weight: bolder;"></div>
                                        </div>`
                    var cupos = '<b>&#xDA;LTIMOS <span class="yellow">6</span> CUPOS DISPONIBLES</b>';
                    var cuposcanto = '<b>&#xDA;LTIMOS <span class="yellow">6</span> CUPOS DISPONIBLES</b>';
                    var cupodescuento = '<b>&#xDA;LTIMOS <span class="yellow">6</span> CUPOS DISPONIBLES</b>';
                    $(".premium").html(costura_premium);
                    $("#progressbar").html(progressbar);
                    $("#cupodescuentos").html(cupodescuento);
                    $("#cantocupo").html(cuposcanto);
                    $("#cantocupo2").html(cuposcanto);
                    $("#cupo").html(cupos);
                    $("#cupo2").html(cupos);
                    $("#cupo3").html(cupos);
                    console.log("2", hours);
                }

                if (hours <= 12 && hours >= 6) {
                    var costura_premium = '&#xDA;LTIMOS <span class="yellow">4</span> CUPOS DISPONIBLES <span class="rose">-50%</span> + <span class="yellow">BONOS</span>'
                    var progressbar =   `<div class="circle" data-percent="92">
                                            <div style="font-weight: bolder;"></div>
                                        </div>`
                    var cupos = '<b>&#xDA;LTIMOS <span class="yellow">5</span> CUPOS DISPONIBLES</b>';
                    var cuposcanto = '<b>&#xDA;LTIMOS <span class="yellow">5</span> CUPOS DISPONIBLES</b>';
                    var cupodescuento = '<b>&#xDA;LTIMOS <span class="yellow">5</span> CUPOS DISPONIBLES</b>';
                    $(".premium").html(costura_premium);
                    $("#progressbar").html(progressbar);
                    $("#cupodescuentos").html(cupodescuento);
                    $("#cantocupo").html(cuposcanto);
                    $("#cantocupo2").html(cuposcanto);
                    $("#cupo").html(cupos);
                    $("#cupo2").html(cupos);
                    $("#cupo3").html(cupos);
                    console.log("3", hours);
                }

                if (hours <= 6 && hours >= 0) {
                    var costura_premium = '&#xDA;LTIMOS <span class="yellow">2</span> CUPOS DISPONIBLES <span class="rose">-50%</span> + <span class="yellow">BONOS</span>'
                    var progressbar =   `<div class="circle" data-percent="96">
                                            <div style="font-weight: bolder;"></div>
                                        </div>`
                    var cupos = '<b>&#xDA;LTIMOS <span class="yellow">4</span> CUPOS DISPONIBLES</b>';
                    var cuposcanto = '<b>&#xDA;LTIMOS <span class="yellow">4</span> CUPOS DISPONIBLES</b>';
                    var cupodescuento = '<b>&#xDA;LTIMOS <span class="yellow">4</span> CUPOS DISPONIBLES</b>';
                    $(".premium").html(costura_premium);
                    $("#progressbar").html(progressbar);
                    $("#cupodescuentos").html(cupodescuento);
                    $("#cantocupo").html(cuposcanto);
                    $("#cantocupo2").html(cuposcanto);
                    $("#cupo").html(cupos);
                    $("#cupo2").html(cupos);
                    $("#cupo3").html(cupos);
                    console.log("4", hours);
                }

                // Initialize total seconds
                this.total_seconds = 300;
                var URLactual = window.location;
                if (URLactual == "https://netfiliado.com/tiktok-marketing" || "https://netfiliado.com/aprende-a-cantar" || "https://netfiliado.com/tiktok-propuesta") {
                    this.total_seconds = 86400;
                }
                // this.values.hours * 60 * 60 +
                // this.values.minutes * 60 +
                // this.values.seconds;

                // Animate countdown to the end
                this.count();
            },

            count: function () {
                var that = this,
                    $hour_1 = this.$.hours.eq(0),
                    $hour_2 = this.$.hours.eq(1),
                    $min_1 = this.$.minutes.eq(0),
                    $min_2 = this.$.minutes.eq(1),
                    $sec_1 = this.$.seconds.eq(0),
                    $sec_2 = this.$.seconds.eq(1);

                this.countdown_interval = setInterval(function () {
                    if (that.total_seconds > 0) {
                        --that.values.seconds;

                        if (that.values.minutes >= 0 && that.values.seconds < 0) {
                            that.values.seconds = 59;
                            --that.values.minutes;
                        }

                        if (that.values.hours >= 0 && that.values.minutes < 0) {
                            that.values.minutes = 59;
                            --that.values.hours;
                        }

                        // Update DOM values
                        // Hours
                        that.checkHour(that.values.hours, $hour_1, $hour_2);

                        // Minutes
                        that.checkHour(that.values.minutes, $min_1, $min_2);

                        // Seconds
                        that.checkHour(that.values.seconds, $sec_1, $sec_2);

                        --that.total_seconds;
                    } else {
                        clearInterval(that.countdown_interval);
                    }
                }, 1000);
            },

            animateFigure: function ($el, value) {
                var that = this,
                    $top = $el.find(".top"),
                    $bottom = $el.find(".bottom"),
                    $back_top = $el.find(".top-back"),
                    $back_bottom = $el.find(".bottom-back");

                // Before we begin, change the back value
                $back_top.find("span").html(value);

                // Also change the back bottom value
                $back_bottom.find("span").html(value);

                // Then animate
                TweenMax.to($top, 0.8, {
                    rotationX: "-180deg",
                    transformPerspective: 300,
                    ease: Quart.easeOut,
                    onComplete: function () {
                        $top.html(value);

                        $bottom.html(value);

                        TweenMax.set($top, { rotationX: 0 });
                    },
                });

                TweenMax.to($back_top, 0.8, {
                    rotationX: 0,
                    transformPerspective: 300,
                    ease: Quart.easeOut,
                    clearProps: "all",
                });
            },

            checkHour: function (value, $el_1, $el_2) {
                var val_1 = value.toString().charAt(0),
                    val_2 = value.toString().charAt(1),
                    fig_1_value = $el_1.find(".top").html(),
                    fig_2_value = $el_2.find(".top").html();

                if (value >= 10) {
                    // Animate only if the figure has changed
                    if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
                    if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
                } else {
                    // If we are under 10, replace first figure with 0
                    if (fig_1_value !== "0") this.animateFigure($el_1, 0);
                    if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
                }
            },
        };
    };
    // Let's go !
    Countdown("#time2").init();
    Countdown("#time1").init();
});

var fecha = new Date();
var diaf = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
var hoy = fecha.getDay();

var tiktokoferta0 =
    '<p>Domingo ' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";
var tiktokoferta1 =
    '<p>Lunes </span>' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";
var tiktokoferta2 =
    '<p>Martes </span>' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";
var tiktokoferta3 =
    '<p>Mi&eacute;rcoles </span>' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";
var tiktokoferta4 =
    '<p>Jueves </span>' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";
var tiktokoferta5 =
    '<p>Viernes </span>' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";
var tiktokoferta6 =
    '<p>S&aacute;bado </span>' +
    diaf +
    " antes de las 12 A.M (GMT-5)</p>";

var dateOferta = document.getElementById("date-oferta");
console.log(dateOferta);
if (dateOferta != null) {
    var dateOferta = document.getElementById("date-oferta").innerHTML = eval("tiktokoferta" + hoy);
    var dateOferta1 = document.getElementById("date-oferta1").innerHTML = eval("tiktokoferta" + hoy);
}

function hvr(dom, action) {
    if (action == "in") {
        $(dom).find("[col=g]").css("display", "none");
        $(dom).find("[col=b]").css("display", "inline-block");
    } else {
        $(dom).find("[col=b]").css("display", "none");
        $(dom).find("[col=g]").css("display", "inline-block");
    }
}


/* Carrusel*/

//  $('#recipeCarousel').carousel({
//   interval: 10000
//  })

$(".carousel .carousel-item").each(function () {
    var minPerSlide = 1;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(":first");
        }

        next.children(":first-child").clone().appendTo($(this));
    }
});

$(document).ready(function () {
    $('a[href^="#Oferta"], a[href^="#Estrategia"]' ).click(function () {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $("html");
        }
        $("html, body").animate({ scrollTop: destino.offset().top }, 2000);
        return false;
    });
});

$(document).ready(function ($) {
    function animateElements() {
        $(".progressbar").each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find(".circle").attr("data-percent");
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data("animate");
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data("animate", true);
                $(this)
                    .find(".circle")
                    .circleProgress({
                        startAngle: -Math.PI / 2,
                        value: percent / 100,
                        size: 180,
                        thickness: 30,
                        emptyFill: "rgba(0,0,0, .2)",
                        fill: {
                            color: "#de4848",
                        },
                    })
                    .on("circle-animation-progress", function (event, progress, stepValue) {
                        $(this)
                            .find("div")
                            .text((stepValue * 100).toFixed(1) + "%");
                    })
                    .stop();
            }
        });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
}); //end document ready function