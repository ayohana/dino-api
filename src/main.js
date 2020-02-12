import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Dino } from '../src/dino-service';

$(document).ready(function() {
  $("button#newGame").click(function() {

    (async () => {
      let dino = new Dino();
      const response = await dino.getRandomDino();
      displayWord(response);
    })();

    const displayWord = function(response) {
      $("#output").text(response[0]);
    }


  });



});