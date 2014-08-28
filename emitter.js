function Emitter ( position, velocity, spread ){
    this.position = position;
    this.velocity = velocity;
    this.spread = spread || Math.PI / 32;
    this.drawColor = "#999";
};

Emitter.prototype.emitParticle = function(){
    // We figure out the angle at which the particle will be launched.
    var angle = this.velocity.getAngle() + this.spread*( 1 - Math.random() * 2 );

    // The speed of the particle.
    var magnitude = this.velocity.getMagnitude();

    // Speed + direction = velocity
    var particleVelocity = Vector.fromPolar( angle, magnitude );

    return new Particle( this.position.clone(), particleVelocity );
};