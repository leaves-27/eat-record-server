import express from 'express';

import Login from './api/login';
import Register from './api/register';

import Loginout from './api/loginout';
import Article from './api/article';
import jwtauth from './jwtauth';

// import web from './web';

let router = express.Router();
let login = new Login();
let loginout = new Loginout();
let article = new Article();

let register = new Register();

const loginValidation = (req,res,next)=>{
  if(req.user){
    //已登录，返回已登录信息
    next()
  }else{
    //未登录，返回未登录
    res.json({
      code : 4,
      msg : "未登录"
    })
  }
}

//页面级验证及其响应
// router.get(/^((?!api).)*$/,web);

//接口级验证及响应
router.post('/api/login',login.post);

router.post('/api/register',register.post);

router.get('/api/loginout',jwtauth,loginValidation);
router.get('/api/loginout',loginout.get);

router.get('/api/backend',jwtauth,loginValidation);
router.get('/api/backend',article.getOne);

router.post('/api/backend',jwtauth,loginValidation);
router.post('/api/backend',article.post);

router.get('/api/list',jwtauth,loginValidation);
router.get('/api/list',article.getAll);

router.get('/api/detail/:id',loginValidation);
router.get('/api/detail/:id',article.getOne);

module.exports = router;
