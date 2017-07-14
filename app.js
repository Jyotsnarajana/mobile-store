(
    function (){
        var app=angular.module("MobileStore",[]);
        var iphone={
            name:"iphone 7 plus",
            color:"rose gold",
            memory:"3GB RAM,128GB internal storage",
            price:75999.00,
            image:"img/iphone.jpg",
            isSoldOut:true,
            activeTab:"Description"
        };
        var samsung={
            name:"samsung s8",
            color:"grey",
            memory:"6GB RAM,64GB internal storage",
            price:56000.00,
            image:"img/samsung.jpg",
            isSoldOut:true,
            activeTab:"Description"
        };
        var note={
            name:"redmi note4",
            color:"gold",
            memory:"2GB RAM,64GB internal storage",
            price:10000.00,
            image:"img/note.jpg",
            isSoldOut:true,
            activeTab:"Description"
        };
        var nokia= {
            name: "nokia edge 2017",
            color: "grey",
            memory: "3GB RAM,32GB internal storage",
            price: 50000.00,
            image: "img/nokia.jpg",
            isSoldOut: true,
            activeTab:"Description"
        };
        var yu= {
            name: "yureka plus",
            color: "white",
            memory: "2GB RAM,32GB internal storage",
            price: 12000.00,
            image: "img/yureka.jpg",
            isSoldOut: true,
            activeTab:"Description"
        };
        var cool= {
            name: "coolpad max",
            color: "rose gold",
            memory: "2GB RAM,64GB internal storage",
            price: 15000.00,
            image: "img/coolpad.jpg",
            isSoldOut: true,
            activeTab:"Description"
        };
        app.controller("StoreController",function() {
            this.mobiles=[iphone,samsung,note,nokia,yu,cool];
            this.setActiveTab=function(mobile,tab){
                mobile.activeTab=tab;
            }
        });
    })();