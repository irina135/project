function DetailItem (props) {
    return (
        <div className="flex desktop:mb-[27px] tablet:mb-[31px] mb-[28px] desktop:w-[340px] tablet:w-[250px] w-[300px]">
            <img className="desktop:mr-6 mr-5" src={props.detailsImg} alt='img'/>
            <p className="desktop:text-lg">{props.detailsText}</p>
        </div>
    )
}
export default DetailItem