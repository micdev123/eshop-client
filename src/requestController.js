import axios from 'axios'

// Base URL :: Backend URL Link
const BASE_URL = "http://localhost:5000/api/";

// API Requester
export const API_Request = axios.create({
    baseURL: BASE_URL
})