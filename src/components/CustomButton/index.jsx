import { Button } from 'antd'
import styled from 'styled-components'

export const CustomButton = styled(Button)`
background-color: ${(props) => {
        if (props.primary) return ' #8770FF'
        if (props.inactive) return 'rgba(135, 112, 255, 0.1)'
        if (props.warning) return 'rgba(228, 175, 17, 0.2)'
        return '#fff'
    }};
color: ${(props) => {
        if (props.primary) return '#fff'
        if (props.inactive) return '#fff'
        if (props.warning) return 'rgba(228, 175, 17, 0.2)'
        return '#897EFF'
    }};
padding: 12px 32px;
height: auto;
border-color: ${(props) => {
        if (props.primary) return ' #8770FF'
        if (props.inactive) return 'rgba(135, 112, 255, 0.1)'
        if (props.warning) return 'rgba(228, 175, 17, 0.2)'
        return '#897EFF'
    }};
&:hover {
    background-color: #6A61CC;
    color: #FFFFFF;
    border-color: #6A61CC;
}
`
