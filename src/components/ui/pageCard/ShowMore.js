function ShowMore(props) {
  return (
    <button className="flex items-center desktop:text-2xl text-lg font-semibold desktop:tracking-wide color-[#2D2A26] underline">
      {props.textBtn}
      <img className="mt-[5px] ml-2.5" src={props.arrow} alt="img" />
    </button>
  );
}
export default ShowMore;
