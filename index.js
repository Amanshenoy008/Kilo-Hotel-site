function review1()
{
    document.getElementById('review').style.borderBottom=' 1px solid red';
    document.getElementById('tab').style.borderBottom='none';
    document.getElementById('p1').innerHTML=' Feedback: <br> <input name="myform" id="inputfeedback" height="50px" width="30px">';
    document.getElementById('p2').innerHTML='<button id="sub" onclick="submit()"> Submit </button>';
    document.getElementById('p3').style.display='none';
    
}
    
function submit()
{
    document.getElementById('p1').style.display='none';
    document.getElementById('p2').innerHTML='<p>Thanks for feedback !...</p>';
   
}

function contac()
{
    document.getElementById('tab').style.borderBottom=' 1px solid red';
    document.getElementById('review').style.borderBottom='none';
    document.getElementById('p1').innerHTML='<span class="material-symbols-outlined">mail</span> : mail@gmail.com ';
    document.getElementById('p2').innerHTML='<span class="material-symbols-outlined">contact_phone</span> : +91 9999999999 ';
    document.getElementById('p3').style.display='block';
}

function chngcolor(x)
{
    document.getElementById(x).style.color='White';
}

function goto()
{
   window.location='#book';
   
}