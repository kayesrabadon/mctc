const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const mysql = require('mysql');
const router = express.Router();
const jwt = require('jsonwebtoken');
const privateKey = 'j56hkhk9dgdg34lj';
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: 'public/uploads/',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

// Create connection
const connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: '12345678',
	database: 'mctcdb',
	port: 3306
});
const port = process.env.API_PORT || 3001;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } 
  console.log('connected as id ' + connection.threadId);
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

//Insert
app.use('/api', router);

//login
router.post('/login', (req, res, next) => {
	const reqObj = req.body;
	const username = reqObj.username;
	const pwd = reqObj.password;
	console.log(req.body);

	connection.query('SELECT * FROM membership WHERE username =? AND pwd =?',[username,pwd], (error, results, fields) => {
		if (error) throw error;

	    if(results.length > 0){

	    		const tokenData = {
	    			username: results[0].username,
	    			id: results[0].id
	    		};
	    		const result = {
	    			user: results[0],
	    			token: jwt.sign(tokenData, privateKey)
	    		};

	    		res.json(result);
	    }else{
	    		res.send('User or Password is incorrect!');
	    }

	});
});

router.post('/register-member', (req, res, next) => {
	const reqObj = req.body;
	console.log(reqObj);
	const members = {
		"title" : reqObj.title,
		"familyname" : reqObj.familyname,
		"firstname" : reqObj.firstname,
		"username" : reqObj.username,
		"pwd" : reqObj.pwd,
		"repeatpwd" : reqObj.repeatpwd,
		"gender" : reqObj.gender,
		"dateofbirth" : reqObj.dateofbirth,
		"streetaddress" : reqObj.streetaddress,
		"suburbaddress" : reqObj.suburbaddress,
		"cityaddress" : reqObj.cityaddress,
		"phonenumber" : reqObj.phonenumber,
		"mobilenumber" : reqObj.mobilenumber,
		"emailaddress" : reqObj.emailaddress,
		"occupation" : reqObj.occupation,
		"subscriptioncategory" : reqObj.subscriptioncategory,
		"membershiptype" : reqObj.membershiptype,
		"fee" : reqObj.fee,
		"feetype" : reqObj.feetype,
		"agreetoterms" : reqObj.agreetoterms,
		"membershipstatus" : 0,
		"usertype" : 1
	};


	connection.query('INSERT INTO membership SET ?', members, (error, results, fields) => {
	  if (error) throw error;
	  
	  const last_id = results.insertId;

	  const additionalmembers = {
	  	  "id_user": last_id,
	  	  "addtitle": reqObj.addtitle,
	  	  "addFamilyName": reqObj.addFamilyName,
	  	  "addFirstName": reqObj.addFirstName,
	  	  "addSubscriptioncategory": reqObj.addSubscriptioncategory,
	  	  "addMembershiptype": reqObj.addMembershiptype,
	  	  "addgender": reqObj.addgender,
	  	  "adddateofbirth":reqObj.adddateofbirth 
	  }

	  connection.query('INSERT INTO additionalmembers SET ?', additionalmembers, (error, results, fields) => {
	    if (error) throw error;
	    res.redirect('http://localhost:3000/membership');
	  });
	});
});


router.post('/insertnews', upload.single('newspicture'), (req, res, next) => {

	const reqObj = req.body;
	console.log('uploading..')
	if(req.file){
		
		const imagename = req.file.originalname;
		const newstitle = reqObj.newstitle;
		const newscontent = reqObj.newscontent;
		const news = {
			  "newspicture": imagename,
			  "newstitle": newstitle,
			  "newscontent": newscontent
		}
		
		connection.query('INSERT INTO newsandevents SET ?', news, (error, results, fields) => {
		  if (error) throw error;
		  console.log(req.file)	
		  
			res.json({success:true})
		});

	}


  })


router.get('/selectNews', (req, res) => {
	connection.query("SELECT * FROM newsandevents", (error, results, fields) => {
	  if (error) throw error;
	  console.log(results);
	  res.json(results);
	});
});

//Select members
router.get('/filter', (req, res) => {

	const reqObj = res.body;
	let query = '';
	switch(req.query.filter){

		case 'active':
			query = "SELECT * FROM membership WHERE membershipstatus=1 AND usertype=1";
		break;
		case 'inactive':
			query = "SELECT * FROM membership WHERE membershipstatus=0 AND usertype=1";
		break;
		case 'allactivemale':
			query = "SELECT * FROM membership WHERE gender='male' AND membershipstatus=1 AND usertype=1";
		break;
		case 'allactivefemale':
			query = "SELECT * FROM membership WHERE gender='female' AND membershipstatus=1 AND usertype=1";
		break;
		case 'interclubfamily':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Interclub Membership' AND membershiptype='Family' AND membershipstatus=1 AND usertype=1";
		break;
		case 'interclubsenior':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Interclub Membership' AND membershiptype='Senior' AND membershipstatus=1 AND usertype=1";
		break;
		case 'interclubstudent':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Interclub Membership' AND membershiptype='Student' AND membershipstatus=1 AND usertype=1";
		break;
		case 'interclubjunior':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Interclub Membership' AND membershiptype='Junior' AND membershipstatus=1 AND usertype=1";
		break;
		case 'socialfamily':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Social Membership' AND membershiptype='Family' AND membershipstatus=1 AND usertype=1";
		break;
		case 'socialsenior':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Social Membership' AND membershiptype='Senior' AND membershipstatus=1 AND usertype=1";
		break;
		case 'socialstudent':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Social Membership' AND membershiptype='Student' AND membershipstatus=1 AND usertype=1";
		break;
		case 'socialjunior':
			query = "SELECT * FROM membership WHERE subscriptioncategory='Social Membership' AND membershiptype='Junior' AND membershipstatus=1 AND usertype=1";
		break;
		case 'juniors':
			query = "SELECT *, DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) AS age FROM membership WHERE DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) > 4 AND DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) < 18 AND membershipstatus=1 AND usertype=1";
		break;
		case 'grasshoppers':
			query = "SELECT *, DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) AS age FROM membership WHERE DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) > 4 AND DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) < 8 AND membershipstatus=1 AND usertype=1";
		break;
		case 'junior':
			query = "SELECT *, DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) AS age FROM membership WHERE DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) > 7 AND DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) < 12 AND membershipstatus=1 AND usertype=1";
		break;
		case 'seniors':
			query = "SELECT *, DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) AS age FROM membership WHERE DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) > 17 AND membershipstatus=1 AND usertype=1";
		break;
		default:
			query = "SELECT * FROM membership WHERE usertype=1 AND id <> null"

	}

	connection.query(query, (error, results, fields) => {
	  if (error) throw error;
	
	  res.json(results);
	});


});

//Select
router.get('/selectAllMember', (req, res) => {
	connection.query("SELECT *, DATE_FORMAT(NOW(), '%Y') - DATE_FORMAT(dateofbirth, '%Y') - (DATE_FORMAT(NOW(), '00-%m-%d') < DATE_FORMAT(dateofbirth, '00-%m-%d')) AS age FROM membership WHERE usertype=1", (error, results, fields) => {
	  if (error) throw error;
	  console.log('select all query');
	  res.json(results);
	});
});


//delete data
router.post('/deleteMember', (req, res) => {
	const reqObj = req.body;

	connection.query("DELETE FROM membership WHERE id = "+reqObj.id, (error, results, fields) => {
	  if (error) throw error;
	  res.json(results);
	});
});


//update data
router.post('/updateActivate', (req, res) => {
	const reqObj = req.body;

	connection.query("UPDATE membership SET membershipstatus=1 WHERE id = "+reqObj.id, (error, results, fields) => {
	  if (error) throw error;
	  res.send('Activated!');
	});
});

router.post('/updateDeActivate', (req, res) => {
	const reqObj = req.body;

	connection.query("UPDATE membership SET membershipstatus=0 WHERE id ="+reqObj.id, (error, results, fields) => {
	  if (error) throw error;
	  res.send('Deactivated!');
	});
});

app.listen(port, () => {
 console.log(`api running on port ${port}`);
});


