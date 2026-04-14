import iconsSprite from '../../assets/images/code-svg.svg';
type IconProps = {
    iconId:string,
    width?:string,
    height?:string,
    viewBox?:string
}
export function Icon(props:IconProps){
    return(
        <svg width={props.width || '30'} height={props.height || '30'} viewBox={props.viewBox||`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}
