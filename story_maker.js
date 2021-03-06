function makeStory() {
    // get form values (2 points)
    var noun5 = document.getElementById('noun5').value;
    var noun1 = document.getElementById('noun1').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var ing_verb1 = document.getElementById('ing_verb1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var city1 = document.getElementById('city1').value;
    var plural_noun3 = document.getElementById('plural_noun3').value;
    var adjective1 = document.getElementById('adjective1').value;
    var noun2 = document.getElementById('noun2').value;
    var number1 = document.getElementById('number1').value;
    var noun3 = document.getElementById('noun3').value;
    var adjective2 = document.getElementById('adjective2').value;
    var verb1 = document.getElementById('verb1').value;
    var plural_noun4 = document.getElementById('plural_noun4').value;
    var ing_verb2 = document.getElementById('ing_verb2').value;
    var number2 = document.getElementById('number2').value;
    var adverb1 = document.getElementById('adverb1').value;
    var noun4 = document.getElementById('noun4').value;
    var adjective3 = document.getElementById('adjective3').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "The Space " + noun5 + ".";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var message = "In 1981, the U.S. launched the first real Space " + noun1 + ". It was named Columbia and was piloted by two brave " + plural_noun1 + ". They had practiced " + ing_verb1 + " for two years and were expert " + plural_noun2 + ". Columbia took off from " + city1 + " using its powerful " + plural_noun3 + " and soared off into the " + adjective1 + " blue " + noun2 + ". At an altitude of " + number1 + " feet, it went into orbit around the " + noun3 + ". For people watching from Earth, it was a/an " + adjective2 + " sight to " + verb1 + "!";
    var message2 = "Who could really know that there were two " + plural_noun4 + " in space? It was mind " + ing_verb2 + ". After " + number2 + " orbits, the " + noun1 + " landed " + adverb1 + " at an air force " + noun4 + ". It was a/an " + adjective3 + " day for the U.S. Space Program.";

    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = message;
    document.getElementById('two').innerHTML = message2;





}
