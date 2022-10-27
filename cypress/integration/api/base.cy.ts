import HttpClient from '../../support/http-client/http-client';
import { BASE_URL_API } from '../../support/constants/constants';
import { METHODS } from '../../support/constants/types';

describe('API tests:', () => {
    const httpClient = new HttpClient();
    let formData: any;

    describe('GET Requests:', () => {
        it('Should correctly get data of users list...', () => {
            httpClient.request(METHODS.GET, `${BASE_URL_API}users`).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body.data.length).be.greaterThan(0);
            });
        });

        it('Should correctly get data of list resource', () => {
            httpClient.request(METHODS.GET, `${BASE_URL_API}unknown`).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body.data.length).greaterThan(0);
            });
        });
    });

    describe('POST requests:', () => {
        it('Should correctly create new user',  () => {
            formData = {
                name: "Vladimir",
                job: "SDET"
            }

            httpClient.request(METHODS.POST,`${BASE_URL_API}users`, formData).then(res => {
                expect(res.status).to.eq(201);
                expect(res.body).to.include.keys(formData);
                expect(res.body.name).to.eq(formData.name);
            });
        });

        it('Should correctly get auth token',  () => {
            formData = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }

            httpClient.request(METHODS.POST, `${BASE_URL_API}login`, formData).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body).to.have.property('token');
                expect(res.body.token.length).greaterThan(0);
            });
        });

        it('Should get error message after auth request with incorrect credentials',() => {
            formData = {
                email: "sydney@fife"
            }

            httpClient.request(METHODS.POST, `${BASE_URL_API}register`, formData).then(res => {
                expect(res.status).to.eq(400);
                expect(res.body.error).to.eq('Missing password');
            });
        });
    });

    describe('PUT requests:', () => {
        it('Should correctly put users data', () => {
            formData = {
                name: "morpheus",
                job: "zion resident"
            }

            httpClient.request(METHODS.PUT, `${BASE_URL_API}users/2`, formData).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body).to.include.keys(formData);
                expect(res.body.name).to.eq(formData.name);
            });
        });
    });

    describe('PATCH requests:', () => {
        it('Should correctly patch users data', () => {
            formData = {
                name: "morpheus",
                job: "zion resident"
            }

            httpClient.request(METHODS.PATCH, `${BASE_URL_API}users/2`, formData).then(res => {
                expect(res.status).to.eq(200);
                expect(res.body).to.include.keys(formData);
                expect(res.body.name).to.eq(formData.name);
            });
        });
    });

    describe('DELETE requests:', () => {
        let userID;
        // Здесь должен быть ID существующего юзера. Данная API не предоставляет возможность получать актуальную выборку
        // существующих юзеров.
        it('Should correctly remove the user',  () => {
            userID = 2;

            httpClient.request(METHODS.DELETE, `${BASE_URL_API}users/${userID}`).then(res => {
                expect(res.status).to.eq(204);
            });
        });

        // Здесь должен быть ID НЕсуществующего юзера. Данная API не предоставляет возможность получать актуальную выборку
        // существующих юзеров.
        it('Should get an error deleting a non-existent user',  () => {
            userID = 100500;

            httpClient.request(METHODS.DELETE, `${BASE_URL_API}users/${userID}`).then(res => {
                expect(res.status).to.eq(204);
            });
        });
    });
});