var products = [{
  "id": "100",
  "name": "iPhone 4S",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "101",
  "name": "Moto X",
  "brand": "Motorola",
  "os": "Android"	
},
{
  "id": "102",
  "name": "iPhone 6",
  "brand": "Apple",
  "os": "iOS"
},
{
  "id": "103",
  "name": "Samsung Galaxy S",
  "brand": "Samsung",
  "os": "Android"
},
{
  "id": "104",
  "name": "Google Nexus",
  "brand": "ASUS",
  "os": "Android"
},
{
  "id": "105",
  "name": "Surface",
  "brand": "Microsoft",
  "os": "Windows"
}];
var dropdownbuttonsarraya=[];
var dropdownbuttonsarrayb=[];
var table=$("<table></table>");

function display()
{ 
  createDropdown()
  tableoutlook()

  products.forEach(function(items,index,array)
  {
  displayitems(items,index,array);
  }); 
}
$(document).ready(function()
{  
   display(); 
});

function displayitems(items,index,array)
{
     
    var id = $("<td></td>").text(array[index].id);
    var name = $("<td></td>").text(array[index].name); 
    var brand = $("<td></td>").text(array[index].brand); 
    var os = $("<td></td>").text(array[index].os); 
    var remove = $("<td></td>").html("<a href='#'>X</a>");
    var txt =$("<tr></tr>").append(id,name,brand,os,remove);
    remove.click(function(){
      txt.hide();
      
    })
    $(table).append(txt);
    $('#wrapper').append(table);
   
}

//dropdown crete
var flag=0;
function createDropdown()
{

  /////by operating system
  elements('Android','os',dropdownbuttonsarraya);
  elements('Windows','os',dropdownbuttonsarraya);
  elements('iOS','os',dropdownbuttonsarraya);
  ////////by brands
  elements('Apple','brand',dropdownbuttonsarrayb);
  elements('Motorola','brand',dropdownbuttonsarrayb)
  elements('Samsung','brand',dropdownbuttonsarrayb)
  elements('ASUS','brand',dropdownbuttonsarrayb)
  elements('Microsoft','brand',dropdownbuttonsarrayb)

  // dropdown button
  var tempbrand=[];
  var tempos=[];
  var dd_BY_brand=$("<select for='cars' class='title'>Filter</select>");
  $('#wrapper').append(dd_BY_brand);
  $(dd_BY_brand).append("<option >Filter by brand</option>");
  $(dd_BY_brand).append("<option value='Apple'>Apple</option>");
  $(dd_BY_brand).append("<option value='Motorola'>Motorola</option>");
  $(dd_BY_brand).append("<option value='Samsung'>Samsung</option>");
  $(dd_BY_brand).append("<option value='ASUS'>ASUS</option>");
  $(dd_BY_brand).append("<option value='Microsoft'>Microsoft</option>");
  /*dropdownbuttonsarraya.forEach(function c(v,i,a)
  {
   
    $(dd_BY_brand).append(v);
  })*/


  $(dd_BY_brand).change(function(){ 

    var value = $(this).val();
    console.log(value)

      tempos= filterWork(value,'brand');
    
        
      removetableelment();
      console.log(tempos,tempbrand);
      var temp= campair(tempos,tempbrand);
     
      temp.forEach(function(items,index,array)
      {
        displayitems(items,index,array);
      
      });
  
  });

  

  /*$(dd_BY_brand).click(function (e) { 
     dropdownbuttonsarraya.forEach(function c(v,i,a)
      {
        v.show();
      })

  
  });
*/


  

  var dd_BY_os=$("<select for='cars'>Filter</select>");
  $('#wrapper').append(dd_BY_os);
 /* $(dd_BY_os).append("<option >Filter by Os</option>");
  elements('Android','os',dropdownbuttonsarraya);
  elements('Windows','os',dropdownbuttonsarraya);
  elements('iOS','os',dropdownbuttonsarraya);*/
  $(dd_BY_os).append("<option >Filter by Os</option>");
  $(dd_BY_os).append("<option value='Android'>Android</option>");
  $(dd_BY_os).append("<option value='Windows'>Windows</option>");
  $(dd_BY_os).append("<option value='iOS'>iOS</option>");
  /*dropdownbuttonsarrayb.forEach(function c(v,i,a)
  { 
   
    $(dd_BY_os).append(v);
  })*/
   $(dd_BY_os).change(function(){ 
    var value = $(this).val();
    console.log(value)

      tempbrand= filterWork(value,'os');
    
        removetableelment();
        console.log(tempos,tempbrand);
      var temp= campair(tempos,tempbrand);

      temp.forEach(function(items,index,array)
      {
        displayitems(items,index,array);
      
      });
  
  });
 /* $(dd_BY_os).click(function (e) { 
   
    dropdownbuttonsarrayb.forEach(function c(v,i,a)
    {
      v.show();
    })
    });*/
  
}

sreach();
function campair(array1,array2)
{

  a=[];
  for(i=0;i<(array1.length);i++)
  {
    for(j=0;j<(array2.length);j++)
    {
      if(array2[j]==array1[i])
      {
        console.log(array2[j],array1[i])
        a.push(array1[i])
      }
  
    }

  }
  return a;

}
function filterWork(input,el)
{ 
  
  temparray=[];
  for(i=0;i<(products.length);i++)
  { 
    console.log(products[i][el],input)
    if(products[i][el]==input)
    {
      console.log(products[i][el])
      temparray.push(products[i])
    }

  }
  return temparray;

}


function removetableelment()
{

  $(table).empty();
  tableoutlook()
}

function tableoutlook()
{
  var ID = $("<td></td>").text('ID'); 
  var Name = $("<td></td>").text('Name'); 
  var Brand = $("<td></td>").text('Brand'); 
  var Os = $("<td></td>").text('Operating System'); 
  var Remove = $("<td></td>").text('Remove'); 
  var head =$("<tr></tr>").append(ID,Name,Brand,Os,Remove);
  $(head).addClass('head');
 
  $(table).append(head);
}


function elements(a,b,ar)
{
  var z=$("<option value="+a+">"+a+"</option>");
  ar.push(z)
  z.hide();

}


function sreach()
{
  var inp=$('<input type="text" placeholder="Search.."  name="search">');
  var inpbutton=$('<button type="submit"><i class="fa fa-search"></i>click to sreach</button>');
  $(inpbutton).click(function(){
 

    if (isNaN(inp.val()))
    {    
      
        var tempa= filterWork(inp.val(),'name');
        console.log(tempa)
        console.log(tempa.length )
      if (tempa.length ===0)
      {
        alert("No elements are found in the box!");
      }
        removetableelment()
        tempa.forEach(function(items,index,array)
        {
        displayitems(items,index,array);
        }); 
    }
    else{

    
          var tempa= filterWork(inp.val(),'id');
          console.log(tempa.length )
          if (tempa.length ===0)
           {
             alert("No elements are found in the box!");
           }
          removetableelment()
          tempa.forEach(function(items,index,array)
          {
          displayitems(items,index,array);
          }); 
  
    }
  });

  var sdiv=$('<div></div>');
  sdiv.append(inp);
  sdiv.append(inpbutton);

  $('#wrapper').append(sdiv);



}



