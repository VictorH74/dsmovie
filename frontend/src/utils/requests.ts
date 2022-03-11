// VARIÁVEL DE AMBIENTE  /  "http://localhost:8080" SERÁ USADO CASO A VARIÁVEL "REACT_APP_BACKEND_URL" NÃO FOR DEFINIDA
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080"; 
