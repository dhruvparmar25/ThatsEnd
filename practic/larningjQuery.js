/*
    r:selecter is on type of  identification
how many type of selecter
      0] universal selecter(*)
       1] normal selecter
            -name(tagname) = If you want to apply same css on same tag then you can use name selecter.
            -class(.classname) = if you want to apply same css on different tag then you can use class selecter 
            -id(#idname) = if you want to apply css in file single tag only then you can use id selecter
       2] combinater selecter
            -descendent selecter(selecter1 selecter2) = if you want to apply css on all selecter2 inside selecter1 then you can use descendent selecter.
            -child selecter(selecter1>selecter2) = if you want to apply css on only child selecter then ypu can use it.
            -genaral sibling(selecter1~selecter2) = it is use when we want to apply css on all sibling.
            -adjusent sibling(slecter1+selecter2) = if you want to apply css on just first sibling. 
       3] psuedo class selecter(selecter:psuedoclassname)
       4] psuedo element selecter(selecter::psuedoelementname)
       5] attribute selecter(["attributesname=value"]or ["attributesname"])   
2] event 
how to set event n jQuery?
syntax:jQuery(slecter).eventname(function(){
})
2]jQuery(selecter).on('eventname',function(){
})
3]$(seletcter).eventname/on('eventname',function(){
})
3] method
syntex: jQuery('selectpor)
*/
jQuery(document).ready(function() {
    jQuery('#p-2').hover(function(){
        console.log('Hover Eevnet is genrated')
    });
    jQuery('#p-2').on('click',function(){
        console.log('clicke event is genreted')
    });
    $('#div-1').on('dblclick', function(){
     console.log("double click event is ganareted");
   });
   jQuery("#btn-hide").on('click',function(){
    jQuery("#p-3").hide();
   })
    jQuery("#btn-show").on('click',function(){
    jQuery("#p-3").show();
   })
    jQuery("#btn-toggle").on('click',function(){
    jQuery("#p-3").toggle(5000);
   })
   jQuery('#div-1').hover(function(){
    jQuery(this).css('background-color','red')
   })
})
