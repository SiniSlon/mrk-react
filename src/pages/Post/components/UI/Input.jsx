import styled from "styled-components"

const Input = (props) => {

  return (
    <Wrapper>
      <input id={props.id} placeholder={props.placeholder} value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
    </Wrapper>
  )
}

export default Input;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    outline: none;
  }
`;
