const sr = ScrollReveal({ reset: true});

// sr.reveal('.head',{ delay: 200 });

// sr.reveal('.items-prevention',{ delay: 200,distance: '300px' });


var RightSlide = {
    origin: 'right',
    distance : '200px',
    delay : 200
};

var LeftSlide = {
    origin : 'left',
    distance : '200px',
    delay : 100
}
sr.reveal('.vaccine',{rotate: {
    x: 50,
    z: 50
}});

sr.reveal('.header-text',LeftSlide);

sr.reveal('.title',RightSlide);

 sr.reveal('.para-mask',LeftSlide);

 sr.reveal('.paragraph',LeftSlide);