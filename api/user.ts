import { User } from './../interfaces/data.interfaces';
import axios from "axios";
export const deleteUserApi = async (id: string) => {
	const { status } = await axios.delete(`https://634f61eb4af5fdff3a73481d.mockapi.io/users/${id}`);
	return status;
};

export const createUserApi = async (user: User) => {
	const { status } = await axios.post(`https://634f61eb4af5fdff3a73481d.mockapi.io/users`,user);
	return status;
};
export const updateUserApi = async (user: User) => {
	const { status } = await axios.put(`https://634f61eb4af5fdff3a73481d.mockapi.io/users/${user.id}`,user);
	return status;
};