/*
  multiple terminal test for termlib.js

  (c) Norbert Landsteiner 2003-2005
  mass:werk - media environments
  <http://www.masswerk.at>

*/

var term=new Array();

var helpPage=[
	'%CS%+r Terminal Help %-r%n',
	'  This is just a tiny test for multiple terminals.',
	'  use one of the following commands:',
	'     restart .. restart the terminal',
	'     clear .... clear the terminal',
	'     exit ..... close the terminal (or <ESC>)',
	'     id ....... show terminal\'s id',
	/*'     switch ... switch to other terminal',*/
	'     help ..... show this help page',
	'  other input will be echoed to the terminal.',
	' '
];

var restart=[
	'%CS%+r +++ Terminal ready. +++ %-r%nType "help" for help.%n' +
	'Press ESC to exit.',
	'%n',
];

var alterna=[
	'%CS%+r Alterna %-r%n',
	'  The other world.',
	' '
];

var exfa=[
	'%CS%+r Exfa Storm %-r%n',
	'  A very mysterious lady who look up (more like stalking) at Rix.',
	'  She claims to be powerful and says she knows all.',
	'  By the way, she is full of herself. She is crazy too.',
	'  She is too obsessed with money. AKA: Excala Storm',
	' '
];

var rixuel=[
	'%CS%+r Rixuel Patrick %-r%n',
	'  The most awesome person ever!',
	'  All hail Lord Rixuel!',
	'  (Just kidding. lol)',
	' '
];

var ec=[
	'%CS%+r Emily Christina %-r%n',
	'  Rixuel\'s rival and friend.',
	'  She\'s as awesome as Rixuel. This is why they are rivals.',
	'  They compete each other to see who is the most awesome.',
	' '
];

var kd=[
	'%CS%+r Karma Dilenna %-r%n',
	'  Nickname: Ms/Mrs. Karla',
	'  Formely a human.',
	'  One of the strongest warriors of all the time.',
	'  Now a Goddess (shhh, this is a secret).',
	' '
];

var mv=[
	'%CS%+r Maxim Valor %-r%n',
	'  The man with the most insane accuracy and precision.',
	'  One of the strongest warriors of all the time.',
	'  Karma and Murphy #1 rival.',
	' '
];

var md=[
	'%CS%+r Murphy Delaw %-r%n',
	'  Great master of spells.',
	'  One of the strongest warriors of all the time.',
	'  Karma\'s colleague.',
	' '
];

var finishers=[
	'%CS%+r Finishers %-r%n',
	'  The most strongest and deadliest warriors of all the time.',
	'  They are used to end any conflicts.',
	'  Death\'s #1 rivals.',
	' '
];

var wl=[
	'%CS%+r The World Leader %-r%n',
	'  Ruler and Leader of Alterna.',
	'  No accurated info about the "greatest" World Leader.',
	' '
];

function termOpen(n) {
	if (!term[n]) {
		var y=(n==1)? 275: 280;
		term[n]=new Terminal(
			{
				x: -270,
				y: y,
				rows: 18,
				greeting: '%+r +++ Terminal ready. +++ %-r%nType "help" for help.%n'
							+ 'Press ESC to exit.%n',
				id: n,
				termDiv: 'termDiv'+n,
				crsrBlinkMode: true,
				handler: termHandler,
				exitHandler: termExitHandler
			}
		);
		if (term[n]) term[n].open();
	}
	else if (term[n].closed) {
		term[n].open();
	}
	else {
		term[n].focus();
	}
}

function termHandler() {
	// called on <CR> or <ENTER>
	this.newLine();
	var cmd=this.lineBuffer.toLowerCase();
	
	switch (cmd)
	{
		case "cd": case "ls": case "dir": case "pwd":
			this.write('You are on the internet.'); break;
			
		case "alterna":
			this.write(alterna); break;
		
		case "clear": case "clean": case "delete":
			this.clear(); break;
			
		case "ec": case "emilychristina": case "emily christina":
			this.write(ec); break;
			
		case "exfa": case "excala":
			this.write(exfa); break;
			
		case "exit": case "close": case "quit": case "logout":
			this.close();
			if (window.event) window.event.cancelBubble=true;
			return false; break;

		case "finisher": case "finishers":
			this.write(finishers); break;
		
		case "google":
			this.write('Google is evil with their ads!'); break;
		
		case "help":
			this.write(helpPage); break;
			
		case "hi": case "hello": case "hey":
			this.write('Hey, Welcome!'); break;

		case "id":
			this.write('terminal id: '+this.id); break;
			
		case "kd": case "karmadilenna": case "karma dilenna":
			this.write(kd); break;
			
		case "lr": case "rixuel": case "rix":
			this.write(rixuel); break;
			
		case "md": case "murphydelaw": case "murphy delaw":
			this.write(md); break;
			
		case "mv": case "maximvalor": case "maxim valor":
			this.write(mv); break;
			
		case "password":
			this.write('The passwords are: 12345 , admin , password , pass , rixuel'); break;
			
		case "restart":
			this.write(restart); break;
			
		case "username":
			this.write('There are no Username. Just enter any...'); break;
			
		case "wl": case "worldleader": case "world leader":
			this.write(wl); break;

		default: 
			this.type('You typed: '+cmd);
			this.newLine();
	}
	
	this.prompt();
}

function termExitHandler() {
	// optional handler called on exit
	// activate other terminal if open
	var other=(this.id==1)? 1:1;
	//if ((term[other]) && (term[other].closed==false)) term[other].focus();
}