window.addEventListener('scroll', () => {
    const screenHeight = document.documentElement.scrollTop || document.body.scrollTop;

    const b = document.getElementById('b').offsetTop;
    const c = document.getElementById('c').offsetTop;
    const d = document.getElementById('d').offsetTop;

    if (screenHeight < b) {
        document.getElementsByClassName('device-wrapper')[0].setAttribute('class', 'device-wrapper hidden')
    } else {
        document.getElementsByClassName('device-wrapper')[0].setAttribute('class', 'device-wrapper')
        if (screenHeight >= d) {
            document.getElementsByClassName('screen')[0].children[0].style.transform = 'translateY(-66.7%)'
            document.getElementById('business-d').setAttribute('class', 'business')
        }
        if (screenHeight >= c) {
            document.getElementsByClassName('screen')[0].children[0].style.transform = 'translateY(-33.3%)'
            document.getElementById('business-c').setAttribute('class', 'business')
        } else if (screenHeight >= b) {
            document.getElementById('business-b').setAttribute('class', 'business')
        } else {
        }
    }

});


document.body.addEventListener('mousemove', e => {
    Object.assign(document.getElementsByClassName('follower')[0].style, {
        left: e.pageX - 8,
        top: e.pageY - 8,
    })
});

document.getElementsByClassName('hamburger')[0].addEventListener('click', (e) => {
    document.getElementsByClassName('hamburger')[0].setAttribute('class',
        e.target.getAttribute('class').includes('unfolded') ? 'hamburger' : 'hamburger unfolded')
});


document.getElementsByClassName('title')[0].addEventListener('mousemove', (e) => {
    Object.assign(document.getElementsByClassName('brand')[0].style, {
        transform: `scale(1.2) rotateX(${-(e.clientY - window.innerHeight / 2) / 20}deg) rotateY(${(e.clientX - window.innerWidth / 2) / 20}deg)`
    })
})

document.getElementsByClassName('title')[0].addEventListener('mouseleave', (e) => {
    Object.assign(document.getElementsByClassName('brand')[0].style, {
        transform: `scale(1) rotateX(0deg) rotateY(0deg)`
    })
})

const businessB = document.getElementById('business-b').children;
const businessC = document.getElementById('business-c').children;
const businessD = document.getElementById('business-d').children;


for (let i = 0; i < businessB.length; i++) {
    businessB[i].style.transitionDelay = 0.02 * i + 's';
}


for (let i = 0; i < businessC.length; i++) {
    businessC[i].style.transitionDelay = 0.02 * i + 's';
}


for (let i = 0; i < businessD.length; i++) {
    businessD[i].style.transitionDelay = 0.02 * i + 's';
}