$(document).ready(function() {
    $('#photo-file-upload').on('change', function(event) {
        var files = event.target.files;
        var image = files[0];
        if (image) {
            $('#photo-preview').attr('src',URL.createObjectURL(image));
        }
    });
});
