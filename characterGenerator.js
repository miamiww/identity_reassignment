const random = require('random');
const util = require('util');
const fs = require('fs');
var interpretations = JSON.parse(fs.readFileSync('interpretations.json', 'utf8'));
let characterName = process.argv[2];

let characteristics=["teamwork", "future vision","analytics","tinkering","collection","project management","ambition"];

character_stats="";
for(var i =0; i<characteristics.length;i++){
	let value = random.float(min=1, max=10);
	character_stats = character_stats + characteristics[i] +": " + value +"\n";
	// console.log(characteristics[i], value);
}

likes="";
dislikes="";
for(var i=0;i<3;i++){
	let likesTop = random.int(min=1, max=70);
	let likeR = random.int(min=0, max=3);
	likes = likes + interpretations.tarot_interpretations[likesTop].meanings.shadow[likeR] +"\n";
	dislikes = dislikes + interpretations.tarot_interpretations[likesTop].meanings.light[likeR] +"\n";
}

	
// console.log("Your Name: " + characterName)
// console.log("Position: " + yourJob);
// console.log("")
// console.log("All characterists on 1-10 scale: 1 is low and 10 is high");
// console.log(character_stats);
// console.log("Your likes: "+ "\n" + likes);
// console.log("Your dislikes: "+ "\n" + dislikes);

// console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));


var logo_text = "\n\nFuture's Market thanks you for making a successful purchase :) \nhttp://future.click\n\n"

charSheet = logo_text + "Your Name: " + characterName + "\n" +"\n\n" + "All characterists on 1-10 scale: 1 is low and 10 is high" + "\n\n" +"Your characteristics: " + "\n"+character_stats + "\n\n" + "Your likes: "+ "\n" + likes + "\n\n" + "Your dislikes: "+ "\n" + dislikes;
console.log(charSheet);
f_name = 'CharacterSheet'+characterName+'.txt';
//writes a file with the character sheet and then prints it out as a callback function
fs.writeFile(f_name, charSheet, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
	console.log('Sheet saved!');
		
});


//I'm  not using this function in this
const printStuff = toPrint => {
	printer.printDirect(
		{data:toPrint,
		printer:'_172_22_151_102',
		success:function(jobID){
			console.log("sent to printer with ID " + jobID)
		},
		error:function(err){console.log(err);}
		}
	)
}
// printStuff(character_stats)
