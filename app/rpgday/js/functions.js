/* Bulma CSS modal code */
function openBulmaModal(id) {
    "use strict";
    document.getElementById(id).classList.add('is-active');
}

function closeBulmaModal(id) {
    "use strict";
    document.getElementById(id).classList.remove('is-active');
}

function BulmaCardModal(id, title, content, footer) {
    "use strict";

    var bulmamodal =
    "<div class='modal' id='"+id+"'>" +
        "<div class='modal-background' onclick='closeBulmaModal(&quot;"+id+"&quot;)'></div>" +
        "<div class='modal-card'>" +
            "<header class='modal-card-head'>" +
                "<p class='modal-card-title'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i> " +
                title +
                "</p>" +
                "<button class='delete' aria-label='close' onclick='closeBulmaModal(&quot;"+id+"&quot;)'></button>" +
            "</header>" +
            "<section class='modal-card-body'>" +
                content +
            "</section>" +
            "<footer class='modal-card-foot'>" +
                footer +
            "</footer>" +
        "</div>" +
    "</div>";

    document.getElementById("TriggerBulmaCardModal").innerHTML = bulmamodal;
    openBulmaModal(id);
}

function BulmaImgModal(url) {
    "use strict";

    var bulmaimgmodal =
    "<div class='modal' id='imgmodal'><div class='modal-background' onclick='closeBulmaModal(&quot;imgmodal&quot;)'></div>" +
        "<div class='modal-content'>" +
            "<p class='bulma-img-modal-center'><img src='"+url+"'></p>" +
        "</div><button class='modal-close is-large' aria-label='close' onclick='closeBulmaModal(&quot;imgmodal&quot;)'></button>" +
    "</div>";

    document.getElementById("TriggerBulmaImgModal").innerHTML = bulmaimgmodal;
    openBulmaModal('imgmodal');
}
