let like = JSON.parse(localStorage.getItem('like'));
let container = document.querySelector('.container'),
    bimg = document.querySelector('.dvImage'),
    name = document.getElementById('name'),
    loc = document.getElementById('location'),
    email = document.getElementById('email'),
    about = document.getElementById('about');

window.addEventListener('load', () => {
    bimg.style.backgroundImage = like.img;
    name.textContent = like.name;
    loc.textContent = like.ulocation;
    email.textContent = like.email;
    if(like.gender === 'male') {
        about.textContent = aboutMale[random(0,12)];
    } 
    if(like.gender === 'female') {
        about.textContent = aboutFemale[random(0,12)];
    } 
})

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let aboutMale = [
    'I like sticking my hands in towels. And I like smelling books.',
    'Shit, I’d date me.',
    'I feel as out of place on tinder as a nun doing squats in a cucumber field.',
    'I take hot showers because I like practicing burning in hell.',
    'I don’t have COVID-19.',
    'My ideal date? I pick you up in my car, and there’s candles gently licking the air on the dashboard Hey, there’s candles on the dashboard’, I smile. ‘Yeah, I know.’ We take a drive, go to a restaurant, have a wonderful meal and talk about life, goals, and ideals.  As we leave, you notice my car is ablaze. ‘Hey, your car is on fire!’. ‘It’s okay – it’s not mine’ – at which point I pull out marshmallows. We cook them & eat them. Then I kiss you passionately. In front of the burning car.',
    'I do stuff, I also do things.',
    'Roses are red, bacon is red. Poems are hard. Bacon.',
    'Hello Ladies, Look at the last guy you matched, now back to me, now back to the last guy you matched, now back to me. Sadly, he isn’t me, but if he stopped leaving his bio blank, and had better pictures, he could be like me. Look down, back up, where are you? You’re on Tinder with the man of your dreams. What’s in your hand, back to me. I have it. It’s a pizza with your favourite toppings on it. Look again, the Pizza is now your favourite dog. Anything’s possible when you match me on Tinder.',
    'I’m the kinda guy you can take home to meet your mom. She’ll think I’m super funny, and charming..and cute, but actually kind of sexy at the same time? She falls in love with me. I..think I feel the same way. We get married. I’m your dad now. I confront you, ‘young lady why are you on Tinder?’ You are now grounded.',
    'Grandfather seeking companion for granddaughter. She suffers from poor choices.',
    'Runner up for Time’s ‘Sexiest IT Man Alive’. Once rescued a fireman and a puppy from a burning building. And after mastering French, I became an international super spy. Right now, I’m sailing across the Pacific, stealing top-secret information, and sipping Moscow Mules…shaken, not stirred. Okay, okay. Perhaps I exaggerated *just* a tad. But I can fix your laptop, and puppies love me. Message me for more straight talk, and I’ll send you FB links, delicious cocktail recipes, and MUCH more.”',
    `Two reasons to date me:
    Because you’d be the good looking one
    Please`
];
let aboutFemale = [
    'I like my men like I like my coffee, ground up and in the freezer.',
    'I like sticking my hands in towels. And I like smelling books.',
    'I’m looking for a guy who is really trusting and healthy! You must have both kidneys, non smoker, and not be a big drinker or take any drugs that could damage the liver…Type O negative blood a plus! ESFP',
    'Shit, I’d date me.',
    'I feel as out of place on tinder as a nun doing squats in a cucumber field.',
    'I take hot showers because I like practicing burning in hell.',
    'I don’t have COVID-19.',
    'Let’s be honest I’m on Tinder and my first picture is of me in a bikini, I’m not looking for a relationship or a friend.',
    'All men are pigs and I’m in the mood for bacon.',
    'I do stuff, I also do things.',
    'Roses are red, bacon is red. Poems are hard. Bacon.',
    'Went to a party dressed as an egg, and got with a guy who was dressed as a chicken. A life long question was answered that night. It was the chicken…',
    'Threesome? No thanks…if I want to disappoint two people in the same room, I’d have dinner with my parents.'
];

