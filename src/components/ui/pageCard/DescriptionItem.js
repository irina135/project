import {pageCard} from '../../../mocks/pageCard/data.base.pageCard'

function DescriptionItem(props){
    return (
        <div className="laptop:w-[100%] tablet:w-[100%] laptop:h-[31%] tablet:h-[31%] border-{#2D2A26} border rounded-3xl pt-[27px] pl-[23px]">
            <img className="laptop:w-6 w-[18px] mb-[44px]" src={props.descriptionImg} alt="img"/>
            <p className="desktop:text-lg text-base">{props.count}&ensp;{props.descriptionText}</p>       
        </div>
    )

}
export default DescriptionItem