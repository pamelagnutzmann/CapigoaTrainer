function References()
{
	this.word = $("#word");
	this.totalWords = $("#totalWords");
	this.score = $("#score");
	this.totalScore = $("#totalScore");
}

function userInterface()
{
	this.references = new References();

	this.IncrementWord = function()
	{
		this.references.word.text(parseInt(this.references.word.text()) + 1); 
	}

	this.ClearWord = function()
	{
		this.references.word.text(1);
	}
}