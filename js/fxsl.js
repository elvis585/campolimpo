//javascript document

function munici(n) {
	var x = (n < 10) ? "0"+n : n;
mun=x;
p='i.html?00?'+"?";
var myWindow = window.open(p,"_self","",true);}

function mapm(n) {
if (claspop=="L") {var x = (n < 10) ? "0"+n : n;} else {
if (n < 100) {if (n<10) {var x= "00"+n} else {var x= "0"+n}} else {var x=n}};
mun=x;
p='i.html?'+ind+'?'+'?';
var myWindow = window.open(p,"_self","",true);}

function ShowPop(id) {document.getElementById(id).style.display = 'block';}
function HidePop(id) {document.getElementById(id).style.display = 'none';}
function Pop(id){
	var i = (id < 10) ? "0"+id : id;
	tmp="term"+i;
	ShowPop(tmp); }
function Popf(id){
	var i = (id < 10) ? "0"+id : id;
	tmp="term"+i;
	HidePop(tmp); }
function openN (x) {
var i = (x < 10) ? '0'+x : x;
p='i.html?'+i+'?';
var myWindow = window.open(p,"_self","",true);
ind=i;
}
function tabmun(){
	html="";
	htmlr="";
	end=eval('i'+ind+'.ac[1]')
	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");
	cen = eval("c"+ind);
	if (cen==1) {ano1='1991';ano2='2000';ano3='2010';ano4='2022'}
	if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2021'}
	if (ind=='24') {ano1='2023';ano2='2024';ano3='2025';};
	if (ind=='36') {ano1='2012';ano2='2013';ano3='2014';ano4='2015';ano5='2016';ano6='2017';ano7='2018';ano8='2019';ano9='2020';ano10='2021';ano11='2022';ano12='2023';ano13='2024';ano14='2025';};
	if (ind=='37'||ind=='56') {ano1='2017';ano2='2018';ano3='2019';ano4='2020';ano5='2021';ano6='2022';ano7='2023';ano8='2024';ano9='2025';};
	if (ind=='45' || ind=='46' || ind=='47') {ano1='2022';ano2='2023';ano3='2024';ano4='2025';};
	if (ind=='63') {ano1='1970';ano2='1980';ano3='1991';ano4='2000';ano5='2010';ano6='2022'}
	t1 = "Absoluto";
	t2 = "Indicador";
	if (ind=='67') {t1="Posição no país";t2="IDHM";ano1='1991';ano2='2000';ano3='2010'}
	if (ind=='11'||ind=='12'||ind=='13'||ind=='14') {ano1='2005';ano2='2007';ano3='2009';ano4='2011';ano5='2013';ano6='2015';ano7='2017';ano8='2019';ano9='2021';ano10='2023'}
	if (ind=='15'||ind=='16'||ind=='17'||ind=='18'||ind=='19') {ano1='2019';ano2='2020';ano3='2021';ano4='2022';ano5='2023';ano6='2024';ano7='2025';}
		if (ind=='33'||ind=='34') {ano1='2014';ano2='2015';ano3='2016';ano4='2017';ano5='2018';ano6='2019';ano7='2020';ano8='2021';ano9='2022';ano10='2023';ano11='2024';ano12='2025';}
	if (ind=='11'||ind=='12'||ind=='13'||ind=='14'|| ind=='24'|| ind=='45') {if (ind=='45') {tit='R$'} else { if (ind=='24') {tit='Indicador'} else  {tit='IDEB'}   }; html+="<table cellspacing='2' cellpadding='1'><tr><td colspan='2'><div class='tab_tit'><center>"+muni+" - série histórica</center></div></td></tr><tr><td><div class='tab_tit'>Ano</div></td><td><div class='tab_tit'>"+tit+"</div></td></tr>"; } else { 

html+="<table cellspacing='2' cellpadding='1'><tr><td colspan='3'><div class='tab_tit'><center>"+muni+" - série histórica</center></div></td></tr><tr><td><div class='tab_tit'>Ano</div></td><td><div class='tab_tit'>"+t1+"</div></td><td><div class='tab_tit'>"+t2+"</div></td></tr>";}
    for(var x=1;x<=end;x++) {
	y=x-1;
	j=eval('i'+ind+".m"+parseInt(mun)+".h["+y+"]");
	i=j.replace(',','.');
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(i)>100) {var j = '100(+)';}
	abs=eval('i'+ind+".m"+parseInt(mun)+".a["+y+"]");
    	if (ind=='11'||ind=='12'||ind=='13'||ind=='14'|| ind=='24' || ind=='45') {html+="<tr class='linha'><td><div class='tab_valor'>"+eval('ano'+x)+"</div></td><td><div class='tab_valor'>"+j+"</div></td></tr>";} else {html+="<tr class='linha'><td><div class='tab_valor'>"+eval('ano'+x)+"</div></td><td><div class='tab_valor'>"+abs+"</div></td><td><div class='tab_valor'>"+j+"</div></td></tr>";};
}
if (ind=='68') {var ac = eval('i68 .ac[0]');html+="<tr><td onClick='Pop(6)' class='legendatd' colspan='5'><div id='pibcomp'>Clique aqui para ver a composição do PIB em 2021</div></td></tr>";}
html+="</table>"
             document.getElementById('tab3').innerHTML=html;
}
function seh() {
	html="";
	cont=0;
	htmlc="";
	contc=0;
	htmld="";
	contd=0;
	dpop="";
	dpopc="";
	dpopd="";
	ht100=0;
	htl100="";
	

function calcularClasse(x, cortes) {
  let classe = 1;
  for (let i = 0; i < cortes.length; i++) {
    if (cortes[i] <= x) classe += 1;
  }
  return classe;
}
mc=parseInt(mun);
const claspop = calcularClasse(mc,cortepop);


if (claspop=='L') {if (mun=='00'){tex="<center>A tabela abaixo mostra as séries históricas de todos os indicadores do Estado de São Paulo</center>"} else {tex="<center>A tabela abaixo mostra as séries históricas de todos os indicadores da Região Administrativa</center>";}} else {tex="<center>"+eval('txtl'+ind)+"</center>";}
	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");;
	cen = eval("c"+ind);
	if (cen==1) {ano1='1991';ano2='2000';ano3='2010';ano4='2022'}
	if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2021'}
	if (ind=='24') {ano1='2023';ano2='2024';ano3='2025';};
	if (ind=='67') {ano1='1991';ano2='2000';ano3='2010';}
	if (parseInt(claspop)>7||claspop=='L') {xr='0'} else {xr='1';}
	if (i=='11'||i=='12'||i=='13'||i=='14') {ano1='2005';ano2='2007';ano3='2009';ano4='2011';ano5='2013';ano6='2015';ano7='2017';ano8='2019';ano9='2021';ano10='2023'}
 	html+="<div><div><table><tr><td colspan='15'><div class='tab_tit'><center>Séries históricas dos indicadores de "+muni+"</center></div></td></tr><tr><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>"+ano1+"</div></td><td><div class='tab_tit'>"+ano2+"</div></td><td><div class='tab_tit'>"+ano3+"</div></td><td><div class='tab_tit'>"+ano4+"</div></td><td><div class='tab_tit'>"+ano5+"</div></td><td><div class='tab_tit'>"+ano6+"</div></td><td><div class='tab_tit'>"+ano7+"</div></td><td><div class='tab_tit'>"+ano8+"</div></td><td><div class='tab_tit'>"+ano9+"</div></td><td><div class='tab_tit'>"+ano10+"</div></td><td><div class='tab_tit'>"+ano11+"</div></td><td><div class='tab_tit'>"+ano12+"</div></td><td><div class='tab_tit'>"+ano13+"</div></td><td><div class='tab_tit'>"+ano14+"</div></td><td><div class='tab_tit'>"+ano15+"</div></td><td><div class='tab_tit'>"+ano16+"</div></td></tr>";
	htmlc+="<table><tr><td colspan='5'><div class='tab_tit'><center>Séries históricas dos indicadores baseados no Censo do IBGE</center></div></td></tr><tr><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>1991</div></td><td><div class='tab_tit'>2000</div></td><td><div class='tab_tit'>2010</div></td><td><div class='tab_tit'>2022</div></td></tr>";
	htmld+="<table cellspacing='2'><tr><td colspan='11'><div class='tab_tit'><center>Séries históricas do IDEB de "+muni+"</center></div></td></tr><tr><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>2005</div></td><td><div class='tab_tit'>2007</div></td><td><div class='tab_tit'>2009</div></td><td><div class='tab_tit'>2011</div></td><td><div class='tab_tit'>2013</div></td><td><div class='tab_tit'>2015</div></td><td><div class='tab_tit'>2017</div></td><td><div class='tab_tit'>2019</div><td><div class='tab_tit'>2021</div></td><td><div class='tab_tit'>2023</div></td></tr>";

htmle="<table cellspacing='2'><tr><td colspan='8'><div class='tab_tit'><center>Variação populacional de "+muni+"</center></div></td></tr><tr><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>1970</div></td><td><div class='tab_tit'>1980</div></td><td><div class='tab_tit'>1991</div></td><td><div class='tab_tit'>2000</div></td><td><div class='tab_tit'>2010</div></td><td><div class='tab_tit'>2022</div></td></tr>";


	for(var x=1;x<=74;x++) {
	var i = (x < 10) ? "0"+x : x;
	try {eval("nind"+i)} catch(e) {continue};
	cen = eval("c"+i);
	if (x=='63'||x=='64'||x=='65'||x=='66'|x=='70'|x=='71') {continue;}
	rest=eval('r'+i);
	if(claspop=='L' && x=='67') {continue;}
	try {qano=eval('i'+i+'.ac[1]')} catch(e) {continue}//qt de anos do indicador
	qanom='16';//qt máxima de anos na tabela
	anocomp=eval('i'+i+'.ac[0]')
	name=eval('nindt'+i);
	sn=eval('sen'+i);
	si=leg.tex[sn];
	ttt=x+200;
	tmy="<a class='non' href='i.html?"+i+"?"+mun+"?' onMouseOver='Pop("+ttt+")' onMouseOut='Popf("+ttt+")'>"+name+"</a>";
	if (cen=='1'||cen=='2') {
marg=1100+contc*20;cor = "#ebebeb";teste = contc % 2;vcor = (teste == 0) ? cor : "#d2d2d2";
htmlc+="<tr><td><div class='tab_tit'>"+tmy+"</div></td>";
	for(var y=0;y<4;y++) {
t=eval('i'+i+'.m'+parseInt(mun)+' .h[y]'); if(t==undefined) {t1='-'} else {t1=t};
htmlc+="<td><div class='tab_tex'>"+t1+"</div></td>";  
dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+i)+"</p><p><b>Comentário</b>: "+eval('txtl'+i)+"</p></div>";
}
htmlc+="</tr>";
contc+=1;
}//ATÉ AQUI CENSO
else {//COMEÇA NÃO CENSO
	if (rest=='1' && xr=='1' ||i=='43' || i=='45')
		{//ABRE REST ==1
		html+="<tr><td><div class='tab_tit'>"+tmy+"</div></td>";
		for(var y=0;y<qanom;y++) {
		t1=eval('i'+i+'.m'+parseInt(mun)+' .a[y]'); if (t1==undefined) {t1='-';}
		if (i=='45') { t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y-12]');if(t1==undefined) {t2='-'} else{t3=t1.replace('.','');t4=parseInt(t3);t2=Intl.NumberFormat('pt-BR').format(t4)  }}		
		html+="<td><div class='tab_tex'>"+t2+"</div></td>";
		dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+i)+"</p><p><b>Comentário</b>: "+eval('txtl'+i)+"</p></div>";}
		html+="</tr>";
		}//FECHA REST==1

		else
		{//ABRE NÃO REST
			if (i=='01'||i=='02'||i=='03'||i=='04'||i=='53')
			{//ABRE I==01
			html+="<tr><td><div class='tab_tit'>"+tmy+"</div></td>";
			for(var y=0;y<qanom;y++) {
			t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y]'); if(t1==undefined) {t1='-'} else {t1x=t1.replace(',','.');tt1=parseFloat(t1x);if (tt1>100) 			{t1='100(+)';ht100+=1;}}
			html+="<td><div class='tab_tex'>"+t1+"</div></td>";
			dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+i)+"</p><p><b>Comentário</b>: "+eval						('txtl'+i)+"</p></div>";}
			html+="</tr>";
			}//FECHA I==01
 			else 
		{//ABRE NÃO 01
	 			if (i=='15'||i=='16'||i=='17'||i=='18'||i=='19'||i=='33'||i=='34')
				 {//ABRE NÃO 01 I==15
			html+="<tr><td><div class='tab_tit'>"+tmy+"</div></td>";
			for(var y=0;y<qanom;y++) {
	
	if (i=='33'||i=='34') { if (y<4) {t1='-'} else {   
			t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y-4]')};if(t1==undefined) {t1='-'};} else {
			if (y<9) {t1='-'} else {
			t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y-9]')};if(t1==undefined) {t1='-'};}
			html+="<td><div class='tab_tex'>"+t1+"</div></td>";
			dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+i)+"</p><p><b>Comentário</b>: "+eval						('txtl'+i)+"</p></div>";}				
				} //FECHA NÃO 01 I==15
				else
				{//ABRE NÃO 01 NÃO I==15

if (i=='11'||i=='12'||i=='13'||i=='14')
{//ABRE ==11
htmld+="<tr><td><div class='tab_tit'>"+tmy+"</div></td>";
				for(var y=0;y<10;y++) {
				t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y]');if(t1==undefined) {t1='-'}
				htmld+="<td><div class='tab_tex'>"+t1+"</div></td>";
				dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+i)+"</p><p><b>Comentário</b>: "+eval						('txtl'+i)+"</p></div>";}

				contd+=1;}//FECHA==11
 else {

	
				html+="<tr><td><div class='tab_tit'>"+tmy+"</div></td>";
				for(var y=0;y<qanom;y++) {
				t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y]');if(t1==undefined) {t1='-'}
				if (i=='24'||i=='36') { t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y-13]');if(t1==undefined) {t1='-'}}
				if (i=='37'||i=='56') { t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y-7]');if(t1==undefined) {t1='-'}}
				if (i=='45'||i=='46'||i=='47') { t1=eval('i'+i+'.m'+parseInt(mun)+' .h[y-12]');if(t1==undefined) {t1='-'}}
				html+="<td><div class='tab_tex'>"+t1+"</div></td>";
				dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+i)+"</p><p><b>Comentário</b>: "+eval						('txtl'+i)+"</p></div>";}//FECHA NÃO 11
				}//FECHA NÃO 01 NÃO I==15
			}//FECHA NÃO 01
	}//FECHA NÃO REST
}//FECHA REST
	

cont+=1;}//FECHA CENSO
};//FECHA FOR
html+="</table><br><br>";
htmlc+="</table><br><br>";


	htmle+="<tr><td><div class='tab_tit'><a class='non' href='i.html?63?"+mun+"?' onMouseOver='Pop(263)' onMouseOut='Popf(263)'>Variação populacional</a></div></td>";//variação populacional
				for(var y=0;y<6;y++) {
				t1=eval('i'+63+'.m'+parseInt(mun)+' .h[y]');if(t1==undefined) {t1='-'}
				htmle+="<td><div class='tab_tex'>"+t1+"</div></td>";}
				dpop+="<div id='term263' class='popupa'><p><b>Definição</b>: "+eval('txt63')+"</p><p><b>Comentário</b>: "+eval						('txtl63')+"</p></div>";

				htmle+="</tr><tr><td><div class='tab_tit'><a class='non' href='i.html?63?"+mun+"?' onMouseOver='Pop(2630)' onMouseOut='Popf(2630)'>População</a></div></td>";
				for(var y=0;y<6;y++) {
				t1=eval('i'+63+'.m'+parseInt(mun)+' .a[y]');if(t1==undefined) {t1='-'}
				htmle+="<td><div class='tab_tex'>"+t1+"</div></td>";}
				dpop+="<div id='term2630' class='popupa'><p><b>Definição</b>: "+eval('txt63a')+"</p><p><b>Comentário</b>: "+eval						('txtl63a')+"</p></div>";
				htmle+="</tr>";



	htmle+="</table></div><div class='crc'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
	htmld+="</table><br><br>";
	document.getElementById('poptota').innerHTML=dpop;
	document.getElementById('conteudo-series').innerHTML=html+htmld+htmlc+htmle;
	document.getElementById('leg').innerHTML=tex;
}

function perf(){
html="";

	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");+" - "+eval("nind"+ind);
if (ind=='66') {


html+="<table class='tgr' cellspacing='2' cellpadding='1'><tr><td colspan='3'><div class='tab_tit'><center>"+muni+" 2022</center></div></td></tr><tr><td><div class='tab_tit'>Tipo de endereço</div></td><td><div class='tab_tit'>Total</div></td><td><div class='tab_tit'>%</div></td></tr>";
     for(var y=0;y<=8;y++) {
	x=y+1;
	tmr=eval('t66'+x);
	tmz = eval('i'+ind+'.m'+parseInt(mun)+' .a[y]');//total
	tms = eval('i'+ind+'.m'+parseInt(mun)+' .h[y]');//%
	if(tms=='0,00' && parseInt(tmz)>0) {tms="<0,01"};
	
    html+="<tr class='linha'><td><div class='tab_tita'>"+tmr+"</div></td><td><div class='tab_valor'>"+tmz+"</div><td><div class='tab_valor'>"+tms+"</div></td></tr>";
}
html+="</table></div></div><div class='crc'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
             document.getElementById('tab3').className='de';

}
else 
{ if (ind=='65'){
html+="<table class='tgr' cellspacing='2' cellpadding='1'><tr><td colspan='9'><div class='tab_tit'><center>"+muni+" 2022</center></div></td></tr><tr><td><div class='tab_tit'>Faixa etária</div></td><td><div class='tab_tit'>Masculino</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Feminino</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Sexo n/d</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Total</div></td><td><div class='tab_tit'>%</div></td></tr>";
     for(var y=0;y<=11;y++) {
	x=y+1;
	tmz = eval('i'+ind+'.m'+parseInt(mun)+' .t[y]');//total
	tms = eval('i'+ind+'.m'+parseInt(mun)+' .h[y]');//masc
	tr = (parseInt(tms.replaceAll('.',''))/parseInt(tmz.replaceAll('.',''))*100).toFixed(2);	
	if (tmz=='0') {tmx='0,00'} else {tmx = tr.replaceAll(".",",");};//perc masc
	tmy = eval('i'+ind+'.m'+parseInt(mun)+' .f[y]');//fem
	tr1 = (parseInt(tmy.replaceAll('.',''))/parseInt(tmz.replaceAll('.',''))*100).toFixed(2);	
	if (tmz=='0') {tmw='0,00'} else {tmw = tr1.replaceAll(".",",");};//perc fem
	tml = eval('i'+ind+'.m'+parseInt(mun)+' .ig[y]');//sexnd
	tr2 = (parseInt(tml.replaceAll('.',''))/parseInt(tmz.replaceAll('.',''))*100);	
	if (tmz=='0') {tmm='0,00'} else { if (tr2>0&&tr2<0.01) {tmm="<0,01"} else {tmm = (tr2.toFixed(2)).replaceAll(".",",");}  };//perc sexnd
	tr3=((parseInt(tmz.replaceAll('.',''))/parseInt(eval('i'+ind+'.m'+parseInt(mun)+' .t[11]').replaceAll('.',''))*100));//perc total
	if (tr3>0&&tr3<0.01) {tmn="<0,01"} else {tmn=(tr3.toFixed(2)).replaceAll(".",",")}
	tmr = eval("fx"+ind+y);
    html+="<tr class='linha'><td><div class='tab_tita'>"+tmr+"</div></td><td><div class='tab_valor'>"+tms+"</div><td><div class='tab_valor'>"+tmx+"</div></td><td><div class='tab_valor'>"+tmy+"</div></td><td><div class='tab_valor'>"+tmw+"</div></td><td><div class='tab_valor'>"+tml+"</div></td><td><div class='tab_valor'>"+tmm+"</div></td><td><div class='tab_valor'>"+tmz+"</div></td><td><div class='tab_valor'>"+tmn+"</div></td></tr>";
}
html+="</table></div></div><div class='crc'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
             document.getElementById('tab3').className='de';
}

else {
cen=eval("c"+ind);
if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2022'}


html+="<table class='tgr' cellspacing='2' cellpadding='1'><tr><td colspan='7'><div class='tab_tit'><center>"+muni+" "+ano4+"</center></div></td></tr><tr><td><div class='tab_tit'>Faixa etária</div></td><td><div class='tab_tit'>Masculino</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Feminino</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Total</div></td><td><div class='tab_tit'>% etário</div></td></tr>";
     
if(ind=='64') {	for(var y=0;y<i64.fx.length;y++) {
	x=y+1;
	popm=parseInt(eval('i64.m'+mun+'.h['+y+']'));
	popf=parseInt(eval('i64.m'+mun+'.f['+y+']'));
	popt=parseInt(eval('i64.m'+mun+'.h['+y+']'))+parseInt(eval('i64.m'+mun+'.f['+y+']'));
	poptot=parseInt(eval('i64.m'+mun+'.h[21]'))+parseInt(eval('i64.m'+mun+'.f[21]'));
	tmz = popt.toLocaleString('pt-br');//total
	tms = popm.toLocaleString('pt-br');//masc
	if(popt==0) {tmx='0,00'} else {tmx=((popm/popt)*100).toLocaleString('pt-BR',{ style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})};//perc masc
	tmy = popf.toLocaleString('pt-br');//fem
	if(popt==0) {tmw='0,00'} else {tmw=((popf/popt)*100).toLocaleString('pt-BR',{ style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})};//perc fem	
	tr3=(popt/poptot*100).toLocaleString('pt-BR',{style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2});//perc total
	if (tr3>0&&tr3<0.01) {tmq="<0,01"} else {tmq=tr3}
	tmr = eval('i64.fx['+y+']');
    html+="<tr class='linha'><td><div class='tab_tita'>"+tmr+"</div></td><td><div class='tab_valor'>"+tms+"</div><td><div class='tab_valor'>"+tmx+"</div></td><td><div class='tab_valor'>"+tmy+"</div></td><td><div class='tab_valor'>"+tmw+"</div></td><td><div class='tab_valor'>"+tmz+"</div></td><td><div class='tab_valor'>"+tmq+"</div></td></tr>";}
}

else {for(var y=0;y<=10;y++) {
	x=y+1;
	tmz = eval('i'+ind+'.m'+parseInt(mun)+' .t[y]');//total
	tms = eval('i'+ind+'.m'+parseInt(mun)+' .h[y]');//masc
	tr = (parseInt(tms.replaceAll('.',''))/parseInt(tmz.replaceAll('.',''))*100).toFixed(2);	
	if (tmz=='0') {tmx='0,00'} else {tmx = tr.replaceAll(".",",");};//perc masc
	tmy = eval('i'+ind+'.m'+parseInt(mun)+' .f[y]');//fem
	tr1 = (parseInt(tmy.replaceAll('.',''))/parseInt(tmz.replaceAll('.',''))*100).toFixed(2);	
	if (tmz=='0') {tmw='0,00'} else {tmw = tr1.replaceAll(".",",");};//perc fem
	tr3=((parseInt(tmz.replaceAll('.',''))/parseInt(eval('i'+ind+'.m'+parseInt(mun)+' .t[10]').replaceAll('.',''))*100));//perc total
	if (tr3>0&&tr3<0.01) {tmq="<0,01"} else {tmq=(tr3.toFixed(2)).replaceAll(".",",")}
	tmr = eval("fx"+ind+x);
    html+="<tr class='linha'><td><div class='tab_tita'>"+tmr+"</div></td><td><div class='tab_valor'>"+tms+"</div><td><div class='tab_valor'>"+tmx+"</div></td><td><div class='tab_valor'>"+tmy+"</div></td><td><div class='tab_valor'>"+tmw+"</div></td><td><div class='tab_valor'>"+tmz+"</div></td><td><div class='tab_valor'>"+tmq+"</div></td></tr>";}} 

if (ind=='64') {html+="</table></div><br><br><br></div>";createAgePyramid();document.getElementById('dc').style.display='none';} else {html+="</table></div></div><div class='crc'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";}
             document.getElementById('tab3').className='de';
}
}
             document.getElementById('tab3').innerHTML=html;}

function muns(){
	html="";
	htmlr="";

if (ind=='98'||ind=='100') {
if (ind=='100') {
cont=1;

     for(var x=1;x<=16;x++){
	var y = (x < 10) ? "0"+x : x;
	lx="l/i.html?00?"+y+"?";
	mx=nra[x-1]
	teste=cont%3;
	if (teste==0) {cl='drx'} else {  if (teste==2) {cl='dqx'} else {cl='dpx'}};
        html+="<div class='"+cl+"'><a href='"+lx+"'>"+mx+"</a></div>";
	cont+=1;
}
html+="<br><br></div><div class='crd'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
             document.getElementById('ud').innerHTML=html;
} else {
	html="<div><a class='classe1' href='#A'>A</a>  <a class='classe1' href='#B'>B</a>  <a class='classe1' href='#C'>C</a>  <a class='classe1' href='#D'>D</a>  <a class='classe1' href='#E'>E</a>  <a class='classe1' href='#F'>F</a>  <a class='classe1' href='#G'>G</a>  <a class='classe1' href='#H'>H</a>  <a class='classe1' href='#I'>I</a>  <a class='classe1' href='#J'>J</a>  <a class='classe1' href='#L'>L</a>  <a class='classe1' href='#M'>M</a>  <a class='classe1' href='#N'>N</a>  <a class='classe1' href='#O'>O</a>  <a class='classe1' href='#P'>P</a>  <a class='classe1' href='#Q'>Q</a>  <a class='classe1' href='#R'>R</a>  <a class='classe1' href='#S'>S</a>  <a class='classe1' href='#T'>T</a>  <a class='classe1' href='#U'>U</a>  <a class='classe1' href='#V'>V</a>  <a class='classe1' href='#Z'>Z</a></div>";
	l="A";
	tex="<div id='A' class='do'>"+l+"</div>";
html+=tex+"<div class='ds'>";
cont=1;
     for(var x=1;x<=645;x++) {
	m = eval("mx"+x);
	k=parseInt(m);
	if (x < 100) {if (x<10) {var n= "00"+x} else {var n= "0"+x}} else {var n=x};
	mu = eval("mid .nom["+(k-1)+"]");
	teste=cont%3;
	if (teste==0) {cl='dr'} else {  if (teste==2) {cl='dq'} else {cl='dp'}};
        html+="<div id='mun' class='"+cl+"'onClick='mapm("+k+")'>"+mu+"</div>";
	if (x=='52') {l="B";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='94') {l="C";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='152') {l="D";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='163') {l="E";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='178') {l="F";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='190') {l="G";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='217') {l="H";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='220') {l="I";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='277') {l="J";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='299') {l="L";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='317') {l="M";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='362') {l="N";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='382') {l="O";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='395') {l="P";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='469') {l="Q";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='474') {l="R";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='502') {l="S";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='588') {l="T";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='622') {l="U";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='630') {l="V";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
	if (x=='644') {l="Z";html+="<div id='"+l+"'class='do'>"+l+"</div><div class='ds'>";cont=0;}
cont+=1;}
html+="<br><br></div></div><div class='crd'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>"}}
else {tex = eval('t'+ind);html+=tex+"</div><div class='crd'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";}
             document.getElementById('ud').innerHTML=html;
}
function present(){ 
if (claspop=='L') {
px13="";
pxa13="";
conta=0;
contb=0;
	for (var x=1;x<=68;x++) {
	var y = (x < 10) ? "0"+x : x;
	if (y=='35' | y=='63' | y=='59' | y=='88' | y=='89' | y=='90') {continue;};
	try {nom=eval('nind'+y)} catch(err) {continue;};
	try {clasa=eval("p"+mun+y);clas=clasa.split('_')[0]} catch(err) {continue;};
if (clas=='5') {i="<a class='legendam' onClick='openN("+y+")'>"+eval("nind"+y)+"</a>";px13+="<li>"+i+"</li>";conta+=1;} else {px13+="";}
if (clas=='4') {i="<a class='legendam' onClick='openN("+y+")'>"+eval("nind"+y)+"</a>";pxa13+="<li>"+i+"</li>";contb+=1;} else {pxa13+="";}
}
cont=conta+contb;
txa13=pxa13;
tx13=pxa13+px13+"</ul>";
if (mun=="00") {htmll="<p><br>O "+eval("m"+mun)+" é constituída de "+eval('cn'+mun)+" municípios, organizados em 16 Regiões de Integração (RI). Os dados e indicadores do Estado são apresentados juntamente com os das RIs, mas não são classificados junto com elas. Ou seja, os resultados estaduais aparecem sempre com posição igual a zero e grupo de classificação cinza, em lugar do ranking aplicado a municípios e RIs. Em alguns casos, os dados do Estado superam, em pequena proporção, a soma dos municípios em função de registros que não trazem a cidade de origem - principalmente no caso das bases de dados de saúde, em que existe a classificação 'município desconhecido'."} else {
htmll="<p><br>A "+eval("m"+mun)+" é constituída de "+eval('cn'+mun)+" municípios: "+eval('c'+mun)+".<br>Na comparação com as demais Regiões de Integração, está está nas piores classificações (penúltimo e último grupos) em "+cont+" indicadores:</p><p><br>Penúltimo grupo<br><ul>"+pxa13+"</ul></p><p><br>Último grupo</p><ul>"+px13+"</ul>";}

document.getElementById('ud').innerHTML=htmll;} else {

tx1=eval("mid .nom["+(parseInt(mun)-1)+"]");;// nome do mun
tx2=(parseInt(eval('i64.m'+parseInt(mun)+'.h[21]'))+parseInt(eval('i64.m'+parseInt(mun)+'.f[21]'))).toLocaleString('pt-BR',{ style: 'decimal'});//pop2022
txa3=parseInt(eval('mid.ra['+(mun-1)+']'))-1;
tx3=eval('mid.nra['+txa3+']');
qa4=parseInt(i67.ac[1])-1;
tx4=eval('i67.m'+parseInt(mun)+'.h['+qa4+']')//idhm
tx5=ih[parseInt(tx4)];
qa6=parseInt(i68.ac[1]);
rec=eval('i68.m'+parseInt(mun)+'.h['+(qa6-1)+']');
tx6='R$ '+rec + " mil, segundo os dados mais recentes de "+(2010+qa6-1); //pib per capita
px7=parseFloat(rec.replace(",","."));
py7=parseFloat(eval('i68.m'+parseInt(mun)+'.h[0]').replace(",","."));
pw7=(px7-py7)/py7*100;
pz7=String(pw7).replaceAll(".",",");
loc=pz7.indexOf(",")+3;
tx7=pz7.substring(0,loc)+"%";
tx8="R$ " + eval('i68.m'+parseInt(mun)+'.h[0]') + " mil"; //pib per capita 2010
qa9=parseInt(i46.ac[1]);
tx9=eval('i46.m'+parseInt(mun)+'.a['+(qa9-1)+']'); // empregos formais adolescentes
qa10=parseInt(i45.ac[1]);
anu=2010+parseInt(i45.ac[1])+parseInt(i45.ac[0])-2;
tx10="R$ " + eval('i45.m'+parseInt(mun)+'.a['+(qa10-1)+']')+", em "+anu;// média salarial adolescentes
tx11=parseInt(eval('i45.m'+parseInt(mun)+'.p[2]'))+'º';//posição no estado
est="São Paulo";
tx12=" as 645 cidades paulistas";
qa15=parseInt(i61.ac[1]);
tx21=eval('ano'+qa15);//ano das receitas
an15=parseInt(i61.ac[1])-1;
txa15= eval('i61.m'+parseInt(mun)+'.a['+an15+']')//receitas
tx15=(parseInt(txa15.replaceAll('.',''))/1000).toLocaleString('pt-BR',{ style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2});;
tx16= eval('i61.m'+parseInt(mun)+'.h['+an15+']')//receitas per capita
tx17 = parseInt(eval('i61.m'+parseInt(mun)+'.p[2]'))+"ª"; //colocação no estado receitas per capita
qa18=parseInt(i45.ac[1]);
tx18=eval('i45.m'+parseInt(mun)+'.a['+(qa10-1)+']')+", em "+anu;// média salarial juvenil
tx19=parseInt(eval('i45.m'+parseInt(mun)+'.p[2]'))+"º"; //colocação media salarial juvenil;//posição no estado
qeg=parseInt(i53.ac[1]);
eg=eval('i53.m'+parseInt(mun)+'.h['+(qeg-1) +']')//tratamento de esgoto
pg=parseInt(eval('i53.m'+parseInt(mun)+'.p[2]'))+"º";

if (eg=="n/d") {tx20="não há dados sobre o tratamento de esgoto";}
else {txb20=" e o tratamento do esgoto produzido alcança "+eg+"% ("+pg+" lugar no Estado).";}
tx20=txb20;
}


px13="";
pxa13="<ul>";
	for (var x=1;x<=74;x++) {
	var y = (x < 10) ? "0"+x : x;
	try {nom=eval('nind'+y)} catch(err) {continue;};
	if (y=='35'| y=='63' | y=='59' | y=='88' | y=='89' | y=='90') {continue;};
	try {clas=eval('i'+y+'.m'+parseInt(mun)+'.c[2]')} catch(err) {continue;};


if (clas=='5') {i="<a class='legendam' onClick='openN("+y+")'>"+eval("nind"+y)+"</a>";px13+="<li>"+i+"</li>";} else {px13+="";}
if (clas=='4') {i="<a class='legendam' onClick='openN("+y+")'>"+eval("nind"+y)+"</a>";pxa13+="<li>"+i+"</li>";} else {pxa13+="";}
}
txa13=pxa13;
tx13="</ul><p><br>Penúltimo grupo<br><ul>"+pxa13+"</ul></p><p><br>Último grupo</p><ul>"+px13+"</ul>";

tx14=tx1;
html=t00;
end="21";
     for(var x=1;x<=end;x++) {
	a="tex"+x;
	b=eval("tx"+x);
html1=html.replace(a,b);
html=html1;}
html2=html1+"</div></div>";
document.getElementById('ud').innerHTML=html2;}
function pib(){
	html="";
	htmlr="";
	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");;
	var ac = eval('i68 .ac[0]');
html+="<table><tr><td colspan='11'><div class='tab_tit'><center>"+muni+" - Composição do PIB em 2021 (em mil R$)</center></div></td></tr><tr><td><div class='tab_tit'>Agricultura</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Indústria</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Serviços</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Administração</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Impostos</div></td><td><div class='tab_tit'>%</div></td><td><div class='tab_tit'>Total</div></td></tr><tr>";
     for(var x=0;x<10;x++) {
	tmt = eval('i68 .m'+parseInt(mun)+' .ca['+x+']');
    html+="<td><div class='tab_valor'>"+tmt+"</div></td>";}

	var qa = parseInt(eval('i68 .ac[1]'))-3;//ajustado para 2021
tmq=eval('i68 .m'+parseInt(mun)+' .a['+qa+']');
    html+="<td><div class='tab_valor'>"+tmq+"</div></td>";
html+="</tr><tr><td onClick='Popf(6)' class='legendatda'>Fechar</td><td colspan=8><br>Administração refere-se a educação, saúde e seguridade social públicas<br>O IBGE não calculou ainda os componentes do PIB municipal para anos posteriores a 2021</td></tr></table>"
             document.getElementById('pib').innerHTML=html;
}
function comp(){
	cont=1;
	dpop="</div>";
	nm = eval('mid .nom['+(parseInt(mun)-1)+']');// nome do mun


function calcularClasse(x, cortes) {
  let classe = 1;
  for (let i = 0; i < cortes.length; i++) {
    if (cortes[i] <= x) classe += 1;
  }
  return classe;
}
mc=parseInt(mun);
cp = calcularClasse(mc,cortepop);





	np = eval('mid .npop['+(parseInt(cp)-1)+']');//nome de clapop
	qp= eval('qt .p['+(parseInt(cp)-1)+']');//quantidade de mun na claspop
if (cp=='L') {
legin = "Indicadores de "+nm+" apresentados de acordo com a classificação entre as 16 Regiões Administrativas de São Paulo";
legi = "<div class='dn'><center><p class='titulo-comparacao'>"+nm+" entre as Regiões Administrativas</p><p class='menor'>"+legin+"</p></center></div>";
document.getElementById('term07').style.padding = '0px';
} else {	
legin = "Indicadores de "+nm+" apresentados de acordo com a classificação entre os "+qp+" municípios de mesmo porte ("+np+")";
legi = "<div class='dn'><center><p class='titulo-comparacao'>"+nm+" entre municípios do mesmo porte</p><p class='menor'>"+legin+"</p></center></div>";}
     //topo comparacao
     html="<table><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>Valor</div></td><td class='unid'><div class='tab_tit'>Unidade</div></td><td><div class='tab_tit'>C</div></td></tr>";
	var vetor = new Array();
	for(var x=1;x<=74;x++) {
	if (x==70||x==71) {continue};
	var i = (x < 10) ? "0"+x : x; //numero do indicador em string
	try {eval("nind"+i)} catch(e) {continue};
	var y=x-1;//posição do indicador nos array
	try{var p = eval('i'+i+'.m'+parseInt(mun)+'.p[0]');} catch(e) {continue};//pos do mun no indicador
	var c = eval('i'+i+'.m'+parseInt(mun)+'.c[0]'); //class do mun no indicador
	var ac = eval('i'+i+'.ac[0]');//anocomp
	var ano=ac-1;//
	vh = eval('i'+i+'.m'+parseInt(mun)+'.h['+ano+']');//valor do indicador string
	vhn=parseFloat(vh);//valor do indicador numerico
	if ((x<5)&&parseFloat(vhn)>=100) {var p='01';var c='1'} 
	var w= c+"_"+p+"_"+i;
	vetor.push(w);}
	vetor.sort();
	for (x=1; x<=69;x++) {
	var i = (x < 10) ? "0"+x : x;
	var q=x-1;
	var con=vetor[q];
	try{p1=con.split('_')[1];} catch(err) {continue;}//posição do mun
	ni=con.split('_')[2];//numero do indicador
	tms=eval('nindt'+ni);
	if (cp>7||cp=='L') {tmr=eval('uni'+ni);xr='0';} else {tmr=eval('unia'+ni);xr='1';}
	tml = eval('i'+ni+' .ac[0]');
	v = eval('i'+ni+'.m'+parseInt(mun)+'.h['+(tml-1)+']');//valor do indicador string
	v1=v.replace(',','.');//troca . e ,
	v2=parseFloat(v1);//valor do ind numerico
	if ((ni=='01'||ni=='02'||ni=='03'||ni=='04'||ni=='53')&&parseFloat(v2)>100) {var v = '100(+)';}//teste para crepre
	rest=eval('r'+ni);
	if ((xr=='1' && rest=='1') || ni=='43'||ni=='45') {v = eval('i'+ni+'.m'+parseInt(mun)+'.a['+(tml-1)+']');tmr=eval('unia'+ni);}
	c1=con.split('_')[0];//classificação do mun
	sn=eval('sen'+ni);
	si=leg.tex[sn];
	ttt = cont+100;
	marg=80+cont*20;
	tmy="<a class='non' href='i.html?"+ni+"?"+mun+"?' onMouseOver='Pop("+ttt+")' onMouseOut='Popf("+ttt+")'>"+tms+"</a>";
	corc = eval("cor"+c1);
	cor = "#ebebeb";
	teste = cont % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
        html+="<tr class='item'><td><div class='tab_tit'>"+p1+"</div></td><td><div class='tab_tit'>"+tmy+"</div></td><td><div class='tab_tex'>"+v+"</div></td><td><div class='tab_tex'>"+tmr+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
	dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+ni)+"</p><p><b>Comentário</b>: "+eval('txtl'+ni)+"</p><p><b>Significado da classificação</b>: "+si+"</p></div>";
	cont+=1;     }
	html+="</tr></table></div><div class='cre'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
	document.getElementById('legc').innerHTML=legi;
	document.getElementById('comp').innerHTML=html;
	document.getElementById('poptot').innerHTML=dpop;}

function compar(){
function calcularClasse(x, cortes) {
  let classe = 1;
  for (let i = 0; i < cortes.length; i++) {
    if (cortes[i] <= x) classe += 1;
  }
  return classe;
}
mc=parseInt(mun);
claspop = calcularClasse(mc,cortepop);	


	if (claspop=='L') {} else {
	cont=1;
	dpop="</div>";
	nm = eval('mid .nom['+(parseInt(mun)-1)+']');// nome do mun
	ra = eval('mid .ra['+(parseInt(mun)-1)+']');//RA
	nr = eval('mid .nra['+(parseInt(ra)-1)+']');//nome de RA
	qr= eval('qt .ra['+(parseInt(ra)-1)+']');//quantidade de mun na RA
	legin = "Indicadores de "+nm+" apresentados de acordo com a classificação entre os "+qr+" municípios da mesma RA ("+nr+")";
	legi="<div class='dn'><center><p class='titulo-comparacao'>"+nm+" entre municípios da mesma RA</p><p class='menor'>"+legin+"</p></center></div>";
	html="<table><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>Valor</div></td><td class='unid'><div class='tab_tit'>Unidade</div></td><td><div class='tab_tit'>C</div></td></tr>";
	var vetor = new Array();
	for(var x=1;x<=74;x++) {
	if (x==70||x==71) {continue};
	var i = (x < 10) ? "0"+x : x; //numero do indicador em string
	try {eval("nind"+i)} catch(e) {continue};
	var y=x-1;//posição do indicador nos array
	try{var p = eval('i'+i+'.m'+parseInt(mun)+'.p[1]');} catch(e) {continue};//pos do mun no indicador
	var c = eval('i'+i+'.m'+parseInt(mun)+'.c[1]'); //class do mun no indicador
	var ac = eval('i'+i+'.ac[0]');//anocomp
	var ano=ac-1;//
	vh = eval('i'+i+'.m'+parseInt(mun)+'.h['+ano+']');//valor do indicador string
	vhn=parseFloat(vh);//valor do indicador numerico
	if ((x<5)&&parseFloat(vhn)>=100) {var p='01';var c='1'} 
	var w= c+"_"+p+"_"+i;
	vetor.push(w);}
	vetor.sort();
	for (x=1; x<=72;x++) {//vai até 74 pulando 70 e 71, com isso o vetor fica com 72 posições
	var i = (x < 10) ? "0"+x : x;
	var q=x-1;
	var con=vetor[q];
	try{p1=con.split('_')[1];} catch(err) {continue;}//posição do mun
	ni=con.split('_')[2];//numero do indicador
	tms=eval('nindt'+ni);
	if (cp>7||cp=='L') {tmr=eval('uni'+ni);xr='0';} else {tmr=eval('unia'+ni);xr='1';}
	tml = eval('i'+ni+' .ac[0]');
	v = eval('i'+ni+'.m'+parseInt(mun)+'.h['+(tml-1)+']');//valor do indicador string
	v1=v.replace(',','.');//troca . e ,
	v2=parseFloat(v1);//valor do ind numerico
	if ((ni=='01'||ni=='02'||ni=='03'||ni=='04'||ni=='53')&&parseFloat(v2)>100) {var v = '100(+)';}//teste para crepre
	rest=eval('r'+ni);
	if ((xr=='1' && rest=='1') || ni=='43'||ni=='45') {v = eval('i'+ni+'.m'+parseInt(mun)+'.a['+(tml-1)+']');tmr=eval('unia'+ni);}
	c1=con.split('_')[0];//classificação do mun
	sn=eval('sen'+ni);
	si=leg.tex[sn];
	ttt = cont+200;
	marg=80+cont*20;
	tmy="<a class='non' href='i.html?"+ni+"?"+mun+"?' onMouseOver='Pop("+ttt+")' onMouseOut='Popf("+ttt+")'>"+tms+"</a>";
	corc = eval("cor"+c1);
	cor = "#ebebeb";
	teste = cont % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
          html+="<tr class='item'><td><div class='tab_tit'>"+p1+"</div></td><td><div class='tab_tit'>"+tmy+"</div></td><td><div class='tab_tex'>"+v+"</div></td><td><div class='tab_tex'>"+tmr+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
	dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+ni)+"</p><p><b>Comentário</b>: "+eval('txtl'+ni)+"</p><p><b>Significado da classificação</b>: "+si+"</p></div>";
	cont+=1;      }
	html+="</tr></table></div><div class='cre'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
	document.getElementById('lega').innerHTML=legi;
	document.getElementById('compa').innerHTML=html;
	document.getElementById('poptota').innerHTML=dpop;}}

function compes(){
function calcularClasse(x, cortes) {
  let classe = 1;
  for (let i = 0; i < cortes.length; i++) {
    if (cortes[i] <= x) classe += 1;
  }
  return classe;
}
mc=parseInt(mun);
claspop = calcularClasse(mc,cortepop);

if (claspop=='L') {} else {
	cont=1;
	dpop="</div>";
	nm = eval('mid .nom['+(parseInt(mun)-1)+']');// nome do mun	
	legin = "Indicadores de "+nm+" apresentados de acordo com a classificação entre todos os 645 municípios paulistas";
	legi = "<div class='dn'><center><p class='titulo-comparacao'>"+nm+" entre os municípios do Estado</p><p class='menor'>"+legin+"</p></center></div>";
	html="<table><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Indicador</div></td><td><div class='tab_tit'>Valor</div></td><td class='unid'><div class='tab_tit'>Unidade</div></td><td width='25%'><div class='tab_tit'>C</div></td></tr>";
var vetor = new Array();
	for(var x=1;x<=74;x++) {
	if (x==70||x==71) {continue};
	var i = (x < 10) ? "0"+x : x; //numero do indicador em string
	try {eval("nind"+i)} catch(e) {continue};
	var y=x-1;//posição do indicador nos array
	try{var p = eval('i'+i+'.m'+parseInt(mun)+'.p[2]');} catch(e) {continue};//pos do mun no indicador
	var c = eval('i'+i+'.m'+parseInt(mun)+'.c[2]'); //class do mun no indicador
	var ac = eval('i'+i+'.ac[0]');//anocomp
	var ano=ac-1;//
	vh = eval('i'+i+'.m'+parseInt(mun)+'.h['+ano+']');//valor do indicador string
	vhn=parseFloat(vh);//valor do indicador numerico
	if ((x<5)&&parseFloat(vhn)>=100) {var p='01';var c='1'} 
	var w= c+"_"+p+"_"+i;
	vetor.push(w);}
	vetor.sort();
	for (x=1; x<=72;x++) {//vai até 74 pulando 70 e 71, com isso o vetor fica com 72 posições
	var i = (x < 10) ? "0"+x : x;
	var q=x-1;
	var con=vetor[q];
	try{p1=con.split('_')[1];} catch(err) {continue;}//posição do mun
	ni=con.split('_')[2];//numero do indicador
	tms=eval('nindt'+ni);
	if (cp>7||cp=='L') {tmr=eval('uni'+ni);xr='0';} else {tmr=eval('unia'+ni);xr='1';}
	tml = eval('i'+ni+' .ac[0]');
	v = eval('i'+ni+'.m'+parseInt(mun)+'.h['+(tml-1)+']');//valor do indicador string
	v1=v.replace(',','.');//troca . e ,
	v2=parseFloat(v1);//valor do ind numerico
	if ((ni=='01'||ni=='02'||ni=='03'||ni=='04'||ni=='53')&&parseFloat(v2)>100) {var v = '100(+)';}//teste para crepre
	rest=eval('r'+ni);
	if ((xr=='1' && rest=='1') || ni=='43'||ni=='45') {v = eval('i'+ni+'.m'+parseInt(mun)+'.a['+(tml-1)+']');tmr=eval('unia'+ni);}
	c1=con.split('_')[0];//classificação do mun
	sn=eval('sen'+ni);
	si=leg.tex[sn];
	ttt = cont+300;
	marg=80+cont*20;
	tmy="<a class='non' href='i.html?"+ni+"?"+mun+"?' onMouseOver='Pop("+ttt+")' onMouseOut='Popf("+ttt+")'>"+tms+"</a>";
	corc = eval("cor"+c1);
	cor = "#ebebeb";
	teste = cont % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
          html+="<tr class='item'><td><div class='tab_tit'>"+p1+"</div></td><td><div class='tab_tit'>"+tmy+"</div></td><td><div class='tab_tex'>"+v+"</div></td><td><div class='tab_tex'>"+tmr+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
	dpop+="<div id='term"+ttt+"' class='popupa'><p><b>Definição</b>: "+eval('txt'+ni)+"</p><p><b>Comentário</b>: "+eval('txtl'+ni)+"</p><p><b>Significado da classificação</b>: "+si+"</p></div>";
	cont+=1;  }
	html+="</tr></table></div><div class='cre'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
	document.getElementById('legb').innerHTML=legi;
	document.getElementById('compb').innerHTML=html;
	document.getElementById('poptotb').innerHTML=dpop;}}

function tabra(){
	html="";
	cen = eval("c"+ind);
	if (cen==1) {ano1='1991';ano2='2000';ano3='2010';ano4='2020'}
	if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2021'}
	if (ind=='67') {ano1='1991';ano2='2000';ano3='2010';}
	f = eval("sen"+ind);
	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");;
        numi = eval ("nr"+claspop);
	try {nd = eval("nd"+claspop+ind);} catch(err) {nd=0;}
	num = numi-nd;
	if (nd==0) {t2 = " municípios paulistas de mesmo porte. ";t4 = leg.tex[f];} else {t2 = " municípios paulistas de mesmo porte em que este dado existe. ";t4 = leg.tex[f]+" Cinza significa que o dado não existe no município.";}
	if (claspop=="L") {dim="";} else {dim = eval('popu'+claspop);}
if (ind=='11'||ind=='12'||ind=='13'||ind=='14') {ano1='2005';ano2='2007';ano3='2009';ano4='2011';ano5='2013';ano6='2015';mrano7='2017';ano8='2019';ano9='2021';ano10='2023'}

	tit="Indicador";
	tita="Valor (R$)";
	if (ind==64) {tit=tita;}
	if (ind==65) {tit=tita;}
	if (ind==66) {tit=tita;}
tim="Comparação entre RAs";t1="<div><p>As tabelas mostram a "+muni+" em comparação, neste indicador, entre as "+num+" Regiões Administrativas (RAs). As RAs foram classificadas em cinco grupos de resultados. A coluna P indica a posição da RA e a coluna C, a cor do grupo em que a região foi classificada de acordo com a escala abaixo.</p><p>"+t4+"</p><div class='exemplo-cores'><ul><li style='background:"+cor1+"'></li><li style='background:"+cor2+"'></li><li style='background:"+cor3+"'></li><li style='background:"+cor4+"'></li><li style='background:"+cor5+"'></li></ul></div>";
tin="Região Administrativa";prep="da ";
ac=eval("anocomp"+ind);aco=eval("ano"+ac);
     html+="<div class='dn'><center><p class='titulo-comparacao'>Classificação das RAs ("+aco+")</p></center></div><div class='align' style='width:44%;display:inline-block;margin-left:10%'><table><tr><td colspan='4'></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>"+tin+"</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";

	for(var x=1;x<=16;x++) {
     var i = (x < 10) ? "0"+x : x;
     var l = eval(claspop+ind+i);      
     if (l=='10') {var k = eval("ma"+l);} else {var k = eval("m"+l);}
     var w = eval("anocomp"+ind);
     var j = eval('h'+l+w+ind);
	i=j.replace(',','.');
	if (ind=='43'||ind=='45') {var j = eval('a'+l+w+ind);}
     var pos = eval("p"+l+ind);
     var posm = pos.split('_')[1];
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(i)>100) {var j = '100(+)';var posm='01';}
     var m = pos.split('_')[0];
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
          html+="<tr class='item'><td><div class='tab_tit'>"+posm+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
if (x==8) {html+="</table></div><div class='align' style='width:44%;display:inline-block;margin-left:1%'><table><tr><td colspan='4'></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>"+tin+"</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";}
     }
       html+="</table></div>";
             document.getElementById('shra').innerHTML=html;}

function tabcomp(){
	html="";
	acom=eval("i"+ind+" .ac[0]");
	acomn=parseInt(acom);
	cen = eval("c"+ind);
	if (cen==1) {ano1='1991';ano2='2000';ano3='2010';ano4='2022'}
	if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2021'}
	if (ind=='24') {ano1='2023';ano2='2024';ano3='2025';};
	if (ind=='36') {ano1='2012';ano2='2013';ano3='2014';ano4='2015';ano5='2016';ano6='2017';ano7='2018';ano8='2019';ano9='2020';ano10='2021';ano11='2022';ano12='2023';ano13='2024';ano14='2025';};
	if (ind=='37'||ind=='56') {ano1='2017';ano2='2018';ano3='2019';ano4='2020';ano5='2021';ano6='2022';ano7='2023';ano8='2024';ano9='2025';};
	if (ind=='45' || ind=='46' || ind=='47') {ano1='2022';ano2='2023';ano3='2024';ano4='2025';};
	if (ind=='63') {ano1='1970';ano2='1980';ano3='1991';ano4='2000';ano5='2010';ano6='2022'}
	if (ind=='67') {ano1='1991';ano2='2000';ano3='2010';}
	if (ind=='15'||ind=='16'||ind=='17'||ind=='18'||ind=='19') {ano1='2019';ano2='2020';ano3='2021';ano4='2022';ano5='2023';ano6='2024';ano7='2025';}
	if (ind=='33'||ind=='34') {ano1='2014';ano2='2015';ano3='2016';ano4='2017';ano5='2018';ano6='2019';ano7='2020';ano8='2021';ano9='2022';ano10='2023';ano11='2024';ano12='2025';}
	f = eval("sen"+ind);
	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");


function calcularClasse(x, cortes) {
  let classe = 1;
  for (let i = 0; i < cortes.length; i++) {
    if (cortes[i] <= x) classe += 1;
  }
  return classe;
}
mc=parseInt(mun);
claspop = calcularClasse(mc,cortepop);

        numi = parseInt(eval ("qt .p["+(parseInt(claspop)-1)+"]"));
	try {nd = eval("i"+ind+".ndp["+(parseInt(claspop)-1)+"]");} catch(err) {nd=0;}
	num = numi-nd;
	if (nd==0) {t2 = " municípios paulistas de mesmo porte. ";t4 = leg.tex[f];} else {t2 = " municípios paulistas de mesmo porte em que este dado existe. ";t4 = leg.tex[f]+" Cinza significa que o dado não existe no município.";}
	if (claspop=="L") {dim="";} else {dim = eval('mid .npop['+(parseInt(claspop)-1)+']');}
if (ind=='11'||ind=='12'||ind=='13'||ind=='14') {ano1='2005';ano2='2007';ano3='2009';ano4='2011';ano5='2013';ano6='2015';mrano7='2017';ano8='2019';ano9='2021';ano10='2023'}
	tit="Indicador";
	tita="Valor (R$)";
	if (ind==64) {tit=tita;}
	if (ind==65) {tit=tita;}
	if (ind==66) {tit=tita;}
if (claspop=="L") {tim="Comparação entre RAs";t1="<div><p>As tabelas mostram a "+muni+" em comparação, neste indicador, entre as "+numi+" Regiões Administrativas (RAs). As RAs foram classificadas em cinco grupos de resultados. A coluna P indica a posição da RA e a coluna C, a cor do grupo em que a região foi classificada de acordo com a escala abaixo.</p><p>"+t4+"</p><div class='exemplo-cores'><ul><li style='background:"+cor1+"'></li><li style='background:"+cor2+"'></li><li style='background:"+cor3+"'></li><li style='background:"+cor4+"'></li><li style='background:"+cor5+"'></li></ul></div>";
tin="Região Administrativa";prep="da ";
     html+="<div class='dn'><center><p class='titulo-comparacao'>"+tim+"</p><p class='menor'></p></center></div><div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>As três primeiras Regiões Administrativas em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>"+tin+"</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";} 
else {
fini=eval("leg .e"+f).length-1;
cores="</div><div class='exemplo-cores'>";
for (var w=0;w<=fini;w++) {
y=w+1;
var cor=eval("cor"+y);
var tex=eval("leg .e"+f+"["+w+"]");
cores+="<ul><li style='background:"+cor+"'></li><li class='leg'>"+tex+"</li></ul>";
}
cores+="</div>";




tim="Municípios paulistas do mesmo porte";t1="<div><p>As tabelas mostram "+muni+" em comparação, neste indicador, entre os "+num+t2+"Os municípios foram classificados em cinco grupos de resultados. A coluna P indica a posição do município e a coluna C, a cor do grupo em que o município foi classificado de acordo com a escala abaixo.</p><p>"+t4+"</p>"+cores;
     html+="<div class='dn'><center><p class='titulo-comparacao'>"+tim+"</p><p class='menor'>("+dim+")</p></center></div><div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Os três primeiros municípios em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";tin="Município";prep="de ";
}
	for(var x=0;x<=2;x++) {
     var i = (x < 10) ? "0"+x : x;
     var l = eval("i"+ind+".cp.p["+x+"]");//numero do municipio
     var ll = parseInt(l);      
     var k = eval("mid .nom["+(ll-1)+"]");//nome do municipio
	if (ind=='43'||ind=='45') {var j = eval("i"+ind+" .cp .pa["+x+"]")} else {var j = eval("i"+ind+" .cp .ph["+x+"]");};
	valo=j.replace(',','.');
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(valo)>100) {var j = '100(+)'}
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(valo)>=100) {var o='01';var m='1'} else {
        var o = eval("i"+ind+" .cp .pp["+x+"]");
        var m = eval("i"+ind+" .cp .pc["+x+"]");}
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
			//Os três primeiros municipios
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
     }
       html+="</table></div>";
     var o = eval('i'+ind+' .m'+parseInt(mun)+' .p[0]');
     var m = eval('i'+ind+' .m'+parseInt(mun)+' .c[0]');
      if (ind=='43'||ind=='45') {var j = eval("i"+ind+" .m"+parseInt(mun)+" .a["+(acomn-1)+"]")} else {var j = eval("i"+ind+" .m"+parseInt(mun)+" .h["+(acomn-1)+"]")};//valor	
	if( ind<5) {y=j.replace(',','.')};
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04')&&parseFloat(j)>100) {var j = '100(+)';}
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04')&&parseFloat(j)>=100) {var o='01';var m='1';}
	vcor = "#ebebeb";
	corc = eval("cor"+m);
		//Posição do Município
       	html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Posição "+prep+muni+" em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>"+tin+"</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr><tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+muni+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr></table></div>";
		
if (claspop=="L") {html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit tres-ultimos'><center>As três últimas Regiões Administrativas em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Região Administrativa</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";} else {
html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit tres-ultimos'><center>Os três últimos municípios em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";}

	for(var x=3;x<=5;x++) {
     var i = (x < 10) ? "0"+x : x;
function calcularClasse(x, cortes) {
  let classe = 1;
  for (let i = 0; i < cortes.length; i++) {
    if (cortes[i] <= x) classe += 1;
  }
  return classe;
}
mc=parseInt(mun);
claspop = calcularClasse(mc,cortepop);

     var l = eval("i"+ind+".cp.p["+x+"]");//numero do municipio
     var ll = parseInt(l);      
     var k = eval("mid .nom["+(ll-1)+"]");
	if (ind=='43'||ind=='45') {var j = eval("i"+ind+" .cp .pa["+x+"]")} else {var j = eval("i"+ind+" .cp .ph["+x+"]");};
	if( ind<5) {y=j.replace(',','.')};
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(y)>100) {var j = '100(+)'}
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(y)>=100) {var o='01';var m='1'} else {
        var o = eval("i"+ind+" .cp .pp["+x+"]");
        var m = eval("i"+ind+" .cp .pc["+x+"]");}
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
		//tres ultimos municipios
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
}
     //mouse over comparações entre municípios
	html+="</table><div class='texto-comparacao'>"+t1+"</div>";
             document.getElementById('sh').innerHTML=html;
if (claspop=="L") {tabra()}

}
function tabcompra(){
if (claspop=="L") {} else {
	html="";
	x=eval('i'+ind+' .ac[1]');
	acom=eval('i'+ind+' .ac[0]');
	acomn=parseInt(acom);
	f = eval("sen"+ind);
	t4 = leg.tex[f];
	cen = eval("c"+ind);
	if (cen==1) {ano1='1991';ano2='2000';ano3='2010';ano4='2022'}
	if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2021'}
	if (ind=='24') {ano1='2023';ano2='2024';ano3='2025';};
	if (ind=='36') {ano1='2012';ano2='2013';ano3='2014';ano4='2015';ano5='2016';ano6='2017';ano7='2018';ano8='2019';ano9='2020';ano10='2021';ano11='2022';ano12='2023';ano13='2024';ano14='2025';};
	if (ind=='37'||ind=='56') {ano1='2017';ano2='2018';ano3='2019';ano4='2020';ano5='2021';ano6='2022';ano7='2023';ano8='2024';ano9='2025';};
	if (ind=='45' || ind=='46' || ind=='47') {ano1='2022';ano2='2023';ano3='2024';ano4='2025';};
	if (ind=='63') {ano1='1970';ano2='1980';ano3='1991';ano4='2000';ano5='2010';ano6='2022'}
	if (ind=='67') {ano1='1991';ano2='2000';ano3='2010';}
	if (ind=='11'||ind=='12'||ind=='13'||ind=='14') 								{ano1='2005';ano2='2007';ano3='2009';ano4='2011';ano5='2013';ano6='2015';mrano7='2017';ano8='2019';ano9='2021';ano10='2023'}
	if (ind=='15'||ind=='16'||ind=='17'||ind=='18'||ind=='19') {ano1='2019';ano2='2020';ano3='2021';ano4='2022';ano5='2023';ano6='2024';ano7='2025';}
	if (ind=='33'||ind=='34') {ano1='2014';ano2='2015';ano3='2016';ano4='2017';ano5='2018';ano6='2019';ano7='2020';ano8='2021';ano9='2022';ano10='2023';ano11='2024';ano12='2025';}

fini=eval("leg .e"+f).length-1;
cores="</div><div class='exemplo-cores'>";
for (var w=0;w<=fini;w++) {
y=w+1;
var cor=eval("cor"+y);
var tex=eval("leg .e"+f+"["+w+"]");
cores+="<ul><li style='background:"+cor+"'></li><li class='leg'>"+tex+"</li></ul>";
}
cores+="</div>";	
	rt = eval('r'+ind);
if (rt=="1") {rest="<div onclick='Pop(11)' class='legendatda'><a href='javascript:;'>Comparação com restrições. Clique aqui.</a></div><div id='term11' class='popux'><span onclick='Popf(11)' class='fechar'>X</span>"+txtal+"</div>";} else {rest="";}

	t4=eval("leg .tex["+f+"]")+cores+rest;	


	tit="Indicador";
	tita="Valor (R$)";
	nmind=eval('nind'+ind);
	if (ind==64) {tit=tita;}
	if (ind==65) {tit=tita;}
	if (ind==66) {tit=tita;}
     	var reg = eval('mid .ra['+(mun-1)+']');
	nreg= eval('mid .nra['+(reg-1)+']');
	if (mun<458) {var s = "x"} else {var s = "y"};
	
if (reg=='16'&&rt=='1') {numi='9';try{nd = eval("i"+ind+".ndry["+(parseInt(reg)-1)+"]")} catch(e) {nd=0};num=numi-nd;if (nd==0) {ty=""} else {ty=" em que este dado existe";};tc=" municípios da mesma Região Administrativa"+ty+"";txt = " entre todos os "+num+tc+".";}
else {
	if (rt=='1'){var numi = eval("qt .ra"+s+"["+(parseInt(reg)-1)+"]");
if (s=='x') {try {nd = eval("i"+ind+".ndrx["+(parseInt(reg)-1)+"]");} catch(err) {nd=0;};
if(nd==0) {ty="";num=numi;} else {ty=" em que este dado existe";num=numi-nd;};tb=" municípios com até 30 mil habitantes da mesma Região Administrativa"+ty+".";txt = " entre os "+num+tb;} else {try {nd = eval("i"+ind+".ndry["+(parseInt(reg)-1)+"]");} catch(err) {nd=0;};if(nd==0) {ty="";num=numi;} else {ty=" em que este dado existe";num=numi-nd};td=" municípios com mais de 30 mil habitantes da mesma Região Administrativa"+ty+".";txt = " entre os "+num+td;}}
else {numi = eval('qt .ra['+(reg-1)+']');try {nd = eval("i"+ind+".ndr["+(parseInt(reg)-1)+"]");} catch(err) {nd=0;};if (nd==0) {ty="";num=numi} else {ty=" em que este dado existe";num=numi-nd};tc=" municípios da mesma Região Administrativa"+ty+"";txt = " entre todos os "+num+tc+".";};	
}	
		
t1="<p>As tabelas mostram "+muni+" em comparação, neste indicador,"+txt+" Os municípios foram classificados em cinco grupos de resultado. A coluna P indica a posição do município e a coluna C, a cor do grupo em que o município foi classificado de acordo com a escala abaixo.</p><p>"+t4+"</p>";
	t1a="<p>Não foi possível criar cinco faixas de classificação para comparar "+muni+" com os outros municípios da mesma Região Administrativa (RA). No caso de "+nmind+" só são comparáveis entre si municípios que se situam ou na faixa até 30 mil habitantes ou na faixa com mais de 30 mil habitantes. Nesta RA, apenas "+muni+" tem mais de 30 mil habitantes.<br><br></p>";
	t1b="<p>Não foi possível criar cinco faixas de classificação para comparar "+muni+" com os outros municípios da mesma Região Administrativa (RA). No caso de "+nmind+" só são comparáveis entre si municípios que se situam ou na faixa até 30 mil habitantes ou na faixa com mais de 30 mil habitantes. Nesta RA, apenas "+num+" municípios têm mais de 30 mil habitantes.<br><br></p>";
	t1c="<p>Não foi possível criar cinco faixas de classificação para comparar "+muni+" com os outros municípios da mesma Região Administrativa (RA). No caso de "+nmind+", apenas "+num+" municípios desta RA possuem esse dado.<br><br></p>";
	t1d="<p>Não foi possível criar cinco faixas de classificação para comparar "+muni+" com os outros municípios da mesma Região Administrativa (RA). No caso de "+nmind+", apenas "+num+" município desta RA possui esse dado.<br><br></p>";

     if(num<=9) {


if (eval('i'+ind+' .m'+parseInt(mun)+' .c[1]')=='0'&&nd>0) {html+="<div class='dn'><p class='titulo-comparacao'>Municípios paulistas da mesma RA</p><p class='menor'>("+nreg+")</p></div><div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Dados de "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr><tr class='item'><td><div class='tab_tit'>00</div></td><td><div id='mun' class='tab_tit' onClick='mapm("+ll+")'>"+eval("mid .nom["+(parseInt(mun)-1)+"]")+"</div></td><td><div class='tab_tex'>n/d</div></td><td class='valor-c'><div style='background:"+cor0+";'></div></td>";}// hipotese ns
else {

html+="<div class='dn'><p class='titulo-comparacao'>Municípios paulistas da mesma RA</p><p class='menor'>("+nreg+")</p></div><div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Dados de "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";}
     for(var x=0;x<num;x++) {
     var i = (x < 10) ? "0"+x : x;      
	if (rt=='1') {var l = eval('i'+ind+' .cp .r'+s+reg+'['+x+']');} else {var l = eval('i'+ind+' .cp .r'+reg+'['+x+']');}// id municipio
        var ll = parseInt(l);// id numerico município
	var k = eval("mid .nom["+(ll-1)+"]");//nome
     	if (ind=='43'||ind=='45') {var j = eval('i'+ind+' .m'+ll+' .a['+(acomn-1)+']');} else {var j = eval('i'+ind+' .m'+ll+' .h['+(acomn-1)+']');};//valor
     var o = eval('i'+ind+' .m'+ll+'. p[1]');//posição
     var m = eval('i'+ind+' .m'+ll+'. c[1]');//classificação
	valo=j.replace(',','.');
        if ( (ind=='01' ||ind=='02' ||ind=='03' ||ind=='04')&&parseFloat(valo)>=100) {var o='01';var m='1'} 
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td>";
     }
	if (num>0 && num<=5 && nd==0) {if (num==1) {tx=t1a} else {tx=t1b}} else {if (nd==0 || num>4) {tx=t1} else {if(num>1) {tx=t1c;} else {tx=t1d;}}};
	html+="</table><div class='texto-comparacao'>"+tx+"</div>";
if (al=="sim") {html+="<div onclick='Pop(11)' class='legendatda'><a href='javascript:;'>Comparação com restrições. Clique aqui.</a></div><div id='term11' class='popux'><span onclick='Popf(11)' class='fechar'>X</span>"+txtal+"</div>";}
             document.getElementById('sha').innerHTML=html;
} else	{
html+="<div class='dn'><p class='titulo-comparacao'>Municípios paulistas da mesma RA</p><p class='menor'>("+nreg+")</p></div><div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Os três primeiros municípios em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";
     for(var x=0;x<=2;x++) {
     var i = (x < 10) ? "0"+x : x;
	rt = eval('r'+ind);
	var l = eval('i'+ind+' .cp .r['+x+']');// id municipio
        var ll = parseInt(l);// id numerico município
        var k = eval("mid .nom["+(ll-1)+"]");
 if (ind=='43'||ind=='45') {var j = eval('i'+ind+' .cp .ra['+x+']');} else {var j = eval('i'+ind+' .cp .rh['+x+']');};//valor
     var o = eval('i'+ind+' .cp .rp['+x+']');//posição
     var m = eval('i'+ind+' .cp .rc['+x+']');//classificação
	valo=j.replace(',','.');
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>100) {var j='100(+)';} 
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>=100) {var o='01';var m='1';} 	
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td>";
     }
	html+="</tr></table></div>";
     var k = eval('i'+ind+' .m'+parseInt(mun)+' .p[1]');//posição do município
     var m = eval('i'+ind+' .m'+parseInt(mun)+' .c[1]');// class do município
      if (ind=='43'||ind=='45') {var j = eval("i"+ind+" .m"+parseInt(mun)+" .a["+(acomn-1)+"]")} else {var j = eval("i"+ind+" .m"+parseInt(mun)+" .h["+(acomn-1)+"]")};//valor	
	i=j.replace(',','.');
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(i)>100) {var j = '100(+)';}
	if ((ind=='01'||ind=='02'||ind=='03'||ind=='04'||ind=='53')&&parseFloat(i)>=100) {var k='01';var m='1';}
	vcor = "#ebebeb";
	corc = eval("cor"+m);

       html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Posição de "+muni+" em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr><tr class='item'><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tit'>"+muni+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr></table></div>";
	html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Os três últimos municípios em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";
	st = numi-3;
	if (rt=='1') {var num = eval ("qt .ra"+s+"["+(reg-1)+"]");} else {eval ("qt .ra["+(reg-1)+"]");}
	
	for(var x=3;x<=5;x++) {
     	var i = (x < 10) ? "0"+x : x;      
	rt = eval('r'+ind);
	var l = eval('i'+ind+' .cp .r['+x+']');// id municipio
        var ll = parseInt(l);// id numerico município
        var k = eval("mid .nom["+(ll-1)+"]");//nome do município
 	if (ind=='43'||ind=='45') {var j = eval('i'+ind+' .cp .ra['+x+']');} else {var j = eval('i'+ind+' .cp .rh['+x+']');};//valor
     var o = eval('i'+ind+' .cp .rp['+x+']');//posição
     var m = eval('i'+ind+' .cp .rc['+x+']');//classificação
	valo=j.replace(',','.');
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>100) {var j='100(+)';} 
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>=100) {var o='01';var m='1';} 	
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
}
html+="</table><div class='texto-comparacao'>"+t1+"</div>";
if (al=="sim") {html+="<div onclick='Pop(11)' class='legendatda'><a href='javascript:;'>Comparação com restrições. Clique aqui.</a></div><div id='term11' class='popux'><span onclick='Popf(11)' class='fechar'>X</span>"+txtal+"</div>";}
             document.getElementById('sha').innerHTML=html;}}}

function tabcompes(){
if (claspop=="L") {} else {
	html="";
	x=eval('i'+ind+'.ac[1]');
	acom=eval('i'+ind+'.ac[0]');
	acomn=parseInt(acom);
	if (cen==1) {ano1='1991';ano2='2000';ano3='2010';ano4='2022'}
	if (cen==2) {ano1='1991';ano2='2000';ano3='2010';ano4='2021'}
	if (ind=='24') {ano1='2023';ano2='2024';ano3='2025';};
	if (ind=='36') {ano1='2012';ano2='2013';ano3='2014';ano4='2015';ano5='2016';ano6='2017';ano7='2018';ano8='2019';ano9='2020';ano10='2021';ano11='2022';ano12='2023';ano13='2024';ano14='2025';};
	if (ind=='37'||ind=='56') {ano1='2017';ano2='2018';ano3='2019';ano4='2020';ano5='2021';ano6='2022';ano7='2023';ano8='2024';ano9='2025';};
	if (ind=='45' || ind=='46' || ind=='47') {ano1='2022';ano2='2023';ano3='2024';ano4='2025';};
	if (ind=='63') {ano1='1970';ano2='1980';ano3='1991';ano4='2000';ano5='2010';ano6='2022'}
	if (ind=='67') {ano1='1991';ano2='2000';ano3='2010';}
	if (ind=='11'||ind=='12'||ind=='13'||ind=='14') 			{ano1='2005';ano2='2007';ano3='2009';ano4='2011';ano5='2013';ano6='2015';mrano7='2017';ano8='2019';ano9='2021';ano10='2023'}
	if (ind=='15'||ind=='16'||ind=='17'||ind=='18'||ind=='19') {ano1='2019';ano2='2020';ano3='2021';ano4='2022';ano5='2023';ano6='2024';ano7='2025';}
	if (ind=='33'||ind=='34') {ano1='2014';ano2='2015';ano3='2016';ano4='2017';ano5='2018';ano6='2019';ano7='2020';ano8='2021';ano9='2022';ano10='2023';ano11='2024';ano12='2025';}
	f = eval("sen"+ind);
fini=eval("leg .e"+f).length-1;
cores="</div><div class='exemplo-cores'>";
for (var w=0;w<=fini;w++) {
y=w+1;
var cor=eval("cor"+y);
var tex=eval("leg .e"+f+"["+w+"]");
cores+="<ul><li style='background:"+cor+"'></li><li class='leg'>"+tex+"</li></ul>";
}
cores+="</div>";
	t4=eval("leg .tex["+f+"]")+cores;
	muni = eval("mid .nom["+(parseInt(mun)-1)+"]");;
	try {nd = eval("i"+ind+".nd[0]");} catch(err) {nd=0;}
	if(nd==0) {ty="";} else {ty=" em que este dado existe";}
	rt = eval('r'+ind);
    	if (mun<458) {var s = "x"} else {var s = "y"};
	if (rt=='1') {
	try {ndx = eval("i"+ind+".ndx[0]");} catch(err) {ndx=0;}	
	try {ndy = eval("i"+ind+".ndy[0]");} catch(err) {ndy=0;}	
	if(ndx==0) {tyx="";} else {tyx=" em que este dado existe";}
	if(ndy==0) {tyy="";} else {tyy=" em que este dado existe";}		
	numx=457-ndx;
	numy=188-ndy;
	if (s=='x') {al = "sim"; txt = " entre os "+numx+" municípios paulistas com até 30 mil habitantes"+tyx+"."} else {al = "sim"; txt = " entre os "+numy+" municípios paulistas com mais de 30 mil habitantes"+tyy+"."}} else {al = ""; num=645-nd; txt = " entre todos os "+num+" municípios paulistas"+ty+"."};

	t1="<div><p>As tabelas mostram "+muni+" em comparação, neste indicador,"+txt+" Os municípios foram classificados em cinco grupos de resultado. A coluna P indica a posição do município e a coluna C, a cor do grupo em que o município foi classificado de acordo com a escala abaixo.</p><p>"+t4+"</p>";
	tit="Indicador";
	tita="Valor (R$)";
	if (ind==64) {tit=tita;}
	if (ind==65) {tit=tita;}
	if (ind==66) {tit=tita;}
     html+="<div class='dn'><p class='titulo-comparacao'>Todos os municípios paulistas</p><p class='menor'><br></p></p></div><div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Os três primeiros municípios em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";
     	for(var x=0;x<=2;x++) {
     var i = (x < 10) ? "0"+x : x;      
     var l = eval('i'+ind+' .cp .e['+x+']');// id municipio
     var ll=parseInt(l);
     var k = eval("mid .nom["+(ll-1)+"]");
	if (ind=='43'||ind=='45') {var j = eval('i'+ind+' .cp .ea['+x+']');} else {var j = eval('i'+ind+' .cp .eh['+x+']');};//valor
     var o = eval('i'+ind+' .cp .ep['+x+']');//posição
     var m = eval('i'+ind+' .cp .ec['+x+']');//classificação
	valo=j.replace(',','.');
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>100) {var j='100(+)';} 
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>=100) {var o='001';var m='1';} 	
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
     }
	html+="</tr></table></div>";
     var o = eval('i'+ind+' .m'+parseInt(mun)+' .p[2]');//posição do município
     var m = eval('i'+ind+' .m'+parseInt(mun)+' .c[2]');// class do município
      if (ind=='43'||ind=='45') {var j = eval("i"+ind+" .m"+parseInt(mun)+" .a["+(acomn-1)+"]")} else {var j = eval("i"+ind+" .m"+parseInt(mun)+" .h["+(acomn-1)+"]")};//valor
	valo=j.replace(',','.');
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>100) {var j='100(+)';} 
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>=100) {var o='001';var m='1';} 	
	corc = eval("cor"+m);
       html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Posição de "+muni+" em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr><tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+muni+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr></table></div>";
	html+="<div class='align'><table><tr class='titulo-compara'><td colspan='4'><div class='tab_tit'><center>Os três últimos municípios em "+eval('ano'+acom)+"</center></div></td></tr><tr class='sub'><td><div class='tab_tit'>P</div></td><td><div class='tab_tit'>Município</div></td><td><div class='tab_tit'>"+tit+"</div></td><td><div class='tab_tit'>C</div></td></tr>";

	for(var x=3;x<=5;x++) {
     var i = (x < 10) ? "0"+x : x;      
     var l = eval('i'+ind+' .cp .e['+x+']');// id municipio
     var ll=parseInt(l);
     var k = eval("mid .nom["+(ll-1)+"]");
     if (ind=='43'||ind=='45') {var j = eval('i'+ind+' .cp .ea['+x+']');} else {var j = eval('i'+ind+' .cp .eh['+x+']');};//valor
     var o = eval('i'+ind+' .cp .ep['+x+']');//posição
     var m = eval('i'+ind+' .cp .ec['+x+']');//classificação
	valo=j.replace(',','.');
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>100) {var j='100(+)';} 
        if ((ind=='01' ||ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&parseFloat(valo)>=100) {var o='001';var m='1';} 	
	cor = "#ebebeb";
	teste = x % 2;
	vcor = (teste == 0) ? cor : "#d2d2d2";
	corc = eval("cor"+m);
          html+="<tr class='item'><td><div class='tab_tit'>"+o+"</div></td><td><div class='tab_tit'>"+k+"</div></td><td><div class='tab_tex'>"+j+"</div></td><td class='valor-c'><div style='background:"+corc+";'></div></td></tr>";
}      
html+="</table><div class='texto-comparacao'>"+t1+"</div>";

if (al=="sim") {html+="<div onclick='Pop(12)' class='legendatda'><a href='javascript:;'>Comparação com restrições. Clique aqui.</a></div><div id='term12' class='popux'><span onclick='Popf(12)' class='fechar'>X</span>"+txtal+"</div>";}
             document.getElementById('shb').innerHTML=html;}}
function topo() {

if (claspop=='L') {lk1="href='../i01.html'";lk2="href='../i02.html'";lk0="href='i.html?00?00?'";lk5="href='../i05.html'"} else {lk1="href='i01.html'";lk2="href='i02.html'";lk0="href='l/i.html?00?00?'";lk5="href='i05.html'"};

if (ind=='95' || ind=='96' || ind=='97' || ind=='98'||ind=='100') {var muni='00'; var menuna="<div onclick='openMenu()' id='bt-menu'><hr><hr><hr></div><div id='main-menu' class='menu-topo'><ul class='menu-hx'><li class='j'><a class='legendamt' href='i01.html'>Início</a></li><li class='j'><a "+lk2+" class='legendamt'>Escolha o município</a></li><li class='j'><a href='i05.html' class='legendamt'>Escolha a Região Administrativa</a></li><li class='j'><a "+lk0+" class='legendamt'>Estado de SP</a></li><li class='j'><a a href='i03.html' class='legendamt'>Notas metodológicas</a></li><li class='j'><a href='i04.html' class='legendamt'>Créditos</a></li><li class='j'><a href='mailto:kairos@kairos.srv.br'>Fale conosco</a></ul></div><div><div id = 'diag'></div></div>";} else {if (claspop=='L') {prf="Perfil da RA"; if (mun=='00') {prf="Perfil de SP";id1="<li class='g'><a class='legendam' onClick='openN(13)'>IDEB anos finais público</a></li>";cmp="";}

else {id1="<li class='h'><a class='legendam' onClick='openN(12)'>IDEB anos iniciais municipal</a></li><li class='h'><a class='legendam' onClick='openN(13)'>IDEB anos finais público</a></li><li class='g'><a class='legendam' onClick='openN(14)'>IDEB anos finais municipal</a></li>";cmp="<li class='h'><a class='legendamt' onClick='openN(99)'>Com RAs</li>";}} else {cmp="<li class='h'><a class='legendamt' onClick='openN(99)'>Com municípios</li>";prf="Perfil municipal";id1="<li class='h'><a class='legendam' onClick='openN(12)'>IDEB anos iniciais municipal</a></li><li class='h'><a class='legendam' onClick='openN(13)'>IDEB anos finais público</a></li><li class='g'><a class='legendam' onClick='openN(14)'>IDEB anos finais municipal</a></li>";};var muni=eval("mid .nom["+(parseInt(mun)-1)+"]");; if (claspop=='L') {ocultRA=""} else {ocultRA="<li class='h'><a class='legendam' onClick='openN(67)'>IDHM</a></li>";}

var menun="<div onclick='openMenu()' id='bt-menu'><hr/><hr/><hr/></div><div id='diag'></div><div id='main-menu' class='menu-topo'><ul class='menu-hv'><li><a class='legendam' onClick='openN(00)'>Início</a></li><li><a class='legendam'>Indicadores</a><ul><li class='nl'><a class='legendam'>Educação infantil</a><ul><li class='h'><a class='legendam' onClick='openN(01)'>Cobertura de creche</a></li><li class='h'><a class='legendam' onClick='openN(02)'>Cobertura de creche municipal</a></li><li class='h'><a class='legendam' onClick='openN(03)'>Cobertura de pré-escola</a></li><li class='g'><a class='legendam' onClick='openN(04)'> Cobertura de pré-escola municipal</a></li></ul></li><li class='nl'><a class='legendam'>Ensino fundamental</a><ul><li class='h'><a class='legendam' onClick='openN(05)'> Reprovação no ensino fundamental público </a></li><li class='h'><a class='legendam' onClick='openN(06)'>Reprovação no ensino fundamental municipal</a></li><li class='h'><a class='legendam' onClick='openN(07)'>Abandono no ensino fundamental público</a></li><li class='h'><a class='legendam' onClick='openN(08)'>Abandono no ensino fundamental municipal</a></li><li class='h'><a class='legendam' onClick='openN(09)'>Distorção de idade no ensino fundamental público</a></li><li class='g'><a class='legendam' onClick='openN(10)'>Distorção de idade no ensino fundamental municipal</a></li></ul></li><li class='nl'><a class='legendam'>IDEB</a><ul><li class='h'><a class='legendam' onClick='openN(11)'> IDEB anos iniciais público </a></li>"+id1+"</ul></li><li class='nl'><a class='legendam'>Recursos educacionais</a><ul><li class='h'><a class='legendam' onClick='openN(15)'> Escolas públicas sem laboratórios</a></li><li class='h'><a class='legendam' onClick='openN(16)'>Escolas públicas sem Internet</a></li><li class='h'><a class='legendam' onClick='openN(17)'>Escolas públicas sem biblioteca</a></li><li class='h'><a class='legendam' onClick='openN(18)'>Escolas públicas sem acessibilidade física</a></li><li class='g'><a class='legendam' onClick='openN(19)'>Escolas públicas sem sala de recursos multifuncionais</a></li></ul></li><li class='nl'><a class='legendam'>Ensino médio</a><ul><li class='h'><a class='legendam' onClick='openN(20)'>Reprovação no ensino médio público</a></li><li class='h'><a class='legendam' onClick='openN(21)'>Abandono no ensino médio público</a></li><li class='g'><a class='legendam' onClick='openN(22)'>Distorção de idade no ensino médio público</a></li></ul></li><li class='nl'><a class='legendam'>Analfabetismo</a><ul><li class='h'><a class='legendam' onClick='openN(23)'>Analfabetismo (15 anos ou mais)</a></li><li class='g'><a class='legendam' onClick='openN(24)'>Alfabetização adequada</a></li></ul></li><li class='nl'><a class='legendam'>Saúde</a><ul><li class='h'><a class='legendam' onClick='openN(25)'>Mortalidade infantil</a></li><li class='h'><a class='legendam' onClick='openN(26)'>Mortalidade infantil neonatal precoce</a></li><li class='h'><a class='legendam' onClick='openN(27)'>Mortalidade infantil neonatal tardia</a></li><li class='h'><a class='legendam' onClick='openN(28)'>Mortalidade infantil pós neonatal</a></li><li class='h'><a class='legendam' onClick='openN(29)'>Mortalidade até 5 anos de idade</a></li><li class='h'><a class='legendam' onClick='openN(30)'>Baixo peso ao nascer</a></li><li class='h'><a class='legendam' onClick='openN(31)'>Pré-natal insuficiente</a></li><li class='h'><a class='legendam' onClick='openN(32)'>Mães adolescentes (até 19 anos)</a></li><li class='h'><a class='legendam' onClick='openN(33)'>Mães adolescentes (até 17 anos)</a></li><li class='g'><a class='legendam' onClick='openN(34)'>Mães adolescentes (até 13 anos)</a></li></ul></li><li class='nl'><a class='legendam'>Pobreza e vulnerabilidade</a><ul><li class='h'><a class='legendam' onClick='openN(36)'>Pessoas em situação de pobreza</a></li><li class='h'><a class='legendam' onClick='openN(37)'>Crianças e adolescentes no Bolsa Família</a></li><li class='h'><a class='legendam' onClick='openN(40)'>Domicílios com alta densidade por dormitório</a></li><li class='g'><a class='legendam' onClick='openN(41)'>Adolescente responsável por domicílio</a></li></ul></li><li class='nl'><a class='legendam'>Trabalho e renda</a><ul><li class='h'><a class='legendam' onClick='openN(45)'>Média salarial de adolescentes</a></li><li class='h'><a class='legendam' onClick='openN(46)'>Adolescentes com emprego formal</a></li><li class='g'><a class='legendam' onClick='openN(47)'>Adolescentes aprendizes</a></li></ul></li><li class='nl'><a class='legendam'>Infraestrutura urbana</a><ul><li class='h'><a class='legendam' onClick='openN(73)'>População total com rede de água</a></li><li class='h'><a class='legendam' onClick='openN(72)'>População total com esgotamento adequado</a></li><li class='h'><a class='legendam' onClick='openN(74)'>População total com coleta de lixo</a></li><li class='g'><a class='legendam' onClick='openN(53)'>Tratamento de esgoto</a></li></ul></li><li class='nlf'><a class='legendam'>Violência</a><ul><li class='h'><a class='legendam' onClick='openN(54)'>Mortes por agressão</a></li><li class='h'><a class='legendam' onClick='openN(55)'>Homicídio juvenil masculino</a></li><li class='h'><a class='legendam' onClick='openN(56)'>Estupro de vulnerável</a></li><li class='h'><a class='legendam' onClick='openN(57)'>Violência física</a></li><li class='g'><a class='legendam' onClick='openN(58)'>Violência sexual</a></li></ul></li></ul></li><li><a class='legendam'>"+prf+"</a><ul> <li class='nl'><a class='legendam'>Economia</a><ul><li class='h'><a class='legendam' onClick='openN(61)'>Receitas municipais per capita</a></li><li class='g'><a class='legendam' onClick='openN(62)'>Despesas municipais per capita</a></li></ul></li> <li class='nl'><a class='legendam'>População</a><ul><li class='h'><a class='legendam' onClick='openN(63)'>Variação populacional</a></li><li class='g'><a class='legendam' onClick='openN(64)'>Perfil populacional</a></li></ul></li><li class='h'><a class='legendam' onClick='openN(66)'>Perfil dos endereços</a></li>"+ocultRA+"<li class='g'><a class='legendam' onClick='openN(68)'>PIB per capita</a></li></ul></li><li class='j'><a class='legendamt'>Comparações</a><ul>"+cmp+"<li class='g'><a class='legendamt' onClick='openN(70)'>Séries históricas</a></li></ul></li></div><div></div>";}
	if (ind=='95' || ind=='96' || ind=='97' || ind=='98'||ind=='100') {menun=menuna;};
        document.getElementById('menu').innerHTML=menun;
	muni95="";
	muni96="";
	muni97="";
	muni98='Municípios paulistas em ordem alfabética';
	muni100='Regiões Administrativas Paulistas';
	t96=t71;
	t95=t72;
	if (ind=='95'||ind=='96'||ind=='97'|| ind=='98'||ind=='100') {muni=eval('muni'+ind);name="<h1>Município em foco</h1>"} else {muni=eval("mid .nom["+(parseInt(mun)-1)+"]");;name="<h1>Diagnóstico municipal</h1>";}
	if (ind=='95'||ind=='96'||ind=='97') {con="<div class='dv'>"+name+"</div>"} else {con="<div class='du'>"+name+'</div>'+'<div class="municipio">'+muni+'</div>'}
       document.getElementById('diag').innerHTML=con;
}
function nome() {
try {x = claspop;} catch(err) {claspop='A';}
     if (x=='L'&&ind=='99') {tmu="Comparação com outras RAs";} else {tmu = eval('nind'+ind);}
     document.getElementById('ano').innerHTML=tmu;
	tmt=txtal+"<br><div onClick='Popf(5)' class='legendatd>Fechar</div>";
	document.getElementById('al').innerHTML=tmt;
}
function legen(){
if (mun=='00'&&(ind=='61'||ind=='62')) {legi=eval('txt00'+ind)} else {
legi = eval('txt'+ind);}
if (ind=='72') {legi+="<div id='term06' class='popux'><div id='pib'></div></div>";}
     document.getElementById('leg').innerHTML=legi;
}
function exp() {
try {x = eval('i'+ind+'.ac[1]');} catch(err) {x = 5;}
try {y = eval('i'+ind+'.ac[0]');} catch(err) {y = 5;}
text = eval('txtl'+ind);
text+="<br><div onClick='Popf(1)' class='legendatd>Fechar</div>";
     document.getElementById('exp').innerHTML=text;
}
function barras(){
var fin = eval('i'+ind+'.ac[1]');
var canvas = document.getElementById("canvasGrafico");

if (canvas) {
var altura = 139;
var largura = (fin*(50)+(fin-1)*2+60);//quantidade * (largura barra + largura borda) + largura barra lateral
console.log(fin);
console.log(largura);
var x = 60;
var valor;
canvas.setAttribute("width", largura);
canvas.setAttribute("height", altura);
var ctx = canvas.getContext("2d");

//fundo tabela
ctx.fillStyle = "#f5ecd7";
ctx.fillRect(60, 0, largura-60, altura);
//fundo topo
ctx.fillStyle = "#FFA000";
ctx.fillRect(60, 0, largura-60, 18);
//borda inferior topo
ctx.fillStyle = "white";
ctx.fillRect(60, 18, largura-60, 2);

//bordas verticais brancas
pi=110
for(var lv=1;lv<fin;lv++){

ctx.fillStyle = "white";
ctx.fillRect(pi, 0, 2, 139);
pi+=52}

//linha vertical inferior
ctx.fillStyle = "white";
ctx.fillRect(60, 118, largura-60, 2);
}
function desenharGrafico(){
var fin = eval("i"+ind+".ac[1]");
var co = eval("i"+ind+".ac[0]");
rt = eval('r'+ind);
if (parseInt(mun)>457) {xr='0'} else {xr='1';}

var vetori = new Array();
	for(var t=0;t<fin;t++) {
	if (rt=='1' && xr=='1') {v=eval("i"+ind+".m"+parseInt(mun)+".a["+t+"]");}
else{v=eval("i"+ind+".m"+parseInt(mun)+".h["+t+"]");}
	if (v=="-"||v=="n/d") {vn='0'} else {
	vm=v.replace(".","");
	vp=vm.replace(",",".");	
	vo=parseInt(vp);
        var vn = (vo < 0) ? vo*-1 : vo; 
	}
	vetori.push(vn);}
maior = Math.max.apply(null, vetori);
var esc=maior+1;
if (parseInt(ind)<5 && esc>100) {maior=100;esc=100};
var mult = esc/100;
cont=0;
mc=0;
for(var k=1;k<=fin;k++){
ano=eval("ano"+k);
if (fin>co && k==6) {ano=eval("ano"+k)+"*"};
valab=eval("i"+ind+".m"+parseInt(mun)+".a["+(k-1)+"]");
valora=eval("i"+ind+".m"+parseInt(mun)+".h["+(k-1)+"]");
valorb=valora.replace(".","");
valorc=valorb.replace(",",".");
valor=parseFloat(valorc);
valori=valor;
if (valor>esc) {valori=valor;valor=esc};
z=valora.substring (0,valora.search(","));
if (rt=='1' && xr=='1') {w=valab;} else {if ((ind=='01' || ind=='02' ||ind=='03' ||ind=='04'||ind=='53')&&valori>100) {w='100(+)';mc+=1} else  {w=valora;}}
altu= valor/mult;
cor = "#d84416";
if (valor<0) {cor = 'black';altu=valor/mult*-1;cont+=1;}
//barra
ctx.fillStyle = cor;//caso seja valor negativo
ctx.fillRect(x,altura-altu-19,50,altu);
ctx.stroke();
//legenda valor
ctx.fillStyle = "#333";
ctx.font = "11px arial";
ctx.fillText(w, x+2, 134);
//legenda topo
ctx.fillStyle = "white";
ctx.font = "12px arial";
ctx.fillText(ano, x+10, 14); x+=52;
}
if (esc<10) {d=40} else {if (esc<100) {d=35} else {if (esc<1000) {d=30} else {if (esc<10000) {d=20} else {d=10}}}};
ctx.fillStyle ="transparent";
ctx.fillRect(0,19,9,altura-40);
ctx.stroke();
//legenda lado esquerda
ctx.fillStyle = "#333";
ctx.font = "12px arial";
ctx.fillText('0', 40, altura-15);
ctx.fillText(esc, d, altura-116); 
}
desenharGrafico();
	var fin = eval('i'+ind+'.ac[1]');
	var co = eval('i'+ind+'.ac[0]');
	if (rt=='1' && xr=='1') {var un = eval('unia'+ind);} else {var un = eval('uni'+ind);}
	tmt = un;
	if (cont>0) {tmt = "Unidade: "+un+"<br>A barra em cor preta indica valor negativo";} else {if (mc>0) {tmt="Unidade: "+un+"<br>(+)O indicador superou 100%";} else {tmt="Unidade: "+un;}}
	if (fin>co) {tmx=tmt;} else {tmx=tmt;}

marg=  '0% 0% 0% '+ (10+(6-fin)*3) + '%';
document.getElementById('tab3').style.margin = marg;

	document.getElementById("ctxt").innerHTML=tmx;
 }


function cc() {//mapa das RAs
try {x=eval('p01'+ind);} catch(err) {x='non';}
if (x=='non') {} else {
html="<svg xmlns:cc='http://creativecommons.org/ns#' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' width='1020' height='638'  viewBox='0 0 287866.67 180057.77' version='1.1'><defs id='defs4'><style type='text/css' id='style6'> .sstb5 {fill:#20007b;stroke:white;stroke-width:1;fill-opacity:1;} .sstb4 {fill:#0041b5;stroke:white;stroke-width:1;fill-opacity:1;} .sstb3 {fill:#5a9ce8;stroke:white;stroke-width:1;fill-opacity:1;} .sstb2 {fill:#a2d8ff;stroke:white;stroke-width:1;fill-opacity:1;} .sstb1 {fill:#cdddff;stroke:white;stroke-width:1;fill-opacity:1;} .sstb6 {fill:#a3a3a3;stroke:white;stroke-width:1;fill-opacity:1;} .sstb7 {fill:red;stroke:red;stroke-width:3;fill-opacity:0.8;} </style></defs>";
     
     for(var x=1;x<=16;x++) {
     var i = (x < 10) ? "0"+x : x;
ca=eval('p'+i+ind).split('_')[0];
cp='sstb'+ca;//class
polig=eval("poly"+i);
html+="<g id='ra"+i+"' class='"+cp+"' transform='matrix(282.22222,0,0,282.22222,0,-57.770725)' onmouseover='this.style[\"fill-opacity\"]=0.8;' onmouseout='this.style[\"fill-opacity\"]=1';><a onClick='mapm("+i+")'>"+polig+"</a></g>";

}
html+="</svg>";
document.getElementById("svg2").innerHTML=html;
     
for(var w=1;w<=16;w++) {//muda a cor do nome da região conforme cor do mapa
if (w==13) {continue};
     var z = (w < 10) ? "0"+w : w;
ca=eval('p'+z+ind).split('_')[0];
caa=parseInt(ca);
id='tx'+z;
if (caa<3) {document.getElementById(id).attributes["class"].value = 'ssv'}
if (caa>2) {document.getElementById(id).attributes["class"].value = 'ssa'}
}
nom=eval("mid .nom["+(parseInt(mun)-1)+"]");;
document.getElementById("mei").innerHTML=nom;
}
}


function pg() {try {lyt=eval('nind'+ind);} catch(err) {openN(00);}}
function pm() {if (ind=='95'||ind=='96'||ind=='97'||ind=='98'||ind=='100') {} else {try {x=eval("mid .nom["+(parseInt(mun)-1)+"]");;} catch(err) {var myWindow = window.open("i02.html","_self","",true);}}}
function iniciar_s(){if (ind=='70') {seh();nome();topo();Popf(55);Pop(10);} else {comp();compar();compes();nome();topo();}}
function ini(){pg();pm();if (ind=='71'||ind=='95'||ind=='98'||ind=="00" || ind=='97' || ind=='96'||ind=='100') {Popf(10);Popf(50);Popf(51);Popf(53);Popf(54);nome();topo();muns();if(ind=='00') {present();Pop(51);}} else {if (ind=='64' || ind=='65' || ind=='66') {Popf(10);Popf(50);Popf(51);legen();exp();nome();topo();perf();} else {if (ind=='99'||ind=='70') {Popf(10);Popf(50);Popf(51);Pop(53);Popf(54);Pop(55);Pop(7);iniciar_s();} else {legen();exp();tabcomp();tabcompra();tabcompes();nome();topo();tabmun();barras();if (ind=='68') {pib();}       }}} check();}

//checa se o elemento #da possui alguma tabela 
function check(){
	var el = document.getElementById("tab3");
	if (el.childNodes.length === 0){
		document.getElementById('da').style.display = 'none';
	}
};
function color(elem){
	elements = document.getElementsByClassName('dh');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgb(241, 234, 211)";
        elements[i].style.color="rgb(197, 185, 169)";
    }
    elem.style.backgroundColor="rgb(216, 68, 22)";
    elem.style.color="rgb(255, 255, 255)";
  
};
//verificacao dos elementos das series historicas
document.addEventListener('DOMContentLoaded', function() {
	//checa se o #term10 dentro de "séries históricas" está vazio
	var isEmptyB = document.getElementById('legb').innerHTML === "";
	if(isEmptyB){
		document.getElementById('term10').style.display = 'none';
	}
	//checa se o #term7 dentro de "séries históricas" está vazio
	var isEmptyC = document.getElementById('legc').innerHTML === "";
	if(isEmptyC){
		document.getElementById('term07').style.display = 'none';
	}
	//checa se estamos na página de comparações séries históricas
	var seriesVerifica = document.getElementById('ano').innerHTML === "Séries históricas";
	var corpo = document.getElementsByTagName("BODY")[0];

	if(seriesVerifica){
		corpo.className += 'series-historicas'	
	}
});

function openMenu(){
   var element = document.getElementById("main-menu");

   if (element.classList) { 
       element.classList.toggle("open");
   } else {
       // For IE9
       var classes = element.className.split(" ");
       var i = classes.indexOf("open");

       if (i >= 0) 
           classes.splice(i, 1);
       else 
           classes.push("open");
           element.className = classes.join(" "); 
   }
}

function sc() {
nmun=eval('nr'+claspop);
html="";
	for(var x=1;x<=69;x++) {
	var i = (x < 10) ? "0"+x : x;
	if(x==64||x==65||x==66) {continue};
	qano=eval('i'+i+'.ac[1]');
	indic=eval('nind'+i);
		
html+="<table><tr><td colspan=23><div>"+indic+"</div></td><tr><td><div>Município</div></td><td><div>"+ano1+"</div></td><td><div>"+ano1+"</div></td><td><div>"+ano2+"</div></td><td><div>"+ano2+"</div></td><td><div>"+ano3+"</div></td><td><div>"+ano3+"</div></td><td><div>"+ano4+"</div></td><td><div>"+ano4+"</div></td><td><div>"+ano5+"</div></td><td><div>"+ano5+"</div></td><td><div>"+ano6+"</div></td><td><div>"+ano6+"</div></td><td><div>"+ano7+"</div></td><td><div>"+ano7+"</div></td><td><div>"+ano8+"</div></td><td><div>"+ano8+"</div></td><td><div>"+ano9+"</div></td><td><div>"+ano9+"</div></td><td><div>"+ano10+"</div></td><td><div>"+ano10+"</div></td><td><div>"+ano11+"</div></td><td><div>"+ano11+"</div></td></tr>";

	for(var z=1;z<=nmun;z++) {
	var k = (z < 10) ? "0"+z : z;	
muni = eval("m"+k);
html+="<tr><td><div>"+muni+"</div></td>";
	
for(var y=1;y<=qano;y++) {
	
var h=eval('h'+k+y+i);
var a=eval('a'+k+y+i);
html+="<td><div>"+a+"</div></td><td><div>"+h+"</div></td>";
}
html+="</tr>";
}
html+="</table>";
}
html+="<br><br><br><br><div>";
	document.getElementById('conteudo-series').innerHTML=html;

}




function createAgePyramid() {
    const pyramidElement = document.getElementById('pyramid');
    const ageGroupElement = document.createElement('div');
    ageGroupElement.classList.add('age-group');
    vcor = "#FFA000";
    ageGroupElement.style.backgroundColor= vcor;
    const label = document.createElement('div');    
    label.style.width = '100px';
    label.innerText = 'IDADE';
    label.style.height = '20px';
    label.style.fontSize = '12px';
    label.style.color = 'white';
    const valm= document.createElement('div');    
    valm.style.height = '20px';
    valm.style.width = '330px';
    valm.innerText = 'HOMENS';
    valm.style.fontSize = '12px';
    valm.style.color = 'white';
    valm.style.padding = '5px';
    const valf= document.createElement('div');
    valf.style.width = '330px';
    valf.style.height = '20px';
    valf.innerText = 'MULHERES';
    valf.style.fontSize = '12px';
    valf.style.color = 'white';

    ageGroupElement.appendChild(label);
    ageGroupElement.appendChild(valm);
    ageGroupElement.appendChild(valf);
    pyramidElement.appendChild(ageGroupElement);
    const fin=i64.fx.length-1
    const totm=parseInt(eval('i64.m'+mun+'.h['+fin+']'));
    const totf=parseInt(eval('i64.m'+mun+'.f['+fin+']'));
    const tot=totm+totf;
    var vetorm = new Array();
	for(var x=0;x<fin;x++) {
	vm=eval('i64.m'+mun+'.h['+x+']')/tot*100;
	vetorm.push(vm);}
    var vetorf = new Array();
	for(var x=0;x<fin;x++) {
	vf=eval('i64.m'+mun+'.f['+x+']')/tot*100;
	vetorf.push(vf);}
  
for (let i = 1; i <=fin; i++) {
    y=fin-i;
function mouseOver() {document.getElementById('tes'+i).style.display = "block";}
function mouseOut() {document.getElementById('tes'+i).style.display = "none";}
function mouseOverm() {document.getElementById('ter'+i).style.display = "block";}
function mouseOutm() {document.getElementById('ter'+i).style.display = "none";}
    const ageGroup = i64.fx[y];
    const male = vetorm[y].toFixed(2);
    const malePopulation = male*70;
    const female = vetorf[y].toFixed(2);
    const femalePopulation = female*70;
    const maior = Math.max.apply(null, vetorm);
    if (malePopulation<1.4) {marg=(maior*70-1)+'px';} else {marg=(maior*70-malePopulation)+'px';}
    const malev=parseFloat(male).toLocaleString('pt-BR',{ style: 'decimal', minimumFractionDigits: 2});
    const femv=parseFloat(female).toLocaleString('pt-BR',{ style: 'decimal', minimumFractionDigits: 2});
    const ageGroupElement = document.createElement('div');
    ageGroupElement.classList.add('age-group');
    vcor = "#f5ecd7";teste = y % 2;
    if (teste==0) {ageGroupElement.style.backgroundColor= vcor;};
    const dpopf = document.createElement('div');
    dpopf.classList.add('popf');
    dpopf.id='tes'+i;
    dpopf.innerText = 'Mulheres: '+parseFloat(eval('i64.m'+mun+'.f['+y+']')).toLocaleString('pt-BR',{ style: 'decimal'});    
    const dpopm = document.createElement('div');
    dpopm.classList.add('popm');
    dpopm.id='ter'+i;
    dpopm.innerText = 'Homens: '+parseFloat(eval('i64.m'+mun+'.h['+y+']')).toLocaleString('pt-BR',{ style: 'decimal'});    
    const label = document.createElement('div');    
    label.style.width = '100px';
    label.innerText = ageGroup;
    const valm= document.createElement('div');    
    valm.classList.add('percm');
    valm.style.width = '50px';
    valm.style.margin = '0px 1px 0px '+marg;
    if (vetorm[y]<0.01&&vetorm[y]>0) {valm.innerText='<0,01'} else {valm.innerText = malev};
    const maleBar = document.createElement('div');
    maleBar.classList.add('bar', 'male');
    if (vetorm[y]<=0.01&&vetorm[y]>0) {maleBar.style.width = '1px';} else
    {maleBar.style.width = `${malePopulation}px`;}
    maleBar.addEventListener('mouseover',mouseOverm)
    maleBar.addEventListener('mouseout',mouseOutm)  
    const femaleBar = document.createElement('div');
    femaleBar.classList.add('bar', 'female');
    if (vetorf[y]<=0.01&&vetorf[y]>0) {femaleBar.style.width = '1px';} else
    {femaleBar.style.width = `${femalePopulation}px`;}
    femaleBar.addEventListener('mouseover',mouseOver)
    femaleBar.addEventListener('mouseout',mouseOut)   
    const valf= document.createElement('div');
    valf.classList.add('percf');    
    valf.style.width = '50px';
    if (vetorf[y]<0.01&&vetorf[y]>0) {valf.innerText='<0,01'} else {valf.innerText = femv};

    label.appendChild(dpopm);
    label.appendChild(dpopf);

    ageGroupElement.appendChild(label);
    ageGroupElement.appendChild(valm);
    ageGroupElement.appendChild(maleBar);
    ageGroupElement.appendChild(femaleBar);
    ageGroupElement.appendChild(valf);
    pyramidElement.appendChild(ageGroupElement);
  }




hkai="<div class='crc'><div><center>Elaboração: <a class='classe1' href='http://www.kairos.srv.br' target='_blank'>Kairós Desenvolvimento Social</a> - todos os direitos reservados</center></div></div>";
	document.getElementById('kai').innerHTML=hkai;
 }