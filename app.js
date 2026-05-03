body{
  margin:0;
  background:black;
  color:white;
  font-family:Arial;
}

.topbar{
  position:fixed;
  top:0;
  width:100%;
  text-align:center;
  padding:10px;
  background:rgba(0,0,0,0.6);
  z-index:10;
}

#feed{
  height:100vh;
  overflow-y:scroll;
  scroll-snap-type:y mandatory;
}

.video{
  height:100vh;
  position:relative;
  scroll-snap-align:start;
}

iframe{
  width:100%;
  height:100%;
  border:none;
}

.buy-btn{
  position:absolute;
  bottom:80px;
  left:50%;
  transform:translateX(-50%);
  background:gold;
  padding:12px 20px;
  border-radius:30px;
  font-weight:bold;
  color:black;
}

.like, .share{
  position:absolute;
  right:15px;
  font-size:24px;
  cursor:pointer;
}

.like{ bottom:140px; }
.share{ bottom:90px; }
