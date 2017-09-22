
var questiondata=[];


var list=[];




function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
<table align="center"><tr><td>
    <input id="m100a" type="checkbox"/>
    <label for="check" class="ui-widget">m100a</label>
</td>
<td>
    <input id="m100b" type="checkbox"/>
    <label for="check" class="ui-widget">m100b</label>
</td>
</tr></table>*/



var curIndex=0;
//shuffle(list);
$(function() {
    addCheckboxes();
});
var updateQuestions=function(){
    curIndex=0;
    list=[];
    for(var index2 in questiondata){
        if($("#"+index2).is(":checked")){
            list=list.concat(questiondata[index2]);
        }
    }
    shuffle(list);
    showNewQuestion();
    
};

var addCheckboxes=function(){
    var htmlstr='<table align="center"><tr>';
    for(var index in questiondata){
        htmlstr+='<td><input id="'+index+'" type="checkbox"/><label for="check" class="ui-widget">'+index+'</label></td>\n';
    }
    htmlstr+="</tr></table>";
    $("#subjects").html(htmlstr);
    
    for(var index2 in questiondata){
        $("#"+index2).click(function() {
                updateQuestions();
            /*if($(this).is(":checked")) // "this" refers to the element that fired the event
            {
                alert($(this).attr('id')+' is checked');
            }*/
        });
    }

};
var showNewQuestion=function(){
    if(list.length===0)
    {
        var str="<p>No questions to show. Check a subject area.</p>"
            $("#question").html(str);
        return;
    }
    var elem=list[curIndex];
    var str="<p>Question "+curIndex+"/"+list.length+".</p>"
    if(elem.q)
        str+="<p>"+elem.q+"</p>";
    if(elem.h){
        str+="<a href=\"javascript:void(0)\" class=\"hinter\">Show Hint</a>";
        str+="<p class=\"collapsedhint\">"+elem.h+"</p>";
    }
    if(elem.a){
        str+="<a href=\"javascript:void(0)\" class=\"answerer\">Show Answer</a>";
        str+="<p class=\"collapsedans\">"+elem.a+"</p>";
    }
    $("#question").html(str);
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    $(".collapsedhint").hide();    
    $(".hinter").click(function() {
        $(this).parent().children(".expandedhint, .collapsedhint").toggle();
    });
    $(".collapsedans").hide();    
    $(".answerer").click(function() {
        $(this).parent().children(".expandedans, .collapsedans").toggle();
    });
    


    curIndex=(curIndex+1)%list.length;
};


var resetQuestions=function(){
     
};

var dat=0;
var displayAllToggle=function(){

    var displist=[];
    for(var index2 in questiondata){
        if($("#"+index2).is(":checked")){
            displist=displist.concat(questiondata[index2]);
        }
    }

    dat=(1-dat);
    if(dat===1){
        var str="<p><em>List of all questions in selected subjects:</em></p>";
        for(var i=0;i<displist.length;i++){
            var q=displist[i].q;
            var h=displist[i].h;
            var a=displist[i].a;
            if(q!==undefined)
                str+="<p>Question: "+q+"</p>";
            if(h!==undefined)
                str+="<p>Hint: "+h+"</p>";
            if(a!==undefined)
                str+="<p>Answer: "+a+"</p>";
        }
        $("#other").html(str);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    } else {
        $("#other").html("");
    }
}
/*var displayAllToggle=function(){
    dat=(1-dat);
    if(dat===1){
        var str="";
        for(var i=0;i<list.length;i++){
            var q=list[i].q;
            var h=list[i].h;
            var a=list[i].a;
            if(q!==undefined)
                str+="<p>Question: "+q+"</p>";
            if(h!==undefined)
                str+="<p>Hint: "+h+"</p>";
            if(a!==undefined)
                str+="<p>Answer: "+a+"</p>";
        }
        $("#other").html(str);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    } else {
        $("#other").html("");
    }
}*/


