import './heading.scss';
import _ from 'lodash';
import $ from 'jquery';

class Heading {
    render(pageTitle) {
        const h1 = $('<h1>');
        const body = $('body');
        h1.text('Webpack is awesome. Page: ' + _.upperFirst(pageTitle));
        body.append(h1);
    }
}

export default Heading;
