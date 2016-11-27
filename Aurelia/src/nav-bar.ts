/// <reference path="../node_modules/@types/materialize-css/index.d.ts" />

export class NavBar {

    activate(params) {
        setTimeout(() => {
            $('.button-collapse').sideNav();
        }, 50);
    }
}
