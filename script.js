const input = document.querySelector('input[type="file"]');
const img = document.querySelector('img');
const downloadBtn = document.querySelector('#download-btn');
const convertBtn = document.querySelector('#convert-btn');
const result = document.querySelector('#result');

convertBtn.addEventListener('click', () => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        const dataURL = canvas.toDataURL('image/jpeg');
        img.src = dataURL;
        downloadBtn.href = dataURL;
        downloadBtn.download = 'image.jpeg';
        result.style.display = 'block';
      };
    };
    reader.readAsDataURL(input.files[0]);
  }
});
