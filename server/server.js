var app = require('./setup');
var handlers=app.handlers;

app.post('/api/signup',handlers.handelUser.signUp);
app.post('/api/signin',handlers.handelUser.signIn);
app.post('/api/getusername',handlers.handelUser.getUserName);
app.post('/api/getuserinfo', handlers.handelUser.getUserInfo);
app.post('/api/updateaccount', handlers.handelUser.upDateProfile);
app.post('/api/deleteaccount', handlers.handelUser.deleteAccount);
app.post('/api/getsale', handlers.handelUser.getSale);

app.post('/api/additem',handlers.handelItem.addItem);
app.post('/api/getiteminfo',handlers.handelItem.getItemInfo);
app.post('/api/deleteitem',handlers.handelItem.deleteItem);
app.post('/api/search',handlers.handelItem.searchItem);
app.get('/api/getoffer',handlers.handelItem.getOffer);


app.post('/api/addtocart',handlers.handelCart.addToCart);
app.post('/api/getcart',handlers.handelCart.getCart);
app.post('/api/removeitemfromcart',handlers.handelCart.removeItemFromCart);

