var generationDom = {

guestions : ["1.Вопрос №1", "2.Вопрос №2", "3.Вопрос №3"],
answers : ["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],

  addHeader : function (name) {
    var divHeader = document.createElement( 'div' );
    divHeader.className = 'header_test';
    var headText = document.createElement( 'h3' );
    headText.innerHTML = name;
    divHeader.appendChild( headText );
    document.body.appendChild( divHeader );
  },

  addNumberBlock : function () {
    var divContent, h2, label, input, p ;

    for (var i = 0; i < 3; i++) {
      divContent = document.createElement( 'div' );
      divContent.className = 'number_guestion';
      document.body.appendChild(divContent);
      h2 = document.createElement( 'h2' );
      h2.innerHTML = this.guestions[i];
      divContent.appendChild( h2 );

      for (var j = 0; j < 3; j++) {
        label = document.createElement( 'label' );
        divContent.appendChild( label );
        input =  document.createElement( 'input' );
        input.type = 'checkbox';
        label.appendChild( input );
        p =  document.createElement( 'p' );
        p.innerHTML = this.answers[j];
        label.appendChild( p );
      }
    }
  },

  addFooter : function ( button_result ) {
    var divFooter = document.createElement( 'div' );
    divFooter.className = 'footer_test';
    document.body.appendChild( divFooter );
    var button = document.createElement( 'button' );
    button.innerHTML = button_result;
    divFooter.appendChild( button );
  }
}

generationDom.addHeader('Тест по программированию');
generationDom.addNumberBlock();
generationDom.addFooter('Проверить мои результаты');
