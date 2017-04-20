// 初期状態のrandom-field
enchant();
 game.onload = function () {
        var label = new Label('game load successful!');//test-text
        var game = new Game(1440, 2560);
        game.fps = 30;
        game.rootScene.backgroundColor = "black";
        game.preload('img/r.png', 'img/g.png', 'img/b.png');//画像をロードする
        var M_IMG = 'img/r.png';//赤まる
        var T_IMG = 'img/g.png';//緑さんかく、とらいあんぐる
        var S_IMG = 'img/b.png';//青しかく
        var M_IMG = 1;
        var T_IMG = 2;
        var S_IMG = 3;
        var cnt = 0;
        var B_X = 10;//よこ
        var B_Y = 20;//たて
        
        var randnum = 1 + Math.floor( Math.random() * 3);
        
        var ary = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ];
        
        var array = new Array();
        var records = ['M_IMG', 'T_IMG', 'S_IMG'];//配列
        var rand = records[ Math.floor( Math.random() * records.length)];
        for (var y=0; y < 10; y++){
        for (var x=0; x < 20; x++){
        array[y][x] =  rand;
        //bl[cnt] = new Sprite('B_X', 'B_Y');
        //bl[cnt].image = ['rand'];
        //bl[cnt].x = x*10;
        //bl[cnt].y = y*20;
        //game.rootScene.addChild(bl[cnt]);
        //cnt = cnt + 1;
        }
        }
 };
    game.start();