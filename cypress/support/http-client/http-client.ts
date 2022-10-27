import { BASE_URL_API } from '../constants/constants';
import { METHODS } from '../constants/types';

class HttpClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = BASE_URL_API
    }

    // TODO: type request data.
    // Метод установки данных для запроса.
    setRequestData = (method: METHODS, url: string, body?: any): object => {
         return {
            method: method,
            form: true,
            url: url,
            body: body,
            failOnStatusCode: false,
        }
    }

    // Основной метод http-запроса.
    request = (method: METHODS, url: string, body?: any) => {
       if (method === METHODS.GET) {
           return cy.request(this.setRequestData(METHODS.GET, url));
       } else {
           return cy.request(this.setRequestData(method, url, body));
       }
    }
}

export default HttpClient;