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

var headBlock,
    headText;

headBlock = generatioElenent.addElement( 'div' );
            generatioElenent.addClassname( headBlock, 'header' );
            generatioElenent.addBlock( 'body', headBlock );
headText = generatioElenent.addElement( 'h3');
           generatioElenent.addBlock( '.header', headText );
           generatioElenent.addContent( headText, 'Тест по програмированию' );
var contentBlock,
    question1;

contentBlock = generatioElenent.addElement( 'div' );
               generatioElenent.addClassname( contentBlock, 'content');
               generatioElenent.addBlock( 'body', contentBlock );

question1 = generatioElenent.addElement( 'h2');
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
               generatioElenent.addContent( textCheckBox, 'Вариант ответа №2');
               generatioElenent.addBlock( 'label', textCheckBox );

var label1 = generatioElenent.addElement( 'label' );
             label1.id = 'two_label';
             generatioElenent.addBlock('.content', label1 );
var checkBox1 = generatioElenent.addElement( 'input' );
                checkBox1.type = 'checkbox';
                generatioElenent.addBlock( 'label', checkBox1 );
var textCheckBox1 = generatioElenent.addElement( 'p' );
                    generatioElenent.addContent( textCheckBox1, 'Вариант ответа №1');
                    generatioElenent.addBlock( 'label', textCheckBox1 );

var question2 = generatioElenent.addElement( 'h2');
            generatioElenent.addBlock( '.content', question2 );
            generatioElenent.addContent( question2, '2. Вопрос №2' );


var question3 = generatioElenent.addElement( 'h2');
                generatioElenent.addBlock( '.content', question3 );
                generatioElenent.addContent( question3, '3. Вопрос №3' );

var footBlock,
    buttonClick,
    buttonText;

footBlock = generatioElenent.addElement( 'div' );
            generatioElenent.addClassname( footBlock, 'footer' );
            generatioElenent.addBlock( 'body', footBlock );
buttonClick = generatioElenent.addElement( 'button' );
              generatioElenent.addBlock( '.footer', buttonClick );
buttonText = generatioElenent.addElement( 'p');
             generatioElenent.addBlock( 'button', buttonText );
             generatioElenent.addContent( buttonText, 'Проверить мои результаты' );


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
