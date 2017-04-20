enchant(); // おまじない
 
window.onload = function() {
 
    // 行の終わりには、;（セミコロン）を付けます。
 
    var game = new Game(400, 800); // 表示領域の大きさ
    game.fps = 24; // フレーム毎秒
    game.preload('img/r.png');// 前読み込み
    game.preload('img/g.png');
    game.preload('img/b.png');
    game.preload('img/w.png');
    
    
    game.onload = function() { // ゲームの準備が整ったらメインの処理を実行
    game.rootScene.backgroundColor  = 'white'; // 動作部分の背景色
   
    for (var x=0; x < 10; x++){
    for (var y=0; y < 20; y++){
    var one = 0, 
    two = 1, 
    three = 2;
    none = 4;
    
    var yoko = 11;
    var tate = 200;

        var bl = new Sprite(40, 40);  // 準備と同時に、領域の大きさを設定
        
        /*
        var i = Math.random()*3 ;
        if(){
        }else if(i=1){
        bl.image = game.assets['img/r.png'];
        }else if(i=2){
        bl.image = game.assets['img/g.png'];
        }else if(i=3){
        bl.image = game.assets['img/b.png'];
        }*/
                /*case none:
         bl.image = game.assets['img/w.png']*/
        switch (Math.floor( Math.random() * 3 )){//0~2までの0,1,2
        case one:
         bl.image = game.assets['img/r.png'];// 画像を適用
            break;
        case two:
         bl.image = game.assets['img/g.png'];
            break;
        case three:
         bl.image = game.assets['img/b.png'];
            break;
            
        
            
        };
        bl.x = 40*x; // 横
        bl.y = 40*y; // 縦
        game.rootScene.addChild(bl);// シーンに表示
        }
        };
         
                var lblTouchPos = new Label();
        lblTouchPos.text = '';

        game.rootScene.addEventListener('touchstart', function(e) {

            lblTouchPos.text = 'X:' + e.localX + ',' + 'Y:' + e.localY;
        game.rootScene.addChild(lblTouchPos);
        

        var zx = e.localX/40;
        var zy = e.localY/40*10;
    });
    };
    };

    game.start(); 

