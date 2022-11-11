import styled from "styled-components"

const CheckboxInput = (props) => {

  return (
    <Wrapper>
      <input id={props.id} type='checkbox' checked={props.checked} onChange={() => props.onChange(s => !s)}/>
      <label htmlFor={props.id}>{props.label}</label>
    </Wrapper>
  )
}

export default CheckboxInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
