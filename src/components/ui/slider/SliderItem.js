export default function SliderItem(props) {
    return (
        <div className="laptop:w-[213px] desktop:w-[260px]">
            <img className="desktop:mb-[16px] laptop:mb-2" src={props.sliderImg} alt='img'/>
            <h3 className="desktop:mb-[5px] font-semibold desktop:text-2xl laptop:text-lg leading-[120%] text-{#2D2A26}">{props.title}</h3>
            <div className="flex desktop:text-lg laptop:text-base leading-[120%] text-{#2D2A26} opacity-60">
                <p className="mr-2.5">{props.count}</p>
                <p>{props.text}</p>
            </div>
        </div>
    )
}