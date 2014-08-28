function Field ( position, strength ){
    this.position = position || new Vector (0, 0);
    this.strength = strength || 2;
};

Field.prototype.calcAccel = function( particle ){
    var vect = this.position.clone();
    vect.subtract( particle.position );
    var scaleFactor = this.strength/(vect.getMagnitude()*vect.getMagnitude());
    vect.scale( scaleFactor );
    return vect;
};