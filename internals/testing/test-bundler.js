// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';

// If we need to use Chai, we'll have already chaiEnzyme loaded
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

// Include all .(j|t)sx? files under `app`, except app.ts, reducers.ts, and routes.ts.
// This is for code coverage
const context = require.context('../../app', true, /^^((?!(app|reducers|routes)|.*\.d).)*\.(j|t)sx?$/);
context.keys().forEach(context);
