 let title =document.querySelector('.title');
let turn ='x';
let scors=[];
function end(num1,num2,num3)

    {
        title.innerHTML=`${scors[num1]} winner`;
        document.getElementById('item'+num1).style.background='#000';
        document.getElementById('item'+num2).style.background='#000';
        document.getElementById('item'+num3).style.background='#000';
        setInterval(function(){title.innerHTML+='.'},1000);
        setTimeout(function(){location.reload()},4000)
    
    }


function winnner()
{
    for(let i=1; i<10; i++)
    {
      scors[i]=document.getElementById('item'+i).innerHTML;
    }


if (scors[1]  == scors[2] && scors[2] == scors[3] && scors[1] !='')
{
    end(1,2,3);
}
 else if (scors[4] == scors[5] && scors[5] == scors[6] && scors[5] !='')
 {
   end(4,5,6);
 }

 else if (scors[7] == scors[8] && scors[8] == scors[9] && scors[8] !='')
 {
    end(7,8,9);
 }

 else if (scors[1] == scors[4] && scors[4] == scors[7] && scors[1] !='')
 {
    end(1,4,7)
 }

 else if (scors[2] == scors[5] && scors[5] == scors[8] && scors[5] !='')
 {
   end(2,5,8)
 }

 else if (scors[3] == scors[6] && scors[6] == scors[9] && scors[6] !='')
 {
    end(3,6,9);
 }

 else if (scors[1] == scors[5] && scors[5] == scors[9] && scors[5] !='')
 {
   end(1,5,9);
 }

 else if (scors[3] == scors[5] && scors[5] == scors[7] && scors[5] !='')
 {
       end(3,5,7 );
 }



}

function game(id)
{
    let element =document.getElementById(id);
    if(turn==='x'&& element.innerHTML=='')
    {
        element.innerHTML='x';
        turn='o';
        title.innerHTML='o';
    }
    else if(turn==='o'&&element.innerHTML=='')
    {
        element.innerHTML='o';
        turn ='x';
        title.innerHTML='x';

    }
    winnner();
}