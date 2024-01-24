import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async() => {
    const getData = await axios.get(baseUrl);
    return getData.data;
};

const createData = async() => {
    const createdData = await axios.post(baseUrl);
    return createdData.data;
};

const getServices = { getAll, createData };

export default { getServices };