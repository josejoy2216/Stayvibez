const menuRespo = document.querySelector('.homepage-head-respo')
const menu = document.querySelector('.homepage-head')

menuRespo.innerHTML = `
    <div class="my-navy-respo">
    <button class="close">x</button>
    <div class="menu-respo">
        <ul>
            <li class="pro"><a href="#">Profile</a></li>
            <li><a href="home.html">Home</a></li>
            <li class="abt"><a href="#about">About</a></li>
            <li class="ser"><a href="#service">Services</a></li>
            <li class="blg"><a href="#blog">Blogs</a></li>
            <li class="con"><a href="#contact">Contact</a></li>
            <li><a href="list.html">Join Us</a></li>
            <li class="login"><a href="login.html">Login</a></li>
            <li class="logout">Logout</li>
        </ul>
    </div>
    </div>
`;

menu.innerHTML = `
    <div class="my-navy">
    <div class="logo-div">
        <a href="#">
            <img src="./img/logo.png" class="logy" alt="logo">
        </a>
    </div>
    <div class="open-up">
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <div class="menu">
        <ul>
            <li><a href="#">Home</a></li>
            <li class="abt"><a href="#about">About</a></li>
            <li class="ser"><a href="#service">Services</a></li>
            <li class="blg"><a href="#blog">Blogs</a></li>
            <li class="con"><a href="#contact">Contact</a></li>
            <li><a href="list.html">Join Us</a></li>
            <li class="login"><a href="login.html">Login</a></li>
            <li class="logout">Logout</li>
            <li class="pro"><a href="#">Profile</a></li>
        </ul>
    </div>
    </div>
`;

const openUp = document.querySelector('.open-up');
const closeBtn = document.querySelector('.close');

openUp.addEventListener('click', () => {
    menuRespo.style.transform = 'translateX(0%)';
})

closeBtn.addEventListener('click', () => {
    menuRespo.style.transform = 'translateX(-100%)';
})