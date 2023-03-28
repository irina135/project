export default function SliderItem(props) {
    return (
        <div className="w-[260px]">
            <img className="mb-[16px]" src={props.sliderImg} alt='img'/>
            <p className="mb-[5px] font-semibold text-base leading-[120%] text-{#2D2A26}">{props.title}</p>
            <div className="flex text-lg leading-[120%] text-{#2D2A26} opacity-60">
                <p>{props.count}</p>
                <p>{props.text}</p>
            </div>
        </div>
    )
}