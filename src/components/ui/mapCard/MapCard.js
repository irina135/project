const MapCard = (props) => {
  return (
    <div className="w-[84px] h-6 rounded-[20px] text-center align-bottom bg-white hover:bg-black text-sm hover:text-white font-bold leading-6 shadow-[0_8px_12px_rgba(0,0,0,0.12)]">
      &#36;{props.mapCard}
    </div>
  );
};
export default MapCard;
