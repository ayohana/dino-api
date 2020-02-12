export class Giphy{
  async getDinoGif(){
    try {
      console.log("test");
      let response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=dinosaur&rating=pg`);
      console.log("help")
      let jsonifiedResponse = await response.json();
      console.log("response -", jsonifiedResponse);
      return jsonifiedResponse
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}