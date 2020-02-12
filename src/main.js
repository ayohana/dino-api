import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Dino } from '../src/dino-service';
import { Giphy } from './gif-service';

$(document).ready(function() {
  $("button#newGame").click(function() {

    (async () => {
      let dino = new Dino();
      let gif = new Giphy();
      const response1 = await dino.getRandomDino();
      const response2 = await gif.getDinoGif();
      displayOnScreen(response1, response2);
    })();

    const displayOnScreen = function(response1, response2){
      $("#output").text(response1[0]);
      let image = new Image();
      image.id = "dinoGif";
      image.src = response2.data.images.downsized_large.url;
      $("#gifOutput").html(image);
      //console.log(response2);
      //$("#gifOutput").text
    }
  });
});