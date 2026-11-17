(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function row(a,b){return '<li><span>'+a+'</span><b>'+b+'</b></li>';}
var sm=$('sd-m');if(sm){var sk=$('sd-k');
 var D={chicken:{light:['Crushed new potatoes with olive oil','Green beans with lemon and garlic','A spoon of yogurt and herbs'],cosy:['Roast potatoes','Buttered cabbage or carrots','Pan gravy']},beef:{light:['New potatoes','Tomato and red onion salad','Mustard dressing'],cosy:['Chips or mashed potato','Creamed spinach','Peppercorn sauce']},fish:{light:['Couscous with herbs','Fennel and orange salad','Lemon and capers'],cosy:['Buttery mash','Garden peas with mint','Parsley sauce']},pasta:{light:['No extra starch needed','Rocket and shaved fennel salad','Lemon zest and black pepper'],cosy:['Garlic bread','Roast tomatoes','Grated hard cheese']},curry:{light:['Steamed basmati rice','Cucumber, tomato and onion salad','Fresh coriander and lime'],cosy:['Rice and warm flatbread','Spiced roast cauliflower','Cooling yogurt']},veg:{light:['Lentils with a sharp dressing','Mixed leaf salad','Vinaigrette'],cosy:['Buttered new potatoes','Roast root vegetables','Herb cream or pesto']}};
 on([sm,sk],function(){var d=D[sm.value][sk.value];$('sd-o').innerHTML='<strong>Serve it with</strong><ul>'+row('Starch',d[0])+row('Vegetable',d[1])+row('To finish',d[2])+'</ul><p>'+(sk.value==='light'?'One side is cold or barely cooked, which keeps the plate fresh and frees up the hob.':'Put one side in the oven and keep only one on the hob, so everything is hot together.')+'</p>';});}
var ll=$('lr-l');if(ll){
 var R={chicken:[['Chicken noodle soup with stock, greens and ginger','Pie filling with leeks and a spoon of cream','Salad with crisp leaves and a mustard dressing'],'2–3 days'],rice:[['Egg fried rice with peas and spring onion','Stuffed peppers baked with tomato sauce','Rice cakes fried until crisp, with a salad'],'1 day'],roastveg:[['Frittata with eggs and cheese','Blended with stock into a pasta sauce or soup','Warm wraps with hummus and leaves'],'3 days'],mash:[['Fish cakes with tinned fish and herbs','Potato cakes fried in butter, topped with an egg','Topping for a cottage pie'],'2 days'],pasta:[['Baked pasta with tomato sauce and cheese','Pasta frittata, sliced like a cake','Cold pasta salad with a sharp dressing'],'2 days'],mince:[['Loaded baked potatoes','Stuffed peppers topped with cheese','Quick baked pasta or a filling for wraps'],'2–3 days']};
 on([ll],function(){var r=R[ll.value];$('lr-o').innerHTML='<strong>Three ways to use it</strong><ol>'+r[0].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ol><p>Keeps in the fridge for '+r[1]+'. Reheat until steaming hot all the way through, and only once.'+(ll.value==='rice'?' Rice must be cooled within an hour of cooking and kept chilled.':'')+'</p>';});}
var qa=$('dq-a');if(qa){var qc=$('dq-c'),qm=$('dq-m');
 function n(e){var v=parseInt(e.value,10);return isNaN(v)?0:Math.min(40,Math.max(0,v));}
 function g(x){return x>=1000?(x/1000).toFixed(1)+' kg':Math.round(x/10)*10+' g';}
 on([qa,qc,qm],function(){var a=n(qa),c=n(qc),p=a+c*0.5,m=qm.value,rows='';
  if(p<=0){$('dq-o').innerHTML='<p>Add at least one person.</p>';return;}
  if(m==='bone')rows+=row('Meat on the bone',g(p*325));else if(m==='boneless')rows+=row('Boneless meat or fish',g(p*165));else if(m==='pasta')rows+=row('Dried pasta',g(p*95));else rows+=row('Dried rice',g(p*75));
  if(m==='bone'||m==='boneless')rows+=row('Potatoes',g(p*225))+row('or dried rice',g(p*50));
  rows+=row('Vegetables',g(p*135))+row('Salad leaves',g(p*40));
  $('dq-o').innerHTML='<strong>For '+a+' adult'+(a===1?'':'s')+(c?' and '+c+' child'+(c===1?'':'ren'):'')+'</strong><ul>'+rows+'</ul><p>Raw weights, for ordinary appetites. Add a quarter more if you want planned leftovers for tomorrow.</p>';});}
})();
