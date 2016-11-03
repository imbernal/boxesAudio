$(document).ready(function(){

	var cNote = $('#cAudio')[0];
	var dNote = $('#dAudio')[0];
	var eNote = $('#eAudio')[0];
	var fNote = $('#fAudio')[0];
	var gNote = $('#gAudio')[0];
	var aNote = $('#aAudio')[0];
	var bNote = $('#bAudio')[0];



	$('#c').mousedown(function(){
	    cNote.currentTime = 0;
	    
    	cNote.play();
	});

	$('#d').mousedown(function(){
	    dNote.currentTime = 0;
    	dNote.play();
	});

	$('#e').mousedown(function(){
	    eNote.currentTime = 0;
    	eNote.play();
	});

	$('#f').mousedown(function(){
	    fNote.currentTime = 0;
    	fNote.play();
	});

	$('#g').mousedown(function(){
	    gNote.currentTime = 0;
    	gNote.play();
	});

	$('#a').mousedown(function(){
	    aNote.currentTime = 0;
    	aNote.play();
	});

	$('#b').mousedown(function(){
	    bNote.currentTime = 0;
    	bNote.play();
	});

});