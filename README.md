# project1: **Tic Tac Toe**

## Deployment:
write here


### Technologies used in the project:
* Html
* CSS
* JS
* JQuery


## Approach taken:
First step was to draw out the WireFrames and to think of applying the winning, lose, tie situations. second step was making simple html and css then writing the solution of the logic for the problem. after finishing the logic I worked on the css design.


## wireframes and user stories:
![wireframe](images\wireframe.jpeg)
### user stories:
Tic Tac Toe
- The object of Tic Tac Toe is to get three in a row. You play on a three by three game board 9 cells. The first player is known as X and it will be the first click and the second is O for the second click . Players alternate placing Xs and Os on the game board's cells until either has three in a row , columns or diagonals then the player wins.

## Planning and Development Process:
First step was to draw out the WireFrames and to think of applying the winning, lose, tie situations. second step was making simple html and css then writing the solution of the logic for the problem. after finishing the logic I worked on the css design.

## # Describe any lines or function in the code:
```js
function check(){

        
        let d1 = $("#d1").text();
        let d2 = $("#d2").text();
        let d3 = $("#d3").text();
        let d4 = $("#d4").text();
        let d5 = $("#d5").text();
        let d6 = $("#d6").text();
        let d7 = $("#d7").text();
        let d8 = $("#d8").text();
        let d9 = $("#d9").text();



        if (d1 == d2 && d2 == d3 && d1!="")//123
        {
             
            setTimeout(function(){ swal("win"+" "+d1);},100, audio2.play())
           
        }
       else if (d4 == d5 && d5 == d6 && d4!="")//456
        {
            setTimeout(function(){ swal("win"+" "+d4);},100,audio2.play())
        }
        else if (d7 == d8 && d8 == d9 && d7!="")//789
        {
            setTimeout(function(){ swal("win"+" "+d7);},100,audio2.play())
        }
        else if (d1 == d4 && d4 == d7 && d1!="")//147
        {
            setTimeout(function(){ swal("win"+" "+d1);},100,audio2.play())
        }
        else if (d2 == d5 && d5 == d8 && d2!="")//258
        {
            setTimeout(function(){ swal("win"+" "+d2);},100,audio2.play())
        }
        else if (d3 == d6 && d6 == d9 && d3!="")//369
        {
            setTimeout(function(){ swal("win"+" "+d3)},100,audio2.play())
        } else if (d1 == d5 && d5 == d9 && d1!="")//159
        {
            setTimeout(function(){ swal("win"+" "+d1)},100,audio2.play())
        }
        else if (d3 == d5 && d5 == d7 && d3!="")//357
        {
            setTimeout(function(){ swal("win"+" "+d3)},100,audio2.play())
        }
        
   
        else if(d1 !="" && d2 !=""&& d3 !=""&& d4 !=""&& d5 !=""&& d6 !="" && d7 !=""&& d8 !=""&& d9 !=""){
           setTimeout(function(){   swal("Tie")},100)
        }
        
}

```
## Challenges:
- the first problem i faced is how can reset the page after press the button.
- the second is how make the design is responsive .

# Unsolved problems which would be fixed in future iterations
- now I do not have any problems but i want add some future in the features.
### Refraces
- [sweetalert2](https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css)
- [jquery](https://code.jquery.com/jquery-3.4.1.min.js)
- [audio](http://soundbible.com/tags-click.html)
- [background](https://unsplash.com/s/photos/background-game)

---