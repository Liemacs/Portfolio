$('#btn-1').click(function() {
    $('.slide').removeClass('active');
    $('#content-1').addClass('active');
    $('#content-1').show();
    $('#content-2').hide();
    $('#content-3').hide();
})

$('#btn-2').click(function() {
    $('.slide').removeClass('active');
    $('#content-2').addClass('active');
    $('#content-1').hide();
    $('#content-2').show();
    $('#content-3').hide();
})

$('#btn-3').click(function() {
    $('.slide').removeClass('active');
    $('#content-3').addClass('active');
    $('#content-1').hide();
    $('#content-2').hide();
    $('#content-3').show();
})

document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 80
        const y = (window.innerHeight - e.pageY * speed) / 80

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}