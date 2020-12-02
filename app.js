var posts = document.querySelectorAll('.post');
var back = document.querySelector('.fullsize');
var head = back.querySelector('section').querySelector('h1');
var para = back.querySelector('section').querySelector('p');
back.onclick = function(){
                back.style.display = 'none';
                head.innerHTML = '';
                para.innerHTML = '';
       };
function show(num){
    back.style.display = 'flex';
    head.innerHTML = posts[num].querySelector('.header').innerHTML;
    para.innerHTML = posts[num].querySelector('.header').innerHTML+':'+posts[num].querySelector('.fulltext').innerHTML;
}
