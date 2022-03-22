var SIDEBAR_MINIMIZED = 'MINIMIZED';
var SIDEBAR_MAXIMIZED = 'MAXIMIZED';

$(document).ready(function() {
    set_searchable_select();
    sidebarConfiguration();
    makeAccordionOpenedAfterRefresh();
    makeTabSelectedAfterRefresh();
    setPreviewModal();
    setRequiredFields();

      $('.btn').on('click', function () {
        $(this).find("span[role='status']").removeClass('d-none');
        $(this).find("i[role='status']").addClass('d-none');

        setTimeout(function() {
          $('.btn').find("i[role='status']").removeClass('d-none');
          $('.btn').find("span[role='status']").addClass('d-none');
        }, 1000);
      });

      $(this).on("wheel", "input[type=number]", function (e) {
        $(this).blur();
      });


    $('#sidebar-toggler').on('click', function () {
        if (window.matchMedia("(max-width: 767px)").matches)
        {
            localStorage.removeItem("sidebarMinimizer");
            // The viewport is less than 768 pixels wide
        } else {
            var minimizer_status = localStorage.getItem('sidebarMinimizer');

            if (minimizer_status === null) {
                body.addClass('sidebar-minified');
                body.removeClass('sidebar-minified-out');
                localStorage.setItem('sidebarMinimizer', SIDEBAR_MINIMIZED);
            } else {
                body.removeClass('sidebar-minified');
                body.addClass('sidebar-minified-out');
                localStorage.removeItem("sidebarMinimizer");
            }
        }
    });

    var body = $('body');

    if (window.matchMedia("(max-width: 767px)").matches)
    {
        localStorage.removeItem("sidebarMinimizer");
        // The viewport is less than 768 pixels wide
    } else {
        if (localStorage.getItem('sidebarMinimizer') === SIDEBAR_MINIMIZED){
            body.addClass('sidebar-minified');
            body.removeClass('sidebar-minified-out');
        }else {
            body.addClass('sidebar-minified-out');
            body.removeClass('sidebar-minified');
        }
    }


    // image show instantly when select
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $(input).nextAll(".form-text").children().attr('src', e.target.result);
                $(input).nextAll(".form-text").children().removeAttr('hidden');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.form-control-file').change(function() {
        readURL(this);
    });

    const flashCallback = function () {
        return $(".auto-hide").fadeOut();
    };
    return setTimeout(flashCallback, 5000);

});

function setRequiredFields(){
    $('input, .form-control, .form-radio-control').each(function (){
        if($(this).data('required') === true){
            $(this).attr('required', 'required');
        }
    });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$(document).ajaxStop(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

function setPreviewModal(){
    $('body').on('click', '[data-target="#previewModal"]', function () {
        let preview_modal = $("#previewModal");
        preview_modal.addClass('show');
        preview_modal.show();
        preview_modal.css('background', '#00000094');
    });

    $("[data-dismiss='modal']").on('click', function (){
        $('.modal').hide();
        $('.modal').removeClass('show');
        $("#previewModal").css('background', '');
    });

}

function makeAccordionOpenedAfterRefresh(){
    let selectedCollapse;
    let selectedCollapseData = JSON.parse(sessionStorage.getItem('selectedCollapseData'));
    try{
        selectedCollapse = selectedCollapseData[Buffer.from(window.location.pathname).toString('base64')]
    }catch(e){
        selectedCollapse = null
    }
    if(selectedCollapse != null) {
        $('.accordion .collapse').removeClass('show');
        $(selectedCollapse).addClass('show');
        $(selectedCollapse).addClass('glow');

        setTimeout(function() {
            $(selectedCollapse).removeClass('glow');
        }, 3000);

        let parent_collapse = $(selectedCollapse).parentsUntil('div.collapse').last().parent();
        let depth = 0;

        parent_collapse.addClass('show');

        while((parent_collapse[0] !== undefined) && (parent_collapse[0].nodeName.toLowerCase() !== '#document') && (depth < 5)) {
            parent_collapse = parent_collapse.parentsUntil('div.collapse').last().parent();
            parent_collapse.addClass('show');
            depth += 1;
        }
    }

    $('.accordion .btn-link').on('click', function(){
        let target = $(this).data('target');
        let selected_collapse;
        let selectedCollapseData = JSON.parse(sessionStorage.getItem('selectedCollapseData'));
        let key = Buffer.from(window.location.pathname).toString('base64');

        if(selectedCollapseData !== null){
            selected_collapse = selectedCollapseData;
        }else {
            selected_collapse = {};
        }

        if(selected_collapse[key] === target){
            selected_collapse[key] = null;
        }else{
            selected_collapse[key] = target;
        }
        sessionStorage.setItem('selectedCollapseData', JSON.stringify(selected_collapse));
    });
}

function makeTabSelectedAfterRefresh(){
    let selectedTab;
    let selectedTabData = JSON.parse(sessionStorage.getItem('selectedTabData'));
    try{
        selectedTab = selectedTabData[Buffer.from(window.location.pathname).toString('base64')]
    }catch(e){
        selectedTab = null
    }
    if(selectedTab != null) {
        $(selectedTab).addClass('show');
        $(selectedTab).addClass('active');
        $(selectedTab + '-tab').addClass('active');
    }else {
        $('ul#pills-tab li:first-child a').addClass('active');
        let tab_pane = $('.tab-content').find('.tab-pane').first();
        tab_pane.addClass('active');
        tab_pane.addClass('show');
    }

    $('a[role="tab"]').on('click', function(){
        let target = $(this).attr('href');
        let selected_tab;
        let selectedTabData = JSON.parse(sessionStorage.getItem('selectedTabData'));
        let key = Buffer.from(window.location.pathname).toString('base64');

        if(selectedTabData !== null){
            selected_tab = selectedTabData;
        }else {
            selected_tab = {};
        }

        selected_tab[key] = target;
        sessionStorage.setItem('selectedTabData', JSON.stringify(selected_tab));
    });
}

function sidebarConfiguration(){
    var stringSimilarity = require("string-similarity");
    let targets = [];
    let target_objects = []
    $('.sidebar').find('.sidenav-item-link').each(function (){
        targets.push($(this).attr('href'));
        target_objects.push($(this));
    });

    const results = stringSimilarity.findBestMatch(window.location.pathname, targets);

    let best_match_obj = target_objects[results.bestMatchIndex]

    best_match_obj.parent().addClass('active');
    best_match_obj.parent().parent().parent().addClass('show');
    best_match_obj.parent().parent().parent().parent().addClass('expand');
    best_match_obj.parent().parent().parent().siblings('.sidenav-item-link').attr('aria-expanded', true);
    best_match_obj.parent().parent().parent().siblings('.sidenav-item-link').removeClass('collapsed');
}

function set_searchable_select(){
    $(".searchable-select").each(function (){
        let placeholder = $(this).attr('placeholder');

        if(placeholder === undefined){
            placeholder = "Please Select";
        }

        $(this).select2({
            placeholder: placeholder,
            allowClear: true,
            tags: false
        });

        if($(this).attr('multiple')){
            $(this).select2({
                tags: false,
                tokenSeparators: ['/', ',', " "]
            });
            var data = $(this).data('selected-ids');
            $(this).val(data).trigger('change');
        }

        if($(this).data('remote')) {
            $(this).on('change', function (e, state){
                if (typeof state!='undefined' && state){
                    return false;
                }
                $.ajax({
                    url: $(this).data('url'),
                    type: "GET",
                    data: { id: $(this).val() }
                });
            });
        }
    });
    $('.select2').css('width', '100%');
}
