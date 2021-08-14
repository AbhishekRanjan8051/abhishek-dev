let videos_div = document.getElementById("videos");

async function findVideos() {
  videos_div.innerHTML = null;

  let query = document.getElementById("query").value;
  let res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}?q=india+country+videos&key=AIzaSyD638E-zvBxypcCWCNIB7__e2en9CC2q8E&maxResults=300`
  );

  let data = await res.json();
  console.log(data);

  let { items } = data;

  items = items.filter((el) => {
    return el.id.videoId != undefined;
  });

  items.forEach(({ id: { videoId } }) => {
    let div = document.createElement("div");

    div.style.marginTop = "20px";

    div.innerHTML = `<iframe
      width="360"
      height="220"
           src="https://www.youtube.com/embed/${videoId}"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
      ></iframe> `;

    videos_div.appendChild(div);
  });
}
  findVideos();
