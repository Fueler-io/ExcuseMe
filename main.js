

function getRandomXcuse() {

    const xcuses = [
        "I’m too old to start",
        "I’m not talented enough",
        "I wasn’t born in the right area",
        "I come from a poor background",
        "I’m not smart enough",
        "I don’t have the support",
        "I don’t have enough time to discover what I like",
        "My family and friends don’t think I’m capable.",
        "I don’t know if I will succeed",
        "I’ve already dedicated myself to a different path",
        "I’m just not lucky enough",
        "I didn’t have the right teachers",
        "I’m not destined to succeed",
        "I’m not motivated enough",
        "I’m too easily distracted by other things",
        "I’m not educated enough",
        "I can’t handle failure",
        "I will start tomorrow",
        "I’m not ready",
        "I don’t believe I can do it",
        "I'll start from tomorrow",
        "Internet was down",
        "Arthik istithi theek na hamari",
        "Chacha, Vidhayak nhi h hmare",
        "My cats having an abortion. I need to be there for HIM.",
        "Sorry, my mom said No..",
        "I don't feel smart today.",
        "This is new to me.", 
        "I don't have enough skills", 
        "I'm not good enough to complete this challenge", 
        "Grandma tried to poison me. Again.",
        "I ate cat food, intead of tuna",
        "I broke my arm reaching for a sandwich",
        "My wife found out I was cheating and threw all my stuff out",
        "My refrigerator fell on me",
        "My convertible is full of flour",
        "I just put my casserole in the oven",
        "I poked myself in the eye with a hairbrush",
        "I broke my foot after I got up from the toilet",
        "I got bitten by a mosquito.",
        "I fell over in the shower and knocked myself out",
        "I rolled out of bed and knocked myself out so I missed my alarm.",
        "I was in the loo and my legs fell asleep. When I stood up, I fell and broke my ankle",
        "My girlfriend bit me in a bad place",
        "A fox stole my car keys while I was asleep.",
        "I had a dream that my cat died and now I’m afraid to leave her.",
        "A chicken attacked my mother.",
        "There’s a crocodile in my house.",
        "My goldfish is ill.",
        "I have a new puppy and I need to play with him.",
        "There’s a bird in my house – I don’t know what to do.",
        "My cat has hiccups and I can’t leave her.",
        "I accidentally got on a plane."
    ];

    var randomXcuse = Math.floor(Math.random() * xcuses.length);

    console.log(xcuses[randomXcuse]);
    document.getElementById("xcuseMessage").innerHTML=xcuses[randomXcuse];

}
