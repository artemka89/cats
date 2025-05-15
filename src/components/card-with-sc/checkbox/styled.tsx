import styled, { css } from "styled-components";


export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;


export const InputWrapper = styled.div`
  position: relative;
`;


export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;


interface IconWrapperProps {
  checked?: boolean;
  disabled?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.2s;

  ${({ checked }) =>
    checked &&
    css`
      background-color: #0077ff;
      border-color: #0077ff;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ccc;
      border-color: #ccc;
      cursor: not-allowed;
    `}
`;

export const CheckedIcon = styled.div`
  width: 20px;
  height: 20px;
  color: #fff;
`;

interface LabelProps {
  disabled?: boolean;
}

export const Label = styled.span<LabelProps>`
  margin-left: 10px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #ccc;
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
