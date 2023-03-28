export default function SliderItem(props) {
    return (
        <div className="widthSliderItem">
            <img src={props.sliderImg} alt='img'/>
            <p>{props.title}</p>
        </div>
    )
}