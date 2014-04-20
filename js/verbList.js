function Verb(infinitive, simple, participle)
{
	this.infinitive = infinitive;
	this.simple = simple;
	this.participle = participle;
}

function VerbList()
{
	this.completeList = new Array();

	this.minIndex = 0;
	this.maxIndex = 198;

	this.Add = function(infinitive, simple, participle)
	{
		this.completeList.push(new Verb(infinitive, simple, participle));
	}

	this.DefineEdges = function(minIndex, maxIndex)
	{

		if(minIndex < 1 || maxIndex > 199)
			throw "Index out of bounds";
			
		this.minIndex = minIndex-1;
		this.maxIndex = maxIndex-1;
	}

	this.GetVerb = function(index)
	{
		if(index < this.minIndex || index > this.maxIndex)
			throw "Index out of user bounds";

		return completeList[index];
	}
}

verbBucket = new VerbList();

verbBucket.Add("ask","asked","asked");
verbBucket.Add("awake","awoke","awoken");
verbBucket.Add("be","was/were","been");
verbBucket.Add("bear","bore","born");
verbBucket.Add("beat","beat","beaten");
verbBucket.Add("become","became","become");
verbBucket.Add("begin","began","begun");
verbBucket.Add("believe","believed","believed");
verbBucket.Add("bend","bent","bent");
verbBucket.Add("bet","bet","bet");
verbBucket.Add("bid","bid","bid");
verbBucket.Add("bind","bound","bound");
verbBucket.Add("bite","bit","bitten");
verbBucket.Add("bleed","bled","bled");
verbBucket.Add("blow","blew","blown");
verbBucket.Add("break","broke","broken");
verbBucket.Add("breed","bred","bred");
verbBucket.Add("bring","brought","brought");
verbBucket.Add("broadcast","broadcast","broadcast");
verbBucket.Add("build","built","built");
verbBucket.Add("burn","burnt","burnt");
verbBucket.Add("burst","burst","burst");
verbBucket.Add("bust","bust","bust");
verbBucket.Add("buy","bought","bought");
verbBucket.Add("call","called","called");
verbBucket.Add("cast","cast","cast");
verbBucket.Add("catch","caught","caught");
verbBucket.Add("choose","chose","chosen");
verbBucket.Add("clap","clapped","clapped");
verbBucket.Add("cling","clung","clung");
verbBucket.Add("come","came","come");
verbBucket.Add("cost","cost","cost");
verbBucket.Add("creep","crept","crept");
verbBucket.Add("cut","cut","cut");
verbBucket.Add("dare","dared","dared");
verbBucket.Add("deal","dealt","dealt");
verbBucket.Add("dig","dug","dug");
verbBucket.Add("dive","dived","dived");
verbBucket.Add("do","did","done");
verbBucket.Add("draw","drew","drawn");
verbBucket.Add("dream","dreamt","dreamt");
verbBucket.Add("drink","drank","drunk");
verbBucket.Add("drive","drove","driven");
verbBucket.Add("eat","ate","eaten");
verbBucket.Add("fall","fell","fallen");
verbBucket.Add("feed","fed","fed");
verbBucket.Add("feel","felt","felt");
verbBucket.Add("fight","fought","fought");
verbBucket.Add("find","found","found");
verbBucket.Add("fit","fit","fit");
verbBucket.Add("flee","fled","fled");
verbBucket.Add("fling","flung","flung");
verbBucket.Add("fly","flew","flown");
verbBucket.Add("forbid","forbade","forbidden");
verbBucket.Add("forecast","forecast","forecast");
verbBucket.Add("foresee","foresaw","foreseen");
verbBucket.Add("forget","forgot","forgotten");
verbBucket.Add("forgive","forgave","forgiven");
verbBucket.Add("forsake","forsook","forsaken");
verbBucket.Add("freeze","froze","frozen");
verbBucket.Add("get","got","got");
verbBucket.Add("give","gave","given");
verbBucket.Add("go","went","gone/been");
verbBucket.Add("grind","ground","ground");
verbBucket.Add("grow","grew","grown");
verbBucket.Add("handwrite","handwrote","handwritten");
verbBucket.Add("hang","hung","hung");
verbBucket.Add("have","had","had");
verbBucket.Add("hear","heard","heard");
verbBucket.Add("help","helped","helped");
verbBucket.Add("hide","hid","hidden");
verbBucket.Add("hit","hit","hit");
verbBucket.Add("hold","held","held");
verbBucket.Add("hurt","hurt","hurt");
verbBucket.Add("inlay","inlaid","inlaid");
verbBucket.Add("input","input","input");
verbBucket.Add("keep","kept","kept");
verbBucket.Add("kneel","knelt","knelt");
verbBucket.Add("knit","knit","knit");
verbBucket.Add("know","knew","known");
verbBucket.Add("lay","laid","laid");
verbBucket.Add("lead","led","led");
verbBucket.Add("lean","leant","leant");
verbBucket.Add("leap","leapt","leapt");
verbBucket.Add("learn","learnt","learnt");
verbBucket.Add("leave","left","left");
verbBucket.Add("lend","lent","lent");
verbBucket.Add("let","let","let");
verbBucket.Add("lie","lay","lain");
verbBucket.Add("light","lit","lit");
verbBucket.Add("like","liked","liked");
verbBucket.Add("live","lived","lived");
verbBucket.Add("look","looked","looked");
verbBucket.Add("lose","lost","lost");
verbBucket.Add("make","made","made");
verbBucket.Add("mean","meant","meant");
verbBucket.Add("meet","met","met");
verbBucket.Add("melt","melted","molten");
verbBucket.Add("mislead","misled","misled");
verbBucket.Add("mistake","mistook","mistaken");
verbBucket.Add("misunderstand","misunderstood","misunderstood");
verbBucket.Add("move","moved","moved");
verbBucket.Add("mow","mowed","mown");
verbBucket.Add("need","needed","needed");
verbBucket.Add("overdraw","overdrew","overdrawn");
verbBucket.Add("overhear","overheard","overheard");
verbBucket.Add("overtake","overtook","overtaken");
verbBucket.Add("pay","paid","paid");
verbBucket.Add("play","played","played");
verbBucket.Add("preset","preset","preset");
verbBucket.Add("prove","proved","proven");
verbBucket.Add("put","put","put");
verbBucket.Add("quit","quit","quit");
verbBucket.Add("read","read","read");
verbBucket.Add("rid","rid","rid");
verbBucket.Add("ride","rode","ridden");
verbBucket.Add("ring","rang","rung");
verbBucket.Add("rise","rose","risen");
verbBucket.Add("run","ran","run");
verbBucket.Add("saw","sawed","sawn");
verbBucket.Add("say","said","said");
verbBucket.Add("see","saw","seen");
verbBucket.Add("seek","sought","sought");
verbBucket.Add("sell","sold","sold");
verbBucket.Add("send","sent","sent");
verbBucket.Add("set","set","set");
verbBucket.Add("sew","sewed","sewn");
verbBucket.Add("shake","shook","shaken");
verbBucket.Add("shave","shaved","shaven");
verbBucket.Add("shine","shone","shone");
verbBucket.Add("shoot","shot","shot");
verbBucket.Add("show","showed","shown");
verbBucket.Add("shrink","shrank","shrunk");
verbBucket.Add("shut","shut","shut");
verbBucket.Add("sing","sang","sung");
verbBucket.Add("sink","sank","sunk");
verbBucket.Add("sit","sat","sat");
verbBucket.Add("slay","slew","slain");
verbBucket.Add("sleep","slept","slept");
verbBucket.Add("slide","slid","slid");
verbBucket.Add("sling","slung","slung");
verbBucket.Add("slit","slit","slit");
verbBucket.Add("smell","smelt","smelt");
verbBucket.Add("sneak","sneaked","sneaked");
verbBucket.Add("sow","sowed","sown");
verbBucket.Add("speak","spoke","spoken");
verbBucket.Add("speed","sped","sped");
verbBucket.Add("spell","spelt","spelt");
verbBucket.Add("spend","spent","spent");
verbBucket.Add("spill","spilt","spilt");
verbBucket.Add("spin","span","spun");
verbBucket.Add("spit","spat","spat");
verbBucket.Add("split","split","split");
verbBucket.Add("spoil","spoilt","spoilt");
verbBucket.Add("spread","spread","spread");
verbBucket.Add("spring","sprang","sprung");
verbBucket.Add("stand","stood","stood");
verbBucket.Add("star","started","started");
verbBucket.Add("steal","stole","stolen");
verbBucket.Add("stick","stuck","stuck");
verbBucket.Add("sting","stung","stung");
verbBucket.Add("stink","stank","stunk");
verbBucket.Add("strike","struck","struck");
verbBucket.Add("string","strung","strung");
verbBucket.Add("strip","stript","stript");
verbBucket.Add("strive","strove","striven");
verbBucket.Add("swear","swore","sworn");
verbBucket.Add("sweat","sweat","sweat");
verbBucket.Add("sweep","swept","swept");
verbBucket.Add("swell","swelled","swollen");
verbBucket.Add("swim","swam","swum");
verbBucket.Add("swing","swung","swung");
verbBucket.Add("take","took","taken");
verbBucket.Add("talk","talked","talked");
verbBucket.Add("teach","taught","taught");
verbBucket.Add("tear","tore","torn");
verbBucket.Add("tell","told","told");
verbBucket.Add("think","thought","thought");
verbBucket.Add("throw","threw","thrown");
verbBucket.Add("thrust","thrust","thrust");
verbBucket.Add("tread","trod","trodden");
verbBucket.Add("try","tryed","tryed");
verbBucket.Add("turn","turned","turned");
verbBucket.Add("understand","understood","understood");
verbBucket.Add("upset","upset","upset");
verbBucket.Add("use","used","used");
verbBucket.Add("wake","woke","woken");
verbBucket.Add("want","wanted","wanted");
verbBucket.Add("wear","wore","worn");
verbBucket.Add("weep","wept","wept");
verbBucket.Add("wet","wet","wet");
verbBucket.Add("win","won","won");
verbBucket.Add("wind","wound","wound");
verbBucket.Add("withdraw","withdrew","withdrawn");
verbBucket.Add("withhold","withheld","withheld");
verbBucket.Add("withstand","withstood","withstood");
verbBucket.Add("work","worked","worked");
verbBucket.Add("wring","wrung","wrung");
verbBucket.Add("write","wrote","written");