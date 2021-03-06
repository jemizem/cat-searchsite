//import MoonIcon from '../../assets/icons/moon.svg'

export default class DarkMode {
    constructor({$app}) {

        this.$target = document.createElement('div');
        this.$target.className = "toggleMode";
        this.$target.innerHTML = 'π';

        $app.appendChild(this.$target);
        
        this.$target.addEventListener('click', e => {
            this.toggleTheme();
        })
    }

    
    toggleTheme() {

        // μ°μ μμ 1 : body dataset μ‘°ν 
        // μ°μ μμ 2 : λΈλΌμ°μ  λͺ¨λ μ‘°ν 
        const originTheme = document.body.dataset.theme 
        || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        const toggleTheme = originTheme === 'dark' ? 'light' : 'dark';

        this.$target.innerHTML = originTheme === 'dark' ? 'π' : 'π';

        document.body.setAttribute('data-theme', toggleTheme);
    }
}