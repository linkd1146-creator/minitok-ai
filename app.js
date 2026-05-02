import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

/* ================= FIREBASE ================= */
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* ================= STATE ================= */
let videos = [];

/* ================= LOAD DATA ================= */
onValue(ref(db,"videos"), (snap)=>{
  videos = snap.val()
    ? Object.entries(snap.val()).map(([id,v])=>({id,...v}))
    : [];

  render();
});

/* ================= AI RANK ================= */
function rank(){
  return videos.sort((a,b)=>
    ((b.ctr||0)+(b.views||0)) -
    ((a.ctr||0)+(a.views||0))
  );
}

/* ================= RENDER ================= */
function render(){

  let feed = document.getElementById("feed");
  feed.innerHTML = "";

  rank().forEach(v=>{

    let div = document.createElement("div");
    div.className="video";

    div.innerHTML=`
      <iframe src="https://www.youtube.com/embed/${v.video}?autoplay=1&mute=1"></iframe>

      <a class="buy-btn" href="${v.link}" onclick="track('${v.id}')">
        🛒 BUY NOW
      </a>

      <div class="like" onclick="like('${v.id}')">❤️</div>
      <div class="share" onclick="share()">🔗</div>
    `;

    feed.appendChild(div);
  });
}

/* ================= LIKE + CTR ================= */
window.like = function(id){

  let r = ref(db,"videos/"+id+"/ctr");

  get(r).then(snap=>{
    set(r,(snap.val()||0)+1);
  });

  let v = videos.find(x=>x.id===id);
  if(v) window.location.href = v.link;
};

/* ================= VIEW TRACK ================= */
window.track = function(id){
  let r = ref(db,"videos/"+id+"/views");

  get(r).then(snap=>{
    set(r,(snap.val()||0)+1);
  });
};

/* ================= SHARE ================= */
window.share = function(){
  navigator.share?.({
    title:"MiniTok SaaS",
    url:location.href
  });
};
