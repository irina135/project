export default function SliderItem(props) {
    return (
        <div className="tablet:w-[213px] desktop:w-[260px] w-[140px]">
            <img className="desktop:mb-[16px] mb-2" src={props.sliderImg} alt='img'/>
            <h3 className="desktop:mb-[5px] font-semibold desktop:text-2xl laptop:text-lg text-base leading-[120%] text-{#2D2A26}">{props.title}</h3>
            <div className="flex desktop:text-lg laptop:text-base text-sm leading-[120%] text-{#2D2A26} opacity-60">
                <p className="mr-2.5">{props.count}</p>
                <p>{props.text}</p>
            </div>
        </div>
    )
}