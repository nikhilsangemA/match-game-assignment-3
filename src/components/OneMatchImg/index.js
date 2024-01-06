import './index.css'

const OneMatchImg = props => {
  const {singleImg, passImg} = props
  const {imageUrl, thumbnailUrl, category, id} = singleImg
  const changeImg = () => {
    passImg(id, imageUrl)
  }
  return (
    <li>
      <button type="button" onClick={changeImg}>
        <img src={thumbnailUrl} className="img-size" />
      </button>
    </li>
  )
}

export default OneMatchImg
