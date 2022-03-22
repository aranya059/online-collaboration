$(document).ready(function() {
    $('#logo-file-upload').on('change', function(event) {
        var files = event.target.files;
        var image = files[0];
        if (image) {
            $('#logo-preview').attr('src',URL.createObjectURL(image));
        }
    });
});
