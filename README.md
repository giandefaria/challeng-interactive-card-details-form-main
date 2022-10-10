# challeng-interactive-card-details-form-main

> challeng do site Frontend: https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw

**O objetivo é criar um cartão de crédito interativo, onde a numeração da imagem é preenchida de acordo com os dados informados nos campos da página, vide exemplo constante no link acima.**

**Para executar esse projeto basta executar o arquivo index.html**

# Arquivo index.html
  *Nesse arquivo eu estou marcando o html com o formulário dos dados do cartão  
  *Ao mesmo tempo, adicionei inputs que replicarão os dados adicionados no formulário, por meio de funções escritas em JavaScript, constantes no arquivo script.js
  
# Arquivo script.js
  * O JavaScript possui a responsabilidade de duplicar todo texto que for adicionado no formulário  
  * Criei uma variável para o campo do formulário e outra para o campo duplicado  
  * Toda vez que uma tecla for apertada em algum campo do formulário, será executada uma função onde sera **atribuído** ao do campu duplicado o valor constante no campo do formulário
  * Esse projeto teve uma parte inicial onde eu adicionei um eventListener para cada campo do formulário. Isso ocupou mais de 30 linhas, as quais estão comentadas.
  
  * Tudo isso foi substituído pelo comando for, responsável por criar um índice de todos os campos que foram indicados por uma "class" identificada como 'duplicate'. Essa simplificação consta nas linhas 1-9 do arquivo script.js. Essa classe 'duplicate' foi atribuída a uma const fieldsToDuplicate
  
  #### 1) Função envolvida no loop 'for' <h4>
  * O campo para duplicação será identificado pelo índice (i) no momento do 'levantamento' de uma key do teclado (keyup) no input selecioado. 
  
  * Ao ser acionada qualquer tecla do teclado (desculpe a redundância), as informações serão informadas a uma função pelo parâmetro "e", que será atribuido na const 't' com o target desse evento que foi acionado (e.target), que nada mais é que a identificação do input que esta sendo alterado. Portanto, o valor escrito nesse input será indicado por t.value.
  
  * Aqui entra as strings variáveis. Cada caixa da imagem do cartão que deverá duplicar o que for inserido no formulário está identificado com nomes padrões, iguais aos do formulário, mas iniciando com o termo 'duplicate'. Exemplo: id= 'duplicateCardHolder'. Enquanto que a id do formulário é id= 'cardHolder'. Agora o objetivo era realizar um código que automaticamente identificaria a id a ser duplicada
  
  * Nesse momento surgiu um problema: a primeira letra, após o duplicate, é maiúscula, ao contrário da id normal. Nesse momento surgiu a solução de selecionar apenas o primeiro caracter e colocá-lo em maiúsculo {t.id.charAt(0).toUpperCase()}, e adionar o restante da string pelo slice ${t.id.slice(1)}.
  
  * Portanto, essa função, envolvida no for, finaliza com a seleção da id do campo a ser duplicada, a qual será variável de acordo com a caixa selecionada, e será atribuído o valor do input em que estamos adicionando caracteres (t.value). Ver esse resultado final na linha 7.
  
  * Dentro desse for eu tive que adicionar a duplicação manual referente ao elemento Card.Month, por ser um campo de duplicação para dois inputs (mes e ano).
 
 #### 2) Espaço a cada 4 caracteres no número do cartão <h4>
 * Essa função consta nas linhas 16 até 31. Tive que criar duas funções, uma com eventListener 'keypress', pois havia um bug no navegador que se a pessoa segurasse uma tecla no campo, o script não adicionava os espaços a cada 4 caracteres, caso fosse atribuído o 'keyup'.
 * Mas isso causou um bug no celular, pois o 'keypress' não era executado no navegador chrome do celular. Para resolver isso, criei a função mobileKey() e atribuí para ela ser executada quando a tecla for solta, com a adição do onkeyup='mobileKey()' diretamente no input do cardNumber.
 
 #### 3) Funções de validação <h4>
 * As demais funções possuem o papel de validação dos campos do cartão. A ideia é não deixar que o botão 'confirm' seja acionado se não forem adicionados valores válidos nos inputs do formulário
 
 #### 4) Exibição e ocultação do display <h4>
 * Por fim, temos as funções finished() e back(), as quais terão o papel de manipular o 'display' do formulário e da mensagem final de sucesso, através da atribuição de valores como display none ou display block. 
 
 # Arquivo style.css
 * Esse arquivo não possui muito mistério, é o responsável  pela design da página, e pela adicão de @media queries para arrumar o visual da página pelo celular.
