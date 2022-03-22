/**
 * @return {number}
 */
function GetValue(field) {
    return Number(field.val());
}

function SetValue(field, value) {
    field.val(value);
}

function ResetField(field) {
    field.val('');
}

function HideField(field, time= 200){
    field.find('.form-control').removeAttr('required')
    field.hide(time);
}

function ResetAndHideField(field, time= 200) {
    removeMatrixRows(field);
    removeHiddenRequired(field);
    field.hide(time);
    field.find('.custom-input-section').hide(time);
    resetSurveyField(field);
}

function resetSurveyField(field){
    field.find('.form-control').each(function (){
        if(!$(this).hasClass('read-only') && $(this).val() !== ''){
            $(this).val('');
            triggerSearchableSelects();
        }
    });

    field.find('.form-radio-control').each(function (){
        if($(this).prop('checked') !== undefined && $(this).prop('checked') === true){
            $(this).prop('checked', false);
        }
    });

    field.find('.form-check-input').each(function (){
        if($(this).prop('checked') !== undefined && $(this).prop('checked') === true){
            $(this).prop('checked', false);
        }
    });
}

function ResetAndHideField_custom_input(field, time= 200) {
    removeHiddenRequired(field);
    field.hide(time);
    field.find('.form-control').val('');
}

function ShowField(field, time= 200) {
    field.show(time);
    addVisibleRequired(field);
}

function ShowField_custom_input(field, time= 200) {
    field.show(time);
    addVisibleRequired(field);
}

function addVisibleRequired(field){
    field.find('.form-control').each(function (){
        if($(this).data('required') === true && $(this).is(":visible") && ($(this).attr('required') === undefined || $(this).attr('required')===false)){
            $(this).attr('required', 'required');
        }
    });

    field.find('.form-radio-control').each(function (){
        if($(this).data('required') === true && $(this).is(":visible") && ($(this).attr('required') === undefined || $(this).attr('required')===false)){
            $(this).attr('required', 'required');
        }
    });
}

function removeHiddenRequired(field){
    field.find('.form-control').each(function (){
        $(this).removeAttr('required');
    });

    field.find('.form-radio-control').each(function (){
        $(this).removeAttr('required');
    });
}

function removeMatrixRows(field){
    field.find('.matrix-row').each(function (){
        $(this).remove();
    });
}

function triggerSearchableSelects(){
    $('.searchable-select').each(function (){
        if($(this).val() ==='' && $(this).next().find('.select2-selection__rendered').attr('title') !== undefined){
            $(this).trigger('change', [true]);
        }
    });
}

function bindDropdown(field){
    field.select2({
        placeholder: "please select",
        allowClear: true,
        tags: false
    });

    field.on('change', function (e, state){
        if (typeof state!='undefined' && state){
            return false;
        }

        if($(this).data('remote')) {
            $.ajax({
                url: $(this).data('url'),
                type: "GET",
                data: {id: $(this).val()}
            });
        }
    });
    $('.select2').css('width', '100%');
}


$.fn.presence = function () {
    return this.length !== 0;
}

function SanitizeJson(json_data) {
    json_data = JSON.stringify(json_data);
    json_data = json_data.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f");
    json_data = json_data.replace(/[\u0000-\u0019]+/g, "");
    return json_data
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

function delay(fn, ms) {
    let timer = 0
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(fn.bind(this, ...args), ms || 0)
    }
}

function treatAsUTC(date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

function daysBetween(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

function getLocalDate(d, offset_day= 0){
    try {
        if(offset_day!==0){
            d.setDate(d.getDate() + offset_day);
        }

        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        return date + "/" + month + "/" + year;
    }catch (e) {
        return ''
    }
}

function getDatesBetween(oDate1, oDate2){
    var aDates = [];
    var currentDate = new Date(oDate1.getTime());
    var endDate = new Date(oDate2.getTime());

    endDate.setDate(oDate2.getDate() + 1);

    while (currentDate <= endDate) {
        aDates.push(getLocalDate(new Date(currentDate)));
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return aDates;
}
