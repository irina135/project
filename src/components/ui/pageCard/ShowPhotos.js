const ShowPhotos = (props) => {
  return (
    <button className="flex justify-between items-center tablet w-[183px] h-[45px] pl-6 pr-6 bg-white rounded-[30px] text-center leading-[50%]">
      <p className="leading-4">{props.showPhotosText}</p>
      <img className="h-[13px]" src={props.showPhotosImg} alt="Img" />
    </button>
  );
};
export default ShowPhotos;
