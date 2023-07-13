const video = document.getElementById('video');
const startButton = document.getElementById('button');

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play()
    }
  } catch (error) {
    
  }
}

startButton.addEventListener('click', async () => {
  startButton.disabled = true;
  await video.requestPictureInPicture();
  startButton.disabled = false;
});

selectMediaStream();