import axios from "axios";

export default class GetData {
  static async getUsers() {
    const response = await axios.get("https://636de0e191576e19e3326ef1.mockapi.io/all/petsgram");
    return response;
  }
}