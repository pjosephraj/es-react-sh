import {useState} from "react";
import Avatar from "react-avatar-edit";

const ImageModal = ({closeModal, onPhotoAdded}) => {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  }

  const onCrop = (pv) => {
    setPreview(pv);
  }

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 2000000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  return (
    <div>
      <div className="modal-container-wrap">
        <div className="modal-container">
          <div className="modal-avatar">
            <Avatar
              width={600}
              height={300}
              onCrop={onCrop}
              // onClose={onClose}
              onBeforeFileLoad={onBeforeFileLoad}
              src={null}
            />
          </div>
          <br/>
          {preview && (
            <div className="modal-img">
              <img src={preview} alt="Preview"/>
            </div>
          )}
        </div>
        <div className="btn-wrap btn-wrap-submit">
          <button onClick={closeModal} className="btn btn-cancel">Cancel</button>
          <button disabled={!preview} onClick={() => onPhotoAdded(preview)}
                  type="button" className="btn btn-submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
