class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  async getFullList() {
    try {
      const result = await this.api.get("/characters");
    return result;
  }
    catch {
      (err) => console.log(err);
    }  
  }

  async getOneRegister(id) {
    try {
      const result = await this.api.get("/characters/" + id);
    return result;
  }
    catch {
      (err) => console.log(err)
    };
  }

  async createOneRegister(character) {
    try {
      const result = await this.api.post('/characters/', character);
      return result;
      }
      catch {
        (err) => console.log(err);
      }
    }

  async updateOneRegister(character) {
    try {
      const result = await this.api.put('/characters/' + character.id, character);
      return result;
      }
      catch {
        (err) => console.log(err);
      }
  }

  async deleteOneRegister(id) {
    try {
      const result = await this.api.delete('/characters/' + id);
      return result;
    }
    catch {
      (err) => console.log(err);
    }
  }
}
