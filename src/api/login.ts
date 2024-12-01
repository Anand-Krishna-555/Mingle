import apiClient from './apiClient';
import { ApiPoint } from './apiPoint';

export const addNewUser = async (payload: object) => {
    const response = await apiClient.post(ApiPoint.ADD_USER, payload); // Base URL already included
    return response.data;
};

export const getUser = async (payload: object) => {
    const response = await apiClient.post(ApiPoint.GET_USER, payload);
    return response.data;
};
