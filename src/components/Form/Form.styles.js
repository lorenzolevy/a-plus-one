import styled from "styled-components"

export const StyledLabel = styled.label` 
    display: block;
    font-size: .8rem; 
    letter-spacing: 0.15rem;
    font-family: Source Sans Pro;
    margin-bottom: .6rem;
    font-weight: 600;
`

export const Container = styled.div`
    display: flex;
    @media (max-width: 1150px) {
       flex-direction: column; 
    }
    @media (min-width: 1150px) {
        width: 100%;
    }
    @media (min-width: 1400px) {
        border-right: solid 1px hsla(210,20%,25%,.98);
    }
`

export const FieldsContainer = styled.div`
    color: hsla(210,73%,95%,1);
    display: flex;
    width: 100%;
    flex-wrap: wrap;

`

export const HalfField = styled.div`
    @media (max-width: 610px) {
        width: 100%;
        }
    @media (min-width: 610px){
            width: 50%;
        }
    flex-grow: 0;
    flex-shrink: 0;
    padding: 1.2rem 0 0 1.2rem;
    > input,select {
        width: 100%;
        line-height: 1.8rem;
        height: 2.4rem;
        display: block;
        padding: 0 12px;
        > div {
            color: red;
        }
    }
`

export const FullField = styled.div`
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 1.2rem 0 0 1.2rem;
    > textarea {
        width: 100%;
        display: block;
        padding: 10px 12px;
    }
    > input,select {
        width: 100%;
        line-height: 1.8rem;
        height: 2.4rem;
        display: block;
        padding: 0 12px;
        > div {
            color: red;
        }
    }
`


export const PrimarySection = styled.section`
    border-bottom: solid 1px hsla(210,20%,25%,.98);
    @media (max-width: 1150px) {
        width: 100%;
    }
    @media (min-width: 1150px) {
        border-right: solid 1px hsla(210,20%,25%,.98);
        width: 65%;
    }
    display: block;
    padding: 3rem 2.6em 2rem 0;
`


export const SecondarySection = styled.section`
    @media (min-width: 1150px) {
        width: 100%;
    }
    @media (min-width: 1150px) {
        width: 35%;
    }
    display: block;
`