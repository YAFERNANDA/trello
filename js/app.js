window.addEventListener('load', function(){
  var visible = document.getElementById('visible');
  var main = document.getElementById('main');


  function cover (){
    visible.addEventListener('click', function(){
      var newInput = document.createElement('form');
      newInput.setAttribute('class', 'newInput');
      main.appendChild(newInput);
    });
  };




});
