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
    var form, h2, label, input, p, inputButton ;

    form = document.createElement( 'form' );
    document.body.appendChild(form);

    for (var i = 0; i < 3; i++) {
      h2 = document.createElement( 'h2' );
      h2.innerHTML = this.guestions[i];
      form.appendChild( h2 );

      for (var j = 0; j < 3; j++) {
        label = document.createElement( 'label' );
        form.appendChild( label );
        input =  document.createElement( 'input' );
        input.type = 'checkbox';
        label.appendChild( input );
        p =  document.createElement( 'p' );
        p.innerHTML = this.answers[j];
        label.appendChild( p );
      }
    }
    inputButton =  document.createElement( 'input' );
    inputButton.type = 'submit';
    inputButton.value = 'Проверить мои результаты';
    form.appendChild( inputButton );
  }
}

generationDom.addHeader('Тест по программированию');
generationDom.addNumberBlock();
