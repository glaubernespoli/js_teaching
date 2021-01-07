$(function () {
    $('#other-profession').hide();
});

$('input[name="profession"]').on('change', function () {
    if (this.id == 'other') {
        $('#other-profession').fadeIn(600).trigger('focus');
    } else {
        $('#other-profession').fadeOut(600);
    }
});


$('#submit').on('click', function () {
    validateForm();
});

function validateForm() {
    formValidateAgree();
    formValidateProfession();
    formValidateAge();
    formValidateAddress();
    formValidateEmail();
    formValidateName();
}

/**
 * Name should not be empty and should be at least 3 characters.
 */
function formValidateName() {
    const nameInpt = $('#name');
    if (!nameInpt.val() || nameInpt.val().trim().length < 3) {
        nameInpt.addClass('invalid');
        nameInpt.trigger('focus');

        $('span', nameInpt.parent()).text('Name should not be empty and should be at least 3 characters.');
    } else {
        nameInpt.removeClass('invalid');
        $('span', nameInpt.parent()).text('');
    }
}

//1. email: use any email regex and validate the input
//2. address: not empty and at least 5 chars
//3. age: should be older than 18
//4. profession: should be selected. if 'other' is selected, 
//than the 'other-profession' input should not be empty and should have at 
//least 5 chars
//optional: add a span for each  ipt-box that will show to the user the error message

/**
 * Validate the email against a email regex pattern. it can be any
 */
function formValidateEmail() {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailInpt = $('#email');
    if (!emailInpt.val() || !re.test(emailInpt.val())) {
        emailInpt.addClass('invalid');

        emailInpt.trigger('focus');
        $('span', emailInpt.parent()).text('Email is not well formatted.');
    } else {
        emailInpt.removeClass('invalid');
        $('span', emailInpt.parent()).text('');
    }
}

function formValidateAddress() {
    const addressInp = $('#address');
    if (!addressInp.val() || addressInp.val().trim().length < 5) {
        addressInp.addClass('invalid');
        addressInp.trigger('focus');

        $('span', addressInp.parent()).text('Address should not be empty and should be at least 5 characters.');
    } else {
        addressInp.removeClass('invalid');
        $('span', addressInp.parent()).text('');
    }
}

function formValidateAge() {
    const ageInpt = $('#age');
    if (!ageInpt.val() || parseInt(ageInpt.val()) < 18) {
        ageInpt.addClass('invalid');
        ageInpt.trigger('focus');

        $('span', ageInpt.parent()).text('You should be at least 18 years old to click the submit button.');
    } else {
        ageInpt.removeClass('invalid');
        $('span', ageInpt.parent()).text('');
    }
}

function formValidateProfession() {
    const professionInpts = $('input[name="profession"]');
    let selected;
    professionInpts.each(function () {
        if ($(this).is(':checked')) {
            selected = $(this);
        }
    });

    if (!selected) {
        $('span', professionInpts.parent()).text('Select a profession.');
    } else {
        $('span', professionInpts.parent()).text('');

        if (selected.attr('id') === 'other') {
            const otherProfInpt = $('#other-profession');
            if (!otherProfInpt.val() || otherProfInpt.val().trim().length < 5) {
                otherProfInpt.addClass('invalid');
                otherProfInpt.trigger('focus');

                $('span', otherProfInpt.parent()).text('Write your profession.');
            } else {
                otherProfInpt.removeClass('invalid');
                $('span', otherProfInpt.parent()).text('');
            }
        }
    }
}

function formValidateAgree() {
    const agreeInpt = $('#agree');
    if (agreeInpt.is(':not(:checked)')) {
        $('label', agreeInpt.parent()).addClass('invalid');
        agreeInpt.trigger('focus');
    } else {
        $('label', agreeInpt.parent()).removeClass('invalid');
    }
}