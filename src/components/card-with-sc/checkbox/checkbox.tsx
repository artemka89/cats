import { type FC } from "react";
import CheckIcon from "./check-icon.svg";
import {
  CheckboxWrapper,
  CheckedIcon,
  HiddenCheckbox,
  IconWrapper,
  InputWrapper,
  Label,
} from "./styled";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
}) => {
  return (
    <CheckboxWrapper>
      <InputWrapper>
        <HiddenCheckbox
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        <IconWrapper checked={checked} disabled={disabled}>
          {checked && <CheckedIcon as={CheckIcon} />}
        </IconWrapper>
      </InputWrapper>
      {label && <Label disabled={disabled}>{label}</Label>}
    </CheckboxWrapper>
  );
};
