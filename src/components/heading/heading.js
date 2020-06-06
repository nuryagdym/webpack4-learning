import './heading.scss';
import _ from 'lodash';

class Heading {
    render(pageTitle) {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Webpack is awesome. Page: ' + _.upperFirst(pageTitle);
        body.appendChild(h1);
    }
}

export default Heading;
