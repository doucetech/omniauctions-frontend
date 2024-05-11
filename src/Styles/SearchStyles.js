import styled from 'styled-components'

export const SearchTrigger = styled.a`
    position: relative;
    display: block;
    width: 111px;
    height: 74px;
    overflow: hidden;
    white-space: nowrap;
    color: transparent;
    z-index: 10;
    top: -34px !important;
    background: transparent;
    right: -33px;
    margin-bottom: -51px;

    &::before,
    &::after {
        content: '';
        position: absolute;
        transition: opacity 0.3s;
        transform: translateZ(0);
        backface-visibility: hidden;
    }
    &::before {
        top: 30px;
        left: 23px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: 3px solid transparent;
        font-family: 'omni';
        content: '\uE805';
        color: var(--the-black);
        text-indent: 31px;
        font-size: 1.4em;
    }

    &::after {
        height: 15px;
        width: 3px;
        bottom: 20px;
        right: 159px;
        transform: rotate(-40deg);
    }

    span {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 13px;
        left: 13px;
    }

    span::before,
    span::after {
        content: '';
        position: absolute;
        display: inline-block;
        height: 3px;
        width: 35px;
        top: 50%;
        margin-top: -2px;
        left: 45%;
        margin-left: -11px;
        background: var(--the-black);
        opacity: 0;
        transform: translateZ(0);
        backface-visibility: hidden;
        transition: opacity 0.3s, transform 0.3s;
    }

    span::before {
        transform: rotate(45deg);
    }

    span::after {
        transform: rotate(-45deg);
    }

    &.search-is-visible::before,
    &.search-is-visible::after {
        opacity: 0;
    }

    &.search-is-visible span::before,
    &.search-is-visible span::after {
        opacity: 1;
    }

    &.search-is-visible span::before {
        transform: rotate(135deg);
    }

    &.search-is-visible span::after {
        transform: rotate(45deg);
    }
`

export const SearchInput = styled.input`
    padding: 20px;
    margin: 49px -3px;
    border: 1px solid var(--the-black);
    position: absolute;
    top: 96px;
    border-radius: 0 0 0px 0px;
    width: 100%;
    left: 3px;
    z-index: 9;
`
