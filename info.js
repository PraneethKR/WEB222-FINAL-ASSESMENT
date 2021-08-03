function Firstname(name)
{
    let form=document.forms["form1"]["FirstName"];
   let x= form.value;
   if(x[0]>='A' && x[0]<='Z')
   {
    let el=document.getElementById("errors");
        while(el.firstChild)
        {
            el.removeChild(el.firstChild);
        }
   }
   else
   {
    let el=document.getElementById("errors");
    while(el.firstChild)
    {
        el.removeChild(el.firstChild);
    }
    let tag=document.createElement("p");
    let text=document.createTextNode("The name should start with CAPITAL Letter");
    tag.appendChild(text); 
    el.appendChild(tag);
    document.getElementById("f_name").focus();
   }
  for(let i=1;i<x.length;i++)
  {
    if(x[i]>='A' && x[i]<='Z' || x[i]>='a' && x[i]<='z'|| x[i]==' ')
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
            el.removeChild(el.firstChild);
        }
    }
    else
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
    {
        el.removeChild(el.firstChild);
    }
    let tag=document.createElement("p");
    let text=document.createTextNode("The name should contain only alpha Letter");
    tag.appendChild(text); 
    el.appendChild(tag);
    document.getElementById("f_name").focus();
    }
  }
}

/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/

function Lastname(name)
{
    let form=document.forms["form1"]["LastName"];
   let x= form.value;
   if(x[0]>='A' && x[0]<='Z')
   {
    let el=document.getElementById("errors");
    while(el.firstChild)
    {
        el.removeChild(el.firstChild);
    }
   }
   else
   {
    let el=document.getElementById("errors");
    while(el.firstChild)
    {
        el.removeChild(el.firstChild);
    }
    let tag=document.createElement("p");
    let text=document.createTextNode("The name should start with CAPITAL Letter");
    tag.appendChild(text); 
    el.appendChild(tag);
    document.getElementById("l_name").focus();
   }
  for(let i=1;i<x.length;i++)
  {
    if(x[i]>='A' && x[i]<='Z' || x[i]>='a' && x[i]<='z'|| x[i]==' ')
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
            el.removeChild(el.firstChild);
        }
    }
    else
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
    {
        el.removeChild(el.firstChild);
    }
    let tag=document.createElement("p");
    let text=document.createTextNode("The name should contain only alpha Letter");
    tag.appendChild(text); 
    el.appendChild(tag);
    document.getElementById("l_name").focus();
    }
  }
}

/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/

function Password(name)
{
    let capital=0;
    let num=0;
    let other=0;
   let form=document.forms["form1"]["password"];
   let x=form.value;
   if(x.length == 6)
   {
    let el=document.getElementById("errors");
        while(el.firstChild)
        {
            el.removeChild(el.firstChild);
        }
        if(x[0]>='A' && x[0]<='Z' || x[0]>='a' && x[0]<='z')
        {
            for(let i=0;i<x.length;i++)
            {
                if(x[i]>='A' && x[i]<='Z')
                {
                  capital++;
                } 
                else if(x[i]>=0 && x[i]<=9)
                { 
                   num++;
                }
                else
                {
                    other++;
                }
            }
            console.log(num);
                console.log(capital);
                console.log(other);
            if(capital <= 0)
            {
                let el=document.getElementById("errors");
                while(el.firstChild)
                {  
                  el.removeChild(el.firstChild);
                }
                let tag=document.createElement("p");
                let text=document.createTextNode("Please enter atleast one capital letter");
                tag.appendChild(text); 
                el.appendChild(tag);
                document.getElementById("password").focus();  
            }
            if(num <= 0)
            {
                let el=document.getElementById("errors");
                while(el.firstChild)
                {  
                  el.removeChild(el.firstChild);
                }
                let tag=document.createElement("p");
                let text=document.createTextNode("Please enter atleast 1 numeric character");
                tag.appendChild(text); 
                el.appendChild(tag);
                document.getElementById("password").focus();  
            }
        }
        else
        {
            let el=document.getElementById("errors");
            while(el.firstChild)
            {  
              el.removeChild(el.firstChild);
            }
            let tag=document.createElement("p");
            let text=document.createTextNode("The password should start with alpha Letter");
            tag.appendChild(text); 
            el.appendChild(tag);
            document.getElementById("password").focus();
        }
   }
   else
   {
    let el=document.getElementById("errors");
    while(el.firstChild)
    {
        el.removeChild(el.firstChild);
    }
    let tag=document.createElement("p");
    let text=document.createTextNode("The password must be 6 characters long");
    tag.appendChild(text); 
    el.appendChild(tag);
    document.getElementById("password").focus();
   }
}

/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/

function confirmPassword(name)
{
    let form=document.forms["form1"]["password"];
    let form1=document.forms["form1"]["confirm password"];
    let x=form.value;
    let x1=form1.value;   
    if(x != x1)
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
            el.removeChild(el.firstChild);
        }
        let tag=document.createElement("p");
        let text=document.createTextNode("Passwords do not match");
        tag.appendChild(text); 
        el.appendChild(tag);
        document.getElementById("confirm password").focus();
    }
    else
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
            el.removeChild(el.firstChild);
        }
    }
}


/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


function Username(name)
{
    let form=document.forms["form1"]["username"];
    let x= form.value;
    if(x.length>=6)
    {
        if(x[0]>='A' && x[0]<='Z')
        {
         let el=document.getElementById("errors");
             while(el.firstChild)
             {
                el.removeChild(el.firstChild);
             }
        }
        else
        {
          let el=document.getElementById("errors");
          while(el.firstChild)
          {
            el.removeChild(el.firstChild);
          }
          let tag=document.createElement("p");
          let text=document.createTextNode("The name should start with CAPITAL Letter");
          tag.appendChild(text); 
          el.appendChild(tag);
          document.getElementById("username").focus();
        }
    }  
    else
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
           el.removeChild(el.firstChild);
        }
        let tag=document.createElement("p");
        let text=document.createTextNode("Please enter atleast 6 characters");
        tag.appendChild(text); 
        el.appendChild(tag);
        document.getElementById("username").focus();
    }
}

/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


function checklist(name)
{
    let checked=0;
    let form=document.forms["form1"]["Education_Level"];
    for(let i=0;i<form.length;i++)
    {
        if(form[i].checked==true)
        {
            checked++;
        }
    }
    console.log(checked);
    if(checked > 0)
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
          el.removeChild(el.firstChild);
        }
    }
    else
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
           el.removeChild(el.firstChild);
        }
        let tag=document.createElement("p");
        let text=document.createTextNode("Please enter your education level");
        tag.appendChild(text); 
        el.appendChild(tag);
    }
}

/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------*/


function checkRadio(name)
{
    let checked=0;
    let form=document.forms["form1"]["Education Status"];
    for(let i=0;i<form.length;i++)
    {
        if(form[i].checked==true)
        {
            checked++;
        }
    }
    console.log(checked);
    if(checked > 0)
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
          el.removeChild(el.firstChild);
        }
    }
    else
    {
        let el=document.getElementById("errors");
        while(el.firstChild)
        {
           el.removeChild(el.firstChild);
        }
        let tag=document.createElement("p");
        let text=document.createTextNode("Please enter your education status");
        tag.appendChild(text); 
        el.appendChild(tag);
    }
}






function Clear(name)
{
    console.log("hi");
    let el=document.getElementById("errors");
    while(el.firstChild)
    {
       el.removeChild(el.firstChild);
    }
}