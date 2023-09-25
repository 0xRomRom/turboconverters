const DownloadFile = (props, { files }) => {
  files.forEach((file) => {
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = (event) => {
      // Do whatever you want with the file contents
      const binaryStr = event.target.result;
      console.log(binaryStr);
      handleImageConversion(file);
    };
    reader.readAsArrayBuffer(file);
  });

  const handleImageConversion = (input) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    console.log(input.name.split(".")[0]);
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = input.name.split(".")[0];
        a.click();
        URL.revokeObjectURL(url);
      }, props.fileType);
    };

    img.src = URL.createObjectURL(input);
  };
  return null;
};

export default DownloadFile;
