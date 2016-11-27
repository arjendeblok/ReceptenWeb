/**** Arjen de Blok
Main entry for Aurelia. Matches aurelia-app="main" in index.html
*****/ 

import {Aurelia} from 'aurelia-framework';

// import styles from materialize and app
import '../node_modules/materialize-css/sass/materialize.scss';
import '../styles/styles.scss';

// import JavaScript for UI framework
import 'materialize-css';

// import promises library
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

// configure method for the aurelia configuration
export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();
    //.plugin('aurelia-validation');

  await aurelia.start();

  // start app.ts
  aurelia.setRoot('app');
}
