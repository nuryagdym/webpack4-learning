import image1 from '../../media/imag1.png';
import './kiwi.scss';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.width = '200';
        img.src = image1;
        img.classList.add('kiwi-image');
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}
export default KiwiImage;
