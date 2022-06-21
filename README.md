# Next() :
- it is a callback function in a middleware
- it passses the control to the subsequent function
- if next () is missed, the control flow will hang

<!-- TYPES OF MIDDLEWARE: -->
# Route based Middlewares
# Global Middlewares

<!-- WHY Middleware -->
- manages the flow of control
- code reusability esp for restrivted routes

<!-- WHAT -->
- sit between your router and your HANDLER

<!-- e.g. -->
router.post('/getHomePage' , MiddlewareIfLoggedIn,  UserController.homePage)
 
function MiddlewareIfLoggedIn( req, res, next) {
    if loggedIn then call the next fucntion/handler which will give us the home page feeds
    else res.send( " please login or register")
 }


<!--  e.g. restricted and open-to-all API's can be handled like below now: -->
# restricted API's
 router.get('/homePage', mid1, UserController.feeds)
 router.get('/profileDetails', mid1, UserController.profileDetails)
 router.get('/friendList', mid1, UserController.friendList)
 router.get('/changePassword', mid1, UserController.changePassword)

# OPen-to-all API's
 router.get('/termsAndConditions',  UserController.termsAndConditions)
 router.get('/register',  UserController.register)


<!-- GLOBAL MW -->
app.use( midGlobal)

# body-parser functions:
- getting the post data in req.body
- getting the req.body data as JSON 
- providing the header data in req.header
etc etc

<!-- JWT BASIC INTRO OF FLOW -->
<!-- // LOGIN FLOW -->

you punch your userName and password 
if correct you get loggedIn...


<!-- WITHOUT JWT: -->
next time you call an api to get your FB friendList..FB should ask you for a login again ( BUT this does not happen in real life)

after 30 mins..you try to access your profile page..ideally FB should ask you to login again..BUT this does not happen in real life

<!-- WITH JWT -->
you punch your userName and password ..FB will craete a unique secret token( unique to every user) and send it to the browser..Chrome will save this token in its storage
next time I want to acess my friendList..chrome(frontend) will send this token ( already stored in chrome storage) to the API..this API will first call a Middleware which will verify if the token is correct and who does it belong to..if token is correct then we will send the friend list of the concerned person..else send not authorised

next time when you request your profile page..token is checked ..if correct you get your profile page, else "not authorised"

intro

<!-- TRY CATCH SUMMARY: -->
// if you get an error in try block, it will not execute the next lines of code inside try
// instead it will jump into catch block and execute the code there
// code in catch block is normallly not executed
//rather catch block is only executed if there is error in try block
// the error( along with message++) gets sent to catch block incase there is an error




// Specific HTTP codes(only impt ones) information
// 2xx- Success
// 4xx- something gone wrong..and problem is on user side(client side)
// 5xx- server side problems

// "BAD REQUEST" ...400..say if username password dont match etc..or anything generic( any problem in input on user side or any other unhandled problem)
// "RESOURCE NOT FOUND"...404 //404 page not found...eg. find ("asaijndianud89")...let book =bookModel.findOne({_id:"asaijndianud89"})   if (book){..} else res.status(404).send({})
// "AUTHENTICATION MISSING"...401..login is required...if(token){...} else { res.status(401)}
// "NOT AUTHENTICATED OR FORBIDDEN"..403 // if ( token.userId === userId) {...} else {res.status(403).send({}) }
// -- try catch ....// "SERVER ERROR"...500

// -- ALL GOOD... //status(200)- OK
// --- "ALL GOOD and A NEW RESOURCE WAS SUCCEFULLY CREATED" ...status(201)..e.g a new user registers herself successfully


<!--Promise has typically 3 states -->
Pending : not awaited and hence has not completed yet ( e.g. typically when you dont await an axios or db call)
Rejected: When promise failed ( wrong url | server down etc)
Fulfilled: Promise completed succesfully (e.g. db call has completed and returned a result succesfully) // - settled : referes to a combination of either rejhected or fulfilled
What is a promise:
layman's definition: It is something in JS that tells us whether an operation has completed or not (pending)
technical definition: it is a JS object that represents whether an asynchronous operation(like db or axios call) is completed or not




<!-- assigment -->


// GIT link..go thourgh this code thoroughly..it will result in a confusion when you are going though the code- postman se hit kar rhe hai and same axios se bhi hit kar rhe hai ..why? // a short video ..4-5 mins summary on what we covered today // An asignment :

WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

GOTO http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further Create API's to do each of the following: - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid= (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error ..also use HTTP only and not HTTPS) - then change the above to get the temperature only( of London) - Sort the cities ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature result should look something like this [ {city:"London", temp: 280}, {city:"Moscow", temp: 290}, {city:"Bangalore", temp: 301.2}, ....... ]

Axios POST request assignment

     1. Get all the memes at Postman (https://api.imgflip.com/get_memes
     2. Pick a memeId you want (Eg 129242436) for the POST request
     3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
     template_id <meme_id>
     text0 <text you want as a caption>
     text1 <optional>
     username chewie12345
     password meme@123

     4. Return a response with a body like this
     "data": {
             "url": "https://i.imgflip.com/5mvxax.jpg",
             "page_url": "https://imgflip.com/i/5mvxax"
         }


/v2/appointment/sessions/public/findByDistrict

49e13c329b2bf9dad6bbf86594bbcb2c


 "id": "181913649",
                "name": "Drake Hotline Bling",
                "url": "https://i.imgflip.com/30b1gx.jpg",


