
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext( '2d' );

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var particles = [];
var maxParticles = 2000;
var particlesPerSecond = 50;
var particleSize = 1.5;

var emitters = new Emitter( new Vector( 50, 50 ), Vector.fromPolar( -Math.PI/2, 15 ),0.1);
var fields = [];
fields[ 0 ] = new Field( new Vector( canvas.width/2 ,canvas.height/2 ), 10 );
fields[ 1 ] = new Field( new Vector( canvas.width/4 ,canvas.height/4 ), -20 );

function clearCanvas (){
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
}

function update (){
    addNewParticles();
    plotParticles( canvas.width, canvas.height );
}

function addNewParticles() {
    // If there are too many particles
    if( particles.length > maxParticles ){ 
        return;
    }
    // Have each emitter release the particles.
    for( var j = 0; j < particlesPerSecond; j++ ){
        particles.push( emitters.emitParticle() );
    }
}

function plotParticles( boundsX, boundsY ){
    var currentParticles = [];

    for ( var i = 0; i < particles.length; i++ ) {
        var particle = particles[ i ];
        var pos = particle.position;
        particle.acceleration = new Vector( 0, 0);
        var aceelVect;
        for( var j = 0; j < fields.length; j++ ){
            accelVect = fields[ j ].calcAccel( particle );
            particle.acceleration.add( accelVect );
        }


        if( pos.x < 0 || pos.x > boundsX || pos.y < 0 || pos.y > boundsY ){
            continue;
        } 

        particle.move();

        currentParticles.push( particle );
    }

    particles = currentParticles;
}

function drawParticles() {
    ctx.fillStyle = "rgb(150,0,0)";
    for( var i = 0; i < particles.length; i++ ){
        var position = particles[ i ].position;
        ctx.fillRect( position.x, position.y, particleSize, particleSize );
    }
}

function queue (){
    window.requestAnimationFrame( loop );
}

function loop (){
    clearCanvas();
    update();
    drawParticles();
    queue();
}

document.onmousemove = function ( e ){
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var emitterPosition = new Vector( mouseX, mouseY );
    emitters.position = emitterPosition;
}

loop();
