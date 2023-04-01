import SearchItem from "./SearchItem"
import search from '../../../mocks/search/data.base.search'

function Search(props) {
   const searchItemList = search
   const newSearchItemList = searchItemList.map((number) =>
   <SearchItem key={number}
   searchItemTitle={number.itemTitle}
   searchImg={number.searchItemImg}

   />
   )
 
    return (
       <div className="hidden tablet:flex justify-between items-center  desktop:w-[91.6%] desktop:max-w-[1760px] laptop:max-w-[94%] max-w-[89%] mx-auto desktop:mb-[120px] tablet:mb-[90px]">
         <h4 className="m-w-[28%] desktop:text-[42px] laptop:text-4xl tablet:text-2xl font-bold text-left tracking-wide">{search[0].title}</h4>
         <div className="flex justify-between items-center desktop:w-[70%] laptop:w-[66.5%]">
            {newSearchItemList}
         </div>
       </div>
       )
  }
export default Search