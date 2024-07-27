let txt=document.getElementById('txt');

txt.addEventListener('input',function(){
  let text=this.value;
  let count=text.length;
  document.getElementById('char').innerHTML=count;

  let words=text.split(' ');

  let wordscount=words.length;
  document.getElementById('word').innerHTML=wordscount;
});