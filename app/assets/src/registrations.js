document.addEventListener('DOMContentLoaded', function () {
    const profile_update_form = $('#profile-update');
    if (profile_update_form.length) {
        document.getElementById('image-upload').addEventListener('click',
            function() {
                document.getElementById('image-input').click();
            },
            false
        );

        document.getElementById('image-input').onchange = function() {
            const file = document.getElementById('image-input').files[0];
            if (file) {
                document.getElementById('user-image').src = URL.createObjectURL(file);
            }
        }
        // Signature Upload
        document.getElementById('edit-sign').addEventListener('click',
            function() {
                document.getElementById('sign-input').click();
            },
            false
        );

        document.getElementById('sign-input').onchange = function() {
            const file = document.getElementById('sign-input').files[0];
            if (file) {
                document.getElementById('sign-upload').src = URL.createObjectURL(file);
            }
        }
    }
    const sign_up_form = $('#signup-form');
    if (sign_up_form.length) {

        // Image Upload
        document.getElementById('image-upload').addEventListener('click',
            function() {
                document.getElementById('image-input').click();
            },
            false
        );

        document.getElementById('image-input').onchange = function() {
            const file = document.getElementById('image-input').files[0];
            if (file) {
                document.getElementById('image-upload').innerText = file.name;
                document.getElementById('image-preview').src = URL.createObjectURL(file);
            }
        }

        // Signature Upload
        document.getElementById('sign-upload').addEventListener('click',
            function() {
                document.getElementById('sign-input').click();
            },
            false
        );

        document.getElementById('sign-input').onchange = function() {
            const file = document.getElementById('sign-input').files[0];
            if (file) {
                document.getElementById('sign-upload').innerText = file.name;
                document.getElementById('signature-preview').src = URL.createObjectURL(file);
            }
        }
    }
}, false);

