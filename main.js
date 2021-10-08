

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
    ];

    var randomXcuse = Math.floor(Math.random() * xcuses.length);

    console.log(xcuses[randomXcuse]);
    document.getElementById("xcuseMessage").innerHTML=xcuses[randomXcuse];

}
