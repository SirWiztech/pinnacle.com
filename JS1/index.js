function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [ "N7,000 Welcome Bonus","Friendly User Interface", "Global Enability", "Fast Withdrawal", "24/7 Customer Support"]       
const el = document.getElementById('Typewriter');

let sleepTime = 200; // Increased sleep time to make it slower
 
let curphraseIndex = 0;

const writeLoop = async () => {
    while (true){
        let curWord = phrases[curphraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
        
        await sleep(sleepTime * 10); // Increased sleep time between words

        if (curphraseIndex === phrases.length - 1){
            curphraseIndex = 0;
        } else {
            curphraseIndex++;
        }
    }
};

writeLoop()

// onload modal
document.addEventListener("DOMContentLoaded", function(){
    var myModal = new bootstrap.Modal(document.getElementById('myModal',{keyboard: false}));
    myModal.show();
})

function form1(){
    document.getElementById('form').style.display = 'block'
    document.getElementById('payment').style.display = 'none'
}

function success(){
    document.getElementById('success1').style.display = 'block'
    document.getElementById('form').style.display = 'none'
    document.getElementById('success2').style.display = 'block'
}

function paynow(){
    document.getElementById('payment').style.display = 'block'

}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.animate');
hiddenElements.forEach((el) => observer.observe(el));

function send(){
    var number = +2348146247930;

    var name = document.getElementById('name100').value;
    var surname = document.getElementById('name200').value;
    var image = document.getElementById('inputGroupFile02').value;

    var url = 'https://wa.me/' + number + "i" + name + ' ' + surname + 'Have paid, below is the image' + image;

    window.open(url, 'blank').focus();
}