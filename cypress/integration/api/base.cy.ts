import HttpClient from '../../support/http-client/http-client';
import {BASE_URL_API} from "../../support/constants/constants";

describe('Тест api:', () => {
    const httpClient = new HttpClient();

    it('Просто тест', () => {
        httpClient.getResource(`${BASE_URL_API}users`).then(res => {
            console.log(res);
        });
    });
});