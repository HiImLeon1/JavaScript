let val;

val=document;

val=document.baseURI //웹 페이지의 절대 uri를 반환.
val=document.body //<body> 태그 반환
val=document.head //<head> 태그 반환
val=document.forms //<form> 태그 모두 반환
val=document.forms[0].id;
val=document.forms[0].classList; //<form> 태그 모두 반환
val=document.forms[0].className; //<form> 태그 모두 반환

val=document.scripts; // <script> 태그 반환
console.log(val)