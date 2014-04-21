//verbList = new Array();
//verbList.push(["Forgive","Forgave","Forgiven"]);

count = 1;
score = 0;
currentWord = 0;
currentPast = 1;

$(function(){
	$('.userInput input').focus();

	$('.userInput input').on('blur',function()
	{
		$('.userInput input').focus();
	});

	//changeCurrentWord(verbList[0][0]);
	changeToSimple();

	$('.userInput input').keydown(function(e)
	{
		if(e.which == 9)
			e.preventDefault();
		else if(e.which == 13)
		{
			if(checkInput(verbList[currentWord][currentPast]))
				changeCurrentWord("nice");
			else
				changeCurrentWord(":(");

			clearUserInput();
		}

	});

	$('.radioButtons button').click(function() {
		if($(this).hasClass("active"))
			return;
	    $('.radioButtons button').removeClass('active');
	    $(this).addClass('active');
	});

	UI = new userInterface();
});

function changeCurrentWord(toWord)
{
	$('.currentWord').text(toWord);
}

function changeToSimple()
{
	$('.command').text("Past Simple:");
}

function changeToParticiple()
{
	$('.command').text("Past Participle:");
}

function clearUserInput()
{
	$('input').val("");
}

function checkInput(correctInput)
{
	value = $('input').val().toLowerCase();

	if(value == correctInput.toLowerCase())
		return true;

	return false;
}