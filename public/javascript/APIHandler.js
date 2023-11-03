class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  async getFullList() {
    const result = await this.api.get("/characters");
    return result;
  }

  async getOneRegister(id) {
    const result = await this.api.get("/characters/" + id);
    return result;
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
