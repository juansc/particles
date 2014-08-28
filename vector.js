// This code is from the tutorial by Daniel Church.
// http://gamedevelopment.tutsplus.com/tutorials/make-your-game-pop-with-particle-effects-and-quadtrees--gamedev-2138
// This has been slightly modified and heavily commented for my own educational purposes
// in learning Object Oriented JavaScript.


// Although this class is called vectors, it should actually called Vector,
// because most of the methods are actually functions of vectors in Calculus.

function Vector( x, y ){
    //alert("vector made");
    this.x = x;
    this.y = y;
}

// We clone this vector.
Vector.prototype.clone = function(){
    return new Vector(this.x,this.y);
}

// We add another vector to this vector.
Vector.prototype.add = function( vector ){
    this.x += vector.x;
    this.y += vector.y;
}

// We return the sum of two vectors.
Vector.prototype.plus = function( vector ){
    return this.clone().add( vector );
}

// We scale this vector.
Vector.prototype.scale = function( factor ){
    this.x *= factor;
    this.y *= factor;
}

// We return the scaling of this vector.
Vector.prototype.times = function( factor ){
    return this.clone().scale( factor );
}

// We subtract another vector from this vector.
Vector.prototype.subtract = function( vector ){
    this.x -= vector.x;
    this.y -= vector.y;
}

// We return the difference of these two vectors.
Vector.prototype.minus = function( vector ){
    return (this.clone()).subtract( vector );
} 

// Magnitude of vector
Vector.prototype.getMagnitude = function(){
    return Math.sqrt( this.x * this.x + this.y * this.y );
}

// Distance
Vector.prototype.distance = function( vector ){
    return this.minus( vector ).magnitude();
}

// Dot product
Vector.prototype.dot = function( vector ){
    return this.x * vector.x + this.y * vector.y;
}

// We get a vector in between.
Vector.prototype.interpolate = function( x, vector ){
    return this.plus(other.minus( this ).times( x ) );
}

// Make a vector of magnitude 1.
Vector.prototype.normalize = function() {
    this.scale(1.0 / this.magnitude());
}

// Return normalized copy of clone.
Vector.prototype.normalCopy = function(){
    return this.clone().normalize();
} 

// Rotate in radians
Vector.prototype.rotate = function ( angle ){
    return new Vector( this.x * Math.cos(angle) - this.y * Math.sin(angle),
            this.x * Math.sin(angle) + this.y * Math.cos(angle));
}

// Move
Vector.prototype.transform = function ( offset, angle ){
    this.rotate( angle ).add( offset );
}

Vector.prototype.average = function(other) {
    return this.interpolate(0.5, other);
};

Vector.fromPolar = function (angle, radius) {
    //alert( "got here");
    return new Vector(radius * Math.cos(angle), radius * Math.sin(angle));
};

Vector.prototype.getAngle = function () {
    return Math.atan2( this.y, this.x);
}

Vector.prototype.toString = function() {
    var string = "" + this.x + ", " + this.y + "";
    return string;
}

