
    var Mouse = require('./mouse');
    var Cat = require('./cat');




    var micky = new Mouse('black');
    var jerry = new Mouse('orange');
    console.log(micky);
    console.log(jerry);
    var tom = new Cat();
    
    tom.eat(micky);
    console.log(tom);