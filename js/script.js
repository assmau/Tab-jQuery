$(function () {
    var tabContainers = $('.tabs > .items');
    tabContainers.hide().filter(':first').show();
    $('.tabs ul.tab-navigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('.tabs .tab-navigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});