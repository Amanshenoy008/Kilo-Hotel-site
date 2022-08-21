
var price1,price2,price3,price4,price5,price6,price7,price8,price9;

function add1()
{
    var value1=document.getElementById('value1').value;
    
   document.getElementById('outputvalue1').innerHTML=value1;
   document.getElementById('o1').innerHTML=value1;
   price1=parseInt(value1)*30;
   document.getElementById('pp1').innerHTML=parseInt(value1)*30;
   return price1;
}
function add2()
{
    var value2=document.getElementById('value2').value;

    document.getElementById('outputvalue2').innerHTML=value2;
    document.getElementById('o2').innerHTML=value2;
    price2=parseInt(value2)*40;
    document.getElementById('pp2').innerHTML=parseInt(value2)*40;
    return price2;


}
function add3()
{
    var value3=document.getElementById('value3').value;

    document.getElementById('outputvalue3').innerHTML=value3;
    document.getElementById('o3').innerHTML=value3;
    price3=parseInt(value3)*25;
    document.getElementById('pp3').innerHTML=parseInt(value3)*25;
    return price3;


}
function add4()
{
    var value4=document.getElementById('value4').value;

    document.getElementById('outputvalue4').innerHTML=value4;
    document.getElementById('o4').innerHTML=value4;
     price4=parseInt(value4)*30;
    document.getElementById('pp4').innerHTML=parseInt(value4)*30;

    return price4;

}
function add5()
{
    var value5=document.getElementById('value5').value;

    document.getElementById('outputvalue5').innerHTML=value5;
    document.getElementById('o5').innerHTML=value5;
    price5=parseInt(value5)*30;
    document.getElementById('pp5').innerHTML=parseInt(value5)*30;
    return price5;

}
function add6()
{
    var value6=document.getElementById('value6').value;

    document.getElementById('outputvalue6').innerHTML=value6;
    document.getElementById('o6').innerHTML=value6;
    price6=parseInt(value6)*30;
    document.getElementById('pp6').innerHTML=parseInt(value6)*30;
    return price6;
}
function add7()
{
    var value7=document.getElementById('value7').value;

    document.getElementById('outputvalue7').innerHTML=value7;
    document.getElementById('o7').innerHTML=value7;
    price7=parseInt(value7)*90;
    document.getElementById('pp7').innerHTML=parseInt(value7)*90;
    return price7;

}
function add8()
{
    var value8=document.getElementById('value8').value;

    document.getElementById('outputvalue8').innerHTML=value8;
    document.getElementById('o8').innerHTML=value8;
    price8=parseInt(value8)*90;

    document.getElementById('pp8').innerHTML=parseInt(value8)*90;
    return price8;


}
function add9()
{
    var value9=document.getElementById('value9').value;

    document.getElementById('outputvalue9').innerHTML=value9;
    document.getElementById('o9').innerHTML=value9;
    price9=parseInt(value9)*90;
    document.getElementById('pp9').innerHTML=parseInt(value9)*90;
    return price9

}
function showsum()
{
document.getElementById('tp').innerHTML=add1(price1)+add2(price2)+add3(price3)+add4(price4)+add5(price5)+add6(price6)+add7(price7)+add8(price8)+add9(price9);


}


