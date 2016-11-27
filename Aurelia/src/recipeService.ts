import { lazy } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

// polyfill fetch client conditionally
const fetch = !self.fetch ? System.import('isomorphic-fetch') : Promise.resolve(self.fetch);

export class RecipeService implements IRecipeService {
    httpClient: HttpClient;

    constructor(@lazy(HttpClient) private getHttpClient: () => HttpClient) {
    }

    async initialize(): Promise<void> {
        await fetch;
        const http = this.httpClient = this.getHttpClient();

        this.httpClient.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:50089/api/');
        });
    }

    retrieve(): Promise<IRecipe[]> {
        return this.httpClient.fetch("recipe")
            .then(r => r.json<IRecipe[]>());
    }

    async get(id: number): Promise<IRecipe> {
        var response = await this.httpClient.fetch(`recipe/${id}`);
        return response.json<IRecipe>();
    }

    post(recipe: IRecipe): Promise<number> {
        let json = JSON.stringify(recipe);
        return this.httpClient.fetch("recipe",
            {
                method: 'post',
                body: json,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(r =>
                r.json<number>());
    }

    async put(recipe: IRecipe): Promise<number> {
        let json = JSON.stringify(recipe);
        var result = await this.httpClient.fetch("recipe",
            {
                method: 'put',
                body: json,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

        return result.json<number>();
    }
}