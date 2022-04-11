var i =0;
var word="";
var wordly="AFTER"
var chance=0
var count=0
var back=0
$('html').keyup(function(e)
{
    var keynum;
        
    // if(window.event)
    //         {                    
    //             keynum = e.keyCode;
    //             console.log(keynum)
    //         }
        //  if(e.which)
        //     {     
        //         console.log("hello")            
        //         keynum = e.which;
        //         console.log(keynum)
        //     }

        keynum=e.keyCode
            if(keynum < 91 && keynum > 64 && count<5)
            {
            keypressitem = String.fromCharCode(keynum).toUpperCase()
            console.log(keypressitem)
            word=word.concat(keypressitem)
            $('td').eq(i).text(keypressitem)
            i++
            count++
            
            }
            else if((i)%5==0 && keynum==13)
            {
                console.log(word)
                chance++
                validator(word)
                word=""
                count=0
                back=i
            }
             if(e.keyCode==8 && i>back)
            {
                word=word.slice(0,-1)
                i=i-1
                $('td').eq(i).text(null)
                
                count=count-1
            }
            
        });
function validator(a)
{
    for(j=0;j<5;j++)
    {
        if(a[j]==wordly[j])
        {
            t=5-j
            $('td').eq(i-t).addClass('greenBg');
        }
        for (k=0;k<5;k++)
        {
            if(a[k]==wordly[j] && j!=k )
            {
                t=5-k
                $('td').eq(i-t).addClass('yellowBg');
            }
        }
    }

    if (a==wordly)
    {
        $('h2').text("Ya That is the Correct Word. You got it in "+chance+"/6 attempt")
        count=100
        i=97
    }
    
    
}
// function reset()
// {

//     for(i=0;i<30;i++)
//     {
//         $('td').eq(i).text(null);
//         $('td').eq(i-t).addClass('whiteBg');
//     }
//     i=0;
//     chance=0;
// }