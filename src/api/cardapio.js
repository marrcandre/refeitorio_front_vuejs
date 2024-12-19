import axios from "axios";

export default class CardapioApi {
  async buscarTodosOsCardapios() {
    const { data } = await axios.get("/cardapios/");
    return data.results;
  }

  async adicionarCardapio(cardapio) {
    const { data } = await axios.post("/cardapios/", cardapio);
    return data.results;
  }

  async atualizarCardapio(cardapio) {
    const { data } = await axios.put(`/cardapios/${cardapio.id}/`, cardapio);
    return data.results;
  }

  async excluirCardapio(id) {
    const { data } = await axios.delete(`/cardapios/${id}/`);
    return data.results;
  }
}
