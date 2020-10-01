const { v4: uuidV4 } = require("uuid");

module.exports = class Band {
  constructor(name = "no-name") {
    this.id = uuidV4(); // Identificador único
    this.name = name;
    this.votes = 0;
  }
};
