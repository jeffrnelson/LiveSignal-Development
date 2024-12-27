//var elem = document.getElementById("CustomLogo");
//elem.src = "https://media.cheggcdn.com/media/957/957a3f92-c03b-4030-9773-81433e060677/phplKXKso";
//elem.src = {{ 'beatles.jpg' | asset_img_url }};

/*
async function my() {
  console.log("starting")
 // const client = new shopify.clients.Rest({ session });
  //const response = client.get({
   // path: "https://api.hookdeck.com/2023-01-01/events/?include=data&limit=1",
  //});
  var reqInstance = axios.create(
    {
        baseURL: 'https://api.hookdeck.com/2023-01-01/events/?include=data&limit=1',
        headers:
        {
            Authorization: 'Bearer 00zz2498isjuctvqyubs1xc485iew3e8z0x5900hijm1ewqgx2'
        }
    });

    var response = await reqInstance.get();
    //resp.end(response.data.models[0].data.body.entry[0].changes[0].value.status);
    console.log(response.data.models[0].data.body.entry[0].changes[0].value.status);
}
*/

async function getHookDeckEvent()
{
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer 00zz2498isjuctvqyubs1xc485iew3e8z0x5900hijm1ewqgx2");
  myHeaders.append("Access-Control-Allow-Origin", "https://api.hookdeck.com/2023-01-01/events/?include=data&limit=1");
  myHeaders.append("mode", "no-cors");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
   fetch("https://api.hookdeck.com/2023-01-01/events/?include=data&limit=1", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', error));
}

function change(img)
{
  console.log("test");
  //document.getElementById("CustomLogo").src={{ 'beatles.jpg' | asset_img_url }};
  document.getElementById("CustomLogo3").src ="/assets/unnamed.png";
  getHookDeckEvent();
  //elem.src = ${'unnamed.jpg' | asset_img_url};
  //elem.src ="/assets/unnamed.png";
  //alert(`${routes.account_url}`);
  //alert(`${routes.cart_change_url}`);
  //alert(`${routes.cart_change_url}`);
}
