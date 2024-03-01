class GetError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class NotFound extends GetError {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}
