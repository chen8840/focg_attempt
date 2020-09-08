class Vector3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  normalize() {
    var l = this.x * this.x + this.y * this.y + this.z * this.z;
    if (l > 0) {
      var sqrtL = Math.sqrt(l);
      this.x = this.x / sqrtL;
      this.y = this.y / sqrtL;
      this.z = this.z / sqrtL;
    }
  }

  dotProduct(v) {
    return v.x * this.x + v.y * this.y + v.z * this.z;
  }

  mulScalar(l) {
    return new Vector3(l * this.x, l * this.y, l * this.z);
  }

  add(v) {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
  }

  reduce(v) {
    return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
  }

  logSelf() {
    console.log(this.x, this.y, this.z);
  }
}

Vector3.crossProduct = function(a, b) {
  return new Vector3(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
}

export default Vector3;