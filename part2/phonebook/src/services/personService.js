import axios from 'axios';
const baseUrl = "/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
}

const remove = id => {
  console.log(id,"id")
  const request = axios.delete(`${baseUrl}/${id}`);
  console.log(request,"from service file")
  return request.then(response => response.data);
}

const personService = { getAll, create, update, remove }

export default personService;