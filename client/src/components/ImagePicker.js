import ImagePicker from 'react-native-image-crop-picker';

const handleOpenCamera = async setState => {
  try {
    const response = await ImagePicker.openCamera({
      mediaType: 'photo',
      cropping: true,
    });
    setState(response);
  } catch (err) {
    console.log(err);
  }
};
const handleOpenExplorer = async setState => {
  try {
    const response = await ImagePicker.openPicker({
      mediaType: 'photo',
      cropping: true,
    });
    setState(response);
  } catch (err) {
    console.log(err);
  }
};
const handleCleanFilePicker = async setState => {
  try {
    const response = await ImagePicker.clean();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export {handleOpenCamera, handleOpenExplorer, handleCleanFilePicker};
