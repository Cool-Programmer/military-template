$(document).ready(function() {
    configureShare();
});

function configureShare() {
    if ($("#share").is(":visible")) {
        jQuery("#share").jsSocials({
            showLabel: false,
            shares: ["facebook", "vkontakte", "messenger", "whatsapp", "viber", "email"]
        });
    }
}