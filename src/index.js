
import 'bootstrap';

import './styles.scss';

import HelloWorldBtn from './components/hello-world-button/hello-world-button';
//import addImage from './add-image';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render('Main');

HelloWorldBtn.render();



//addImage();



console.log('webpack ' + process.env.NODE_ENV  + ' mode');
