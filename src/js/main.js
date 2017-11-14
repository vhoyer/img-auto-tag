const numberOfSteps = 3;

//Panel movement {{{
function movePanel(step){
	const slider = $('.slider')[0];
	const current = parseInt(slider.getAttribute("data-showing-step")) + step;
	slider.setAttribute("data-showing-step", current);

	slider.style.transform = 'translateY('+(-100/numberOfSteps)*current+'%)';
}
function moveTo(step){
	const slider = $('.slider')[0];
	slider.setAttribute("data-showing-step", step);
	slider.style.transform = 'translateY('+(-100/numberOfSteps)*step+'%)';
}
function nextPanel(){
	movePanel(1);
}
function prevPanel(){
	movePanel(-1);
}
const nexts = $(".next");
for (var i = 0; i < nexts.length; i++) {
    nexts[i].addEventListener('click', nextPanel);
}

const prevs = $(".prev");
for (var i = 0; i < prevs.length; i++) {
    prevs[i].addEventListener('click', prevPanel);
}
$("#showProcessed").addEventListener('click', function(){
	moveTo(numberOfSteps-1);
	$('#text').select();
});
$("#showOrigin").addEventListener('click', function(){
	moveTo(0);
	$('#text-origin').select();
});//}}}

function removePreviousTags(text){
	text = text.replaceAll(/ alt="[^"]*"/,'');
	text = text.replaceAll(/ title="[^"]*"/,'');
	return text;
}

const submit = $('#submit');
if (submit) {
	submit.addEventListener('click', function(){
		let alt = $('#alt').value;
		let title = $('#title').value;
		var text = $('#text-origin').value;

		text = removePreviousTags(text);

		text = text.replaceAll(' src="',' title="'+title+'" src="');
		text = text.replaceAll(' src="',' alt="'+alt+'" src="');

		$('#text').value = text;
		$('#text').select();
		document.execCommand('copy');

		$('#showProcessed').style.visibility = "visible";
	});
}
