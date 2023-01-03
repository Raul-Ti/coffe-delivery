import styled from "styled-components";

interface TitleTextProps{
    size?: "xl" | "l" | "m" | "s" | "xs";
    weight?: string | number;
    color?: "title" | "subtitle" | "text";
}

interface RegularTextProps{
    size?: "l" | "m" | "s" ;
    weight?: string | number;
    color?: "text" | "subtitle" | "label";
}

export const TitleText = styled.h1<TitleTextProps>`
    color: ${(props) => props.theme.colors[`base-${props.color?? "title"}`]};
    font-size: ${(props) => props.theme.textSizes[`title-title-${props.size?? "m"}`]};
    font-family: ${(props) => props.theme.fonts.title};
    line-height: 130%;
    font-weight: ${(props) => props.weight ?? 800}
`

export const RegularText = styled.p<RegularTextProps>`
    color: ${(props) => props.theme.colors[`base-${props.color?? "title"}`]};
    font-size: ${(props) => props.theme.textSizes[`text-regular-${props.size?? "m"}`]};
    font-family: ${(props) => props.theme.fonts.regular};
    line-height: 130%;
    font-weight: ${(props) => props.weight ?? 400}
`
