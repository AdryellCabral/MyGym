import styled from "styled-components"

export const ToastContainer = styled.div`

@keyframes rotate {
    from { 
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
}

    #icon {
        animation: rotate 1s infinite;
    }
`