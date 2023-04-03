const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass to vid element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    videoElement.srcObject = mediaStream;

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //catch error here
    console.log("errorr", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  //start p in p
  await videoElement.requestPictureInPicture();

  //reset but
  button.disabled = false;
});

//on load
selectMediaStream();
