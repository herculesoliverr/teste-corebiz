import styled from "styled-components";

export const ContainerHeroBanner = styled.div`

.ImageBanner{
    width: 100%;
}

.ImageBannerMobile{
    display: none;
}

@media(max-width: 768px){

    .ImageBanner{
        display: none;
    }
    .ImageBannerMobile{
        width: 100%;
    }
}
`