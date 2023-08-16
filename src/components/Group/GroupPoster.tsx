import styles from "./Group.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import noimage from "../../../public/noimage.png"
import PhotoSvg from '../MyFeed/PhotoSvg';
import { useState } from "react";
import { postInGroup } from "../../features/groupPostSlice";

function GroupPoster() {
  
  const filterGroup = useSelector((state) => state.group.oneGroup);
  const groupId = filterGroup._id;  
  const dispatch = useDispatch();
  const [text, setText] =useState("")
  const [image, setImage] = useState("")

  const  handleChange = (e) => {
    setText(e.target.value);
  }
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postInGroup({groupId, text, image}));
    setText("")
  }
  const handleChangeFile = (e) => {
    setImage(e.target.files)
  }
  console.log(image);
  

  return (
    <form 
    onSubmit={handleClick}
     className={styles.post}>
<div>
<img src={filterGroup.image ? `http://localhost:4000/${filterGroup.image}` : noimage} alt=""/>



  <input
    value={text}
    onChange={handleChange}
    type="text"
    placeholder="Что у вас нового?"
  />
  </div>
  <div>
    <input className={styles.inputM} id="file" 
    onChange={handleChangeFile} 
    type="file" multiple />
    <label className={styles.label} htmlFor="file">
      <PhotoSvg />
    </label>
  </div>
</form>
  )
}

export default GroupPoster;

{/* <div className={styles.postCreate}>
            <form>
              <input type="text" placeholder="Что у вас нового?" />
              <label htmlFor="file">
                <PhotoSvg />
              </label>
            </form>
          </div> */}