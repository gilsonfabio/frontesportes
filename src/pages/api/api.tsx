import axios from "axios";

const api = axios.create({
  //baseURL: "https://transparencia.aparecida.go.gov.br/portal-transparencia/assets/json/faq.json",
  baseURL: "http://10.111.134.40:3333"
});

export default api;