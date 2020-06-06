import styles from './hello-world-button.scss';

const HelloWorldBtn = {

    render() {
        const btn = document.createElement('button');
        btn.innerHTML = 'Hello World';
        console.log(styles);
        btn.classList.add('hello-world-btn');
        btn.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }

        const body = document.querySelector('body');
        body.appendChild(btn);
    }
}

export default HelloWorldBtn;
