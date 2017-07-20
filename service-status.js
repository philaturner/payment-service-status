var services = {
  amazonpay : {
          'url': 'https://mws-eu.amazonservices.com/OffAmazonPayments/2013-01-01?Action=GetServiceStatus',
          statusCall: function(){
            console.log(this.url);
            loadXML(this.url, this.gotData, this.gotError);
          },
          gotData: function(data){
            //var d = Date.getTime();
            if(data){
              createP('Amazon Service - All Good');
            }
          },
          gotError: function(data){
            //var d = Date.getTime();
            createP('Amazon Service - Not OK');
          }
          },
  paypal : {
          'url': 'https://api.sandbox.paypal.com/v1/payments/payment',
          statusCall: function(){
            console.log(this.url);
            loadXML(this.url, this.gotData, this.gotError);
          },
          gotData: function(data){
            //var d = Date.getTime();
            if(data){
              createP('PayPal Service - All Good');
            }
          },
          gotError: function(data){
            //var d = Date.getTime();
            createP('PayPal Service - Not OK');
          }
        },
  epdq : {
          "ui1" : "v1",
          "ui22" : "v2"
        },
  bpf : {
          "ui1" : "v1",
          "ui22" : "v2"
        }
};

function preload(){
  noCanvas();

}

function setup(){
  //check Amazon Pay service status on load
  services.amazonpay.statusCall();
  services.paypal.statusCall();

}

function draw(){



}
