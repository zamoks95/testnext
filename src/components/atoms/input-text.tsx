import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputLabel = styled.label`
  padding-bottom: 10px;
`;
const InputLabelRequired = styled.span`
  color: red;
`;
const InputField = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 50px;
  height: 50px;
  width: 510px;
  padding: 0 2rem;
  box-shadow: none;
  transition: ${({ theme }) => theme.transitions.medium};

  &:focus,
  &.active {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.light};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const InputText = (props: any) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={props.name}>
        {props.placeholder}
        {props.required && <InputLabelRequired>*</InputLabelRequired>}
      </InputLabel>
      <InputField name={props.name} value={props.value} type="text" onChange={e => props.handler(e.target.value)}/>
    </InputWrapper>
  );
};

export default InputText;
