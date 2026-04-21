import { Icon } from "../icon/Icon";
type LogoProps = {
    iconId: string
}
export function Logo(props:LogoProps) {
    return (
        <a href="#">
            <Icon width="97" height="60" iconId={props.iconId}/>
        </a>
    )
}