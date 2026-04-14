// import styled from "styled-components"
import { SectionHead } from "../../../components/sectionHead/SectionHead"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"

export function Stack(){
    return(
        <section>
            <SectionHead title="My Tech Stack" description="Technologies I’ve been working with recently"/>
            <FlexWrapper gap="95px 95px" justify="space-between" align="center" wrap="wrap">
                {
                    [...Array(12)].map((_,index)=><Icon key={index} iconId={`st${index+1}Svg`}width="120" height="120"/>)
                }
                {/* <Icon iconId="st1Svg" width="120" height="120"/>
                <Icon iconId="st2Svg" width="120" height="120"/>
                <Icon iconId="st3Svg" width="120" height="120"/>
                <Icon iconId="st4Svg" width="120" height="120"/>
                <Icon iconId="st5Svg" width="120" height="120"/>
                <Icon iconId="st6Svg" width="120" height="120"/>
                <Icon iconId="st7Svg" width="120" height="120"/>
                <Icon iconId="st8Svg" width="120" height="120"/>
                <Icon iconId="st9Svg" width="120" height="120"/>
                <Icon iconId="st10Svg" width="120" height="120"/>
                <Icon iconId="st11Svg" width="120" height="120"/>
                <Icon iconId="st12Svg" width="120" height="120"/> */}
            </FlexWrapper>
        </section>
    )
}
// const styledStack = styled.section`
    
// `