//Social proof

$(document).ready(function () {
    $("#social-proof").append("<div id=proof></div>");
    var x = document.getElementById("social-proof").getAttribute("data-course");

    switch (x) {

    case 'costura': 
        var img = "http://cdn.msclics.com/assets/prod/47/costura_premium/registros.jpg";
        var course = " Costura Premium";
        break;
    
    case 'automatizads':
        var img = "http://cdn.msclics.com/assets/prod/52/home/registros.jpg";
        var course = " Automatizads";
        break;
    
    case 'automatichat':
        var img = "http://cdn.msclics.com/assets/prod/54/inicio/fomo.jpg";
        var course = " Automatichat";
        break;

    }


    var json = [
        {
            id: "1",
            name: "Maria Torres",
            location: "M&#xE9;xico",
            transaction: {
                message: "Ha adquirido",
                date: "T12:24:17"
            },
        },
        {
            id: "2",
            name: "Rebeca Martinez",
            location: "Chile",
            transaction: {
                message: "ha adquirido",
                date: "T13:24:17"
            },
        },
        {
            id: "3",
            name: "Ana Bel&#xE9;n",
            location: "Per&#xFA;",
            transaction: {
                message: "ha adquirido",
                date: "T11:24:17"
            },
        },
        {
            id: "4",
            name: "Pablo",
            location: "Estados Unidos",
            transaction: {
                message: "ha adquirido",
                date: "T11:40:17"
            },
        },
        {
            id: "5",
            name: "Pilar Lopez",
            location: "Panam&#xE1;",
            transaction: {
                message: "ha adquirido",
                date: "T11:56:17"
            },
        },
        {
            id: "6",
            name: "Rosina",
            location: "Guatemala",
            transaction: {
                message: "ha adquirido",
                date: "T13:00:17"
            },
        },
        {
            id: "7",
            name: "Luz Mart&#xED;nez",
            location: "Chile",
            transaction: {
                message: "ha adquirido",
                date: "T14:24:17"
            },
        },
        {
            id: "8",
            name: "F&#xE9;lix L&#xF3;pez",
            location: "M&#xE9;xico",
            transaction: {
                message: "ha adquirido",
                date: "T14:24:17"
            },
        },
        {
            id: "9",
            name: "Nicol&#xE1;s Sosa",
            location: "Per&#xFA;",
            transaction: {
                message: "ha adquirido",
                date: "T15:24:17"
            },
        },
        {
            id: "10",
            name: "Oriana Ortega",
            location: "Estados Unidos",
            transaction: {
                message: "ha adquirido",
                date: "T16:24:17"
            },
        },
        {
            id: "11",
            name: "Pilar L&#xF3;pez",
            location: "Panam&#xE1;",
            transaction: {
                message: "ha adquirido",
                date: "T16:00:17"
            },
        },
        {
            id: "12",
            name: "Luisa Atencio",
            location: "Guatemala",
            transaction: {
                message: "ha adquirido",
                date: "T15:14:17"
            },
        },
        {
            id: "13",
            name: "Vanessa Farf&#xE1;n",
            location: "M&#xE9;xico",
            transaction: {
                message: "ha adquirido",
                date: "T11:00:17"
            },
        },
        {
            id: "14",
            name: "Johany P&#xE9;rez",
            location: "Chile",
            transaction: {
                message: "ha adquirido",
                date: "T11:12:17"
            },
        },
        {
            id: "15",
            name: "Mariana Escalona",
            location: "Colombia",
            transaction: {
                message: "ha adquirido",
                date: "T11:11:17"
            },
        },
        {
            id: "16",
            name: "Patricia Ram&#xED;rez",
            location: "Ecuador",
            transaction: {
                message: "ha adquirido",
                date: "T18:24:17"
            },
        },
        {
            id: "17",
            name: "Gloria D&#xED;az",
            location: "Ecuador",
            transaction: {
                message: "ha adquirido",
                date: "T19:24:17"
            },
        },
    ];

    if (json.length !== 0) {
        var d = new Date();
        var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
        $.each(json, function (i, v) {
            var result = '<div class="proof proof-out" id="' + i + '">';
            (result +=
                `<div class="row">
                            <div class="col-3 mr-3">
                                <img class="social-proof-img" src="`+ img +`" />
                            </div>
                            <div class="align-items-center col-8 d-flex pr-0">
                                <div class="text-left proof-text">
                                    <span class="sp-name"><b>` + v.name +`</b> desde <b>` + v.location +`</b></span>
                                    <br>
                                    <span class="sp-purchase">` + v.transaction.message +`<b>` + course + `</b></span>
                                    <br>                                    
                                    <time class="timeago" datetime="` + date + v.transaction.date +`" ></time>
                                </div>
                            </div>
                        </div>`),
                $("#proof").append(result);
        });
    }

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const showInfo = (index) => {
        return sleep(30000).then((v) => {
            $("#" + index)
                .fadeIn()
                .delay(5000);
            $("#" + index).fadeOut().delay(5000);
        });
    };

    const renewIndexes = () => {
        return json.map((obj, i) => i).sort(() => Math.random() - 0.5);
    };

    let indexes = renewIndexes();

    const social = async () => {
        let index = indexes.pop();
        await showInfo(index);
        if (indexes.length == 0) {
            indexes = renewIndexes();
        }
        social();
    };

    social();
});

jQuery(document).ready(function () {
  console.log("testing social proof");
  jQuery.timeago.settings.allowFuture = false;
  jQuery("time.timeago").timeago();
});