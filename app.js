/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/
$(function(){
    var image = $('.article-item').find('img');
    $(image).prop('src','https://pre00.deviantart.net/1940/th/pre/i/2014/185/7/b/how_to_train_your_chasmfiend_by_art_zealot-d7p9xbx.jpg');
});
