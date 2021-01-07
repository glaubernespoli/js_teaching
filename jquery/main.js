// let count = 1;
// document.querySelector('button').addEventListener('click', () => {
//     const content = document.getElementById('content');
//     // const content = document.querySelectorAll('#content')[0];

//     content.textContent = `Button clicked ${count++} times.`;
// });


// $('button').on('click', () => {
//     $('#content').text(`Button clicked ${count++} times.`);
// });

// $('h1:first-of-type').on('mouseover', () => {
//     $('h1:first-of-type').addClass('red');
// });

// $('h1:first-of-type').on('mouseout', () => {
//     $('h1:first-of-type').removeClass('red');
// });

// $('h1:first-of-type').on('mouseover', () => {
//     $('h1:first-of-type').toggleClass('red');
// });

$('h1').each(function(idx, el) {
    $(el).on('mouseover', function() {
        $(this).addClass('red');
    }).on('mouseout', function() {
        $(this).removeClass('red');
    });
});

// <!-- mouseover even element: green color -->
//     <!-- mouseover odd element: blue color -->

$('li').each(function(idx, el) {
    const element = $(el);
    const color = idx % 2 ? 'blue' : 'green';
    element.on('mouseover', function() {
        element.toggleClass(color);
    }).on('mouseout', function() {
        element.toggleClass(color);
    });
});
