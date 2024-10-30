/*
    http://www.chen-w.com
    2010-10-10

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
*/
function decHtml(html)
{
	html = html.replace(/\&lt;/g,'<');
	html = html.replace(/\&gt;/g,'>');
	// Put this in last place to avoid escape being double-decoded
	html = html.replace(/\&amp;/g,'&');
	return html;
}

function runCode(code)
{
	var newwin = window.open("", "_blank","resizable=yes,scrollbars=yes,status=yes");
	newwin.opener = null;
	newwin.document.write(code);
	newwin.document.close();
}

function saveCode(code,filename)
{
	var newwin = window.open("", "", "top=10000,left=10000");
	newwin.document.open("text/html", "replace");
	newwin.document.writeln(code);
	newwin.document.execCommand("saveas", "", filename);
	newwin.close();
}

function runPreCode(obj)
{
	var code = obj.innerHTML;
	code = decHtml(code);
	runCode(code);
}

function runTextareaCode(obj)
{
	runCode(obj.value);
}

function savePreCode(obj, filename)
{
	var code = obj.innerHTML;
	code = decHtml(code);
	saveCode(code, filename + ".htm");
}

function saveTextareaCode(obj, filename)
{
	saveCode(obj.value, filename + ".htm");
}

function copyCode(obj)
{
	var rng = document.body.createTextRange();
	rng.moveToElementText(obj);
	rng.scrollIntoView();
	rng.select();
	rng.execCommand("Copy");
	rng.collapse(false);
}

function saveSourceFromDiv(searchClass)
{
	//Get all divs with searchClass
	var nodes = [];
	if (document.getElementsByClassName)
	{
		nodes = document.getElementsByClassName(searchClass);
	}
	else
	{
		var nodeDivs = document.getElementsByTagName("div");
		for (var i=0; i<nodeDivs.length; i++)
		{
			if (nodeDivs[i].className === searchClass)
				nodes.push(nodeDivs[i]);
		}
	}

	//deal
	for (var i = 0; i < nodes.length; i++)
	{
		var nodePre = nodes[i].getElementsByTagName("pre")[0];
		var nodeTextarea = nodes[i].getElementsByTagName("textarea")[0];
		nodeTextarea.value = decHtml(nodePre.innerHTML);
	}
}
