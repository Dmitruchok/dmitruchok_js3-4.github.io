var generatioElenent = {
    addElement : function ( element ) {
      var el = document.createElement( element );
      return el;
    },

    addClassname : function ( element, className ) {
      element.classList.add(className);
    },

    addBlock : function ( someBlock, nameElement ) {
      var nameBlock = document.querySelector( someBlock );
      nameBlock.appendChild( nameElement );
    },

    addContent : function (element, content) {
      element.innerHTML = content;
    }

    addCheckbox : function (title) {

    }
}

var headBlock = generatioElenent.addElement( 'div' );
var nameHeadBlock = generatioElenent.addClassname( headBlock, 'header');
var headBlockposition = generatioElenent.addBlock( 'body', headBlock );

var headText = generatioElenent.addElement( 'h3');
var headTextposition = generatioElenent.addBlock( '.header', headText );
var contentH3 = generatioElenent.addContent( headText, 'Тест по програмированию' )

var contentBlock = generatioElenent.addElement( 'div' );
var nameContentblock = generatioElenent.addClassname( contentBlock, 'content');
var contentBlockposition = generatioElenent.addBlock( 'body', contentBlock );

var question1 = generatioElenent.addElement( 'h2');
var question1Position = generatioElenent.addBlock( '.content', question1 );
var question1H2 = generatioElenent.addContent( question1, '1. Вопрос №1' )

var checkbox = generatioElenent.addElement( 'input' );
checkbox.type = 'checkbox';
var checkboxPosition = generatioElenent.addBlock( '.content', checkbox );






/*var body = document.querySelector('body');
body.appendChild(header);

var headElement = document.createElement('div');
headElement.classList.add('header')
var body = document.querySelector('body');
body.appendChild(headElement);

var element = document.createElement('h3');
element.innerHTML = 'Тест по програмированию';
body.appendChild(element);
var header =  document.querySelector('.header');
header.appendChild(element);*/
