function SearchItem(props) {
 
    return (
       <div className="flex justify-between items-center  max-w-[33%] mx-auto">
            <button className="h-[100px] w-[100px] rounded-3xl text-center mr-[5%]">
                <img src={props.searchImg} alt='img'/>
            </button>
            <h5 className="desktop:text-3xl laptop:text-2xl text-left text-[#2D2A26] w-[200px]">{props.searchItemTitle}</h5>
       </div>
       )
  }
export default SearchItem