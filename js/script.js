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

      addContent : function (element, content ) {
        element.innerHTML = content;
      },

}

var headBlock = generatioElenent.addElement( 'div' );
                generatioElenent.addClassname( headBlock, 'header' );
                generatioElenent.addBlock( 'body', headBlock );

var headText = generatioElenent.addElement( 'h3');
               generatioElenent.addBlock( '.header', headText );
               generatioElenent.addContent( headText, 'Тест по програмированию' )

var contentBlock = generatioElenent.addElement( 'div' );
                   generatioElenent.addClassname( contentBlock, 'content');
                   generatioElenent.addBlock( 'body', contentBlock );

var question1 = generatioElenent.addElement( 'h2');
                generatioElenent.addBlock( '.content', question1 );
                generatioElenent.addContent( question1, '1. Вопрос №1' );
var label,
    checkBox,
    textCheckBox;

label = generatioElenent.addElement( 'label' );
        generatioElenent.addBlock( '.content', label );
checkBox = generatioElenent.addElement( 'input' );
           checkBox.type = 'checkbox';
           generatioElenent.addBlock( 'label', checkBox );
textCheckBox = generatioElenent.addElement( 'p' );
               generatioElenent.addContent( textCheckBox, 'Вариант ответа №1');
               generatioElenent.addBlock( 'label', textCheckBox );





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
