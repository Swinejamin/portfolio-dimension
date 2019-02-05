import styled from 'styled-components'
const gutter = 30
export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const StyledFormField = styled.div`
  flex-shrink: 0;
  width: 100%;
  margin: 0 0 ${gutter}px 0;

  &.half {
    width: 50%;
    float: left;
    padding: 0 0 0 ${gutter * 1 * 0.5}px;

    &.first {
      padding: 0 ${gutter * 1 * 0.5}px 0 0;
    }
  }

  @include breakpoint(small) {
    margin: 0 0 ${gutter * 0.75} 0;

    &.half {
      padding: 0 0 0 ${gutter * 0.75 * 0.5}px;
      width: 100%;
      &.first {
        padding: 0 ${gutter * 0.75 * 0.5}px 0 0;
      }
    }
  }
  input,
  textarea {
    font-size: 1.6rem;
    padding: 15px;
    background: transparent;
    border-radius: 8px;
    border: solid 1px white;
    color: inherit;
    display: block;
    outline: 0;
    text-decoration: none;
    width: 100%;

    &:invalid {
      box-shadow: none;
    }

    &:focus {
      background: rgba(255, 255, 255, 0.075);
      box-shadow: 0 0 0 3px white;
    }
  }
`

export const StyledLabel = styled.label`
  color: white;
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  line-height: 1.5;
  margin: 0 0 ${gutter * 0.25}px 0;
  text-transform: uppercase;
`
export const StyledButtonList = styled.ul`
  margin-top: 15px;
  button {
    padding: 15px 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    color: white;
    cursor: pointer;
    font-size: 1.8rem;
    text-transform: uppercase;
    &.special {
      background-color: rgba(255, 255, 255, 0.5);
      color: #333;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
      &.special {
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }
`
export const StyledIconList = styled.ul`
  cursor: default;
  list-style: none;
  padding-left: 0;

  li {
    display: inline-block;
    padding: 0 0.75em 0 0;

    &:last-child {
      padding-right: 0;
    }

    a {
      border-radius: 100%;
      box-shadow: inset 0 0 0 2px white;
      height: 40px;
      width: 40px;
      text-align: center;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: color 0.3s ease, background-color 0.3s ease,
        border-color 0.3s ease;
      border: 1px solid white;
      &:hover {
        background-color: white;
        color: #333;
      }

      &:active {
        background-color: #eaeaea;
        color: #333;
      }
    }
    span {
      opacity: 0;
      height: 0;
      width: 0;
      position: absolute;
    }
  }
`
