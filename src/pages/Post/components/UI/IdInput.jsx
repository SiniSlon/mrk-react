import styled from "styled-components"

const IdInput = (props) => {

  return (
    <Wrapper>
      <label>
        {props.title} 
      </label>
      <input value={props.value} onChange={(e) => props.onChange(e.target.value)} 
      placeholder="Значение"/>
    </Wrapper>
  )
}

export default IdInput;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    outline: none;
    width: 160px;
  }
`;
