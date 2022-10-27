import HttpClient from '../../support/http-client/http-client';
import { BASE_URL_API } from '../../support/constants/constants';

describe('API tests:', () => {
    const httpClient = new HttpClient();

    describe('GET Requests:', () => {
        it('Should correctly get data of users list...', () => {
            httpClient.getResource(`${BASE_URL_API}users`).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body.data.length).be.greaterThan(0);
            });
        });

        it('Should correctly get data of list resource', () => {
            httpClient.getResource(`${BASE_URL_API}unknown`).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body.data.length).greaterThan(0);
            });
        });
    });
});