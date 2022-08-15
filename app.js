new Vue({
        el:"#app",
        data:{
                player_health:100,
                monster_health:100,
                game_is_on:false,
                logs:[]
        },
        methods:{
                start_game: function(){
                        this.game_is_on=true
                },
                attack: function(){
                        var point=Math.ceil(Math.random()*10);
                        this.monster_health-=point;
                        this.monster_attack()
                        this.add_to_log( {turn:"P",text:"Oyuncu Atağı ("+ point +")"} )
                },
                special_attack: function(){
                        var point=Math.ceil(Math.random()*20);
                        this.monster_health-=point;
                        this.monster_attack()
                        this.add_to_log( {turn:"P",text:"Özel Oyuncu Atağı ("+ point +")"} )

                },
                heal_up: function(){
                        var point=Math.ceil(Math.random()*15);
                        this.player_health+=point;
                        this.monster_attack()
                        this.add_to_log( {turn:"P",text:"Oyuncu Can Aldı=("+ point +")"} )

                },
                give_up: function(){
                        this.player_health=0
                        this.add_to_log( {turn:"P",text:"Oyuncu Pes Etti..."} )

                },
                monster_attack: function(){
                        var point=Math.ceil(Math.random()*15);
                        this.player_health-=point;
                        this.add_to_log( {turn:"M",text:"Canavar Atağı ("+ point +")"} )

                },
                add_to_log: function(log){
                        this.logs.push(log)
                }
        },
        watch:{
                player_health: function(value){
                        if(value<=0){
                                this.player_health=0
                                if(confirm("Oyunu KAYBETTİN. Yeniden Oynamak İster Misin?")){
                                        this.player_health=100
                                        this.monster_health=100
                                        this.logs=[]

                                }

                        }else if(value>100){
                                this.player_health=100
                        }
                },
                monster_health: function(value){
                        if(value<0){
                                this.monster_health=0
                                if(confirm("Oyunu KAZANDIN. Yeniden Oynamak İster Misin?")){
                                        this.player_health=100
                                        this.monster_health=100
                                        this.logs=[]
                                }
                        }else if(value>100){
                                this.monster_health=100
                        }
                }
        }
})
