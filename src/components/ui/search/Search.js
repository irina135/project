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
       <div className="hidden tablet:flex justify-between items-center  desktop:max-w-[91.6%] laptop:max-w-[94%] max-w-[89%] mx-auto mb-[120px]">
         <h4 className="m-w-[28%] desktop:text-[42px] laptop:text-4xl tablet:text-2xl font-bold text-left">{search[0].title}</h4>
         <div className="flex justify-between items-center w-[70%]">
            {newSearchItemList}
         </div>
       </div>
       )
  }
export default Search