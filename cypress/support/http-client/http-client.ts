import { BASE_URL_API } from '../constants/constants';
import { METHODS } from '../constants/types';

class HttpClient {
    private baseUrl: string;

    constructor() {
        this.baseUrl = BASE_URL_API
    }

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

    // GET-метод получения данных эндпоинта.
    getResource = (url: string) => cy.request(this.setRequestData(METHODS.GET, url));

    // POST-метод отправки данных на эндпоинт.
    postResource = (method: METHODS.POST, url: string, body: any) => cy.request(this.setRequestData(method, url, body));

    // PUT-метод обновления данных эндпоинта.
    updateResource = (method: METHODS.PUT, url: string, body: any) => cy.request(this.setRequestData(method, url, body));

    // DELETE-метод удаления данных эндпоинта.
    deleteResource = (method: METHODS.DELETE, url: string, body: any) => cy.request(this.setRequestData(method, url, body));
}

export default HttpClient;