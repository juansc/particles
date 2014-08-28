// The shortcut 
//
//      this.property = optionalParameter || default 
//
// is nice because if the left hand side is undefined or
// null, then the left side is falsy and then we get the
// value on the right.

function Particle ( position, velocity, acceleration ){
    this.position = position || new Vector ( 0, 0 );
    this.velocity = velocity || new Vector ( 0, 0 );
    this.acceleration = acceleration || new Vector ( 0, 0 );
    //alert("Position: " + this.position.toString() + "\nVelocity: " + this.velocity.toString() + "\nAcceleration: " + this.acceleration.toString() );
}

Particle.prototype.move = function () {
    //First change velocity, then change position.
    this.velocity.add( this.acceleration );
    this.velocity.scale( 0.98);
    this.position.add( this.velocity );
}

