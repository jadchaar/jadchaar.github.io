$(document).ready(function() {
    $("a#instagram_link").click(function() {
        $("a#twitter_link").wrap("<div class='restore_styles'></div>");
        $("a#instagram_link").wrap("<div class='restore_styles'></div>");
        $("a#linkedin_link").wrap("<div class='restore_styles'></div>");
    });
});
