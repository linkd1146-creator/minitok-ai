import { db } from "./firebase.js";
import {
  ref,
  onValue,
  set,
  get
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

let videos = [];

/* ================= LOAD ================= */
onValue(ref(db,"videos"), (snap)=>{
  videos = snap.val()
    ? Object.entries(snap.val()).map(([id,v])=>({id,...v}))
    : [];

  render();
});

/* ================= RENDER ================= */
function render(){

  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  videos.forEach(v=>{

    let div = document.createElement("div");
    div.className="video";

    div.innerHTML=`
      <iframe src="https://www.youtube.com/embed/${v.video}?autoplay=1&mute=1"></iframe>

      <a class="buy-btn" href="${v.link}">
        🛒 BUY
      </a>

      <div class="like" onclick="like('${v.id}')">❤️</div>
      <div class="share" onclick="share()">🔗</div>
    `;

    feed.appendChild(div);
  });
}

/* ================= LIKE ================= */
window.like = function(id){

  let r = ref(db,"videos/"+id+"/ctr");

  get(r).then(snap=>{
    set(r,(snap.val()||0)+1);
  });

};

/* ================= SHARE ================= */
window.share = function(){
  navigator.share?.({
    title:"MiniTok",
    url:location.href
  });
};

console.log("MiniTok V2 Loaded 🚀");
