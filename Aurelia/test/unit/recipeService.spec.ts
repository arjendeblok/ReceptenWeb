import './setup';
import { HttpClient } from 'aurelia-fetch-client';
import { RecipeService } from '../../src/RecipeService'

class HttpStub extends HttpClient {
    url;
    itemStub;

    fetch(url): any {
        var response = this.itemStub;
        this.url = url;
        return new Promise((resolve) => {
            resolve({ json: () => response });
        });
    }

    configure(config) {
        return this;
    }
}

describe('the RecipeService module', () => {
    it('sets fetch response to recipes', (done) => {
        var itemStubs = [1];

        var getHttp = () => {
            var http = new HttpStub();
            http.itemStub = itemStubs;
            return http;
        };

        var sut = new RecipeService(getHttp);

        sut.initialize().then(() => {
            sut.retrieve().then((recipes) => {
                expect(recipes).toBe(itemStubs);
                done();
            });
        });
    });
});
