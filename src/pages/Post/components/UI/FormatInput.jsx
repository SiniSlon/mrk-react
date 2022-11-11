import styled from "styled-components"

const FormatInput = (props) => {

  return (
    <Wrapper>
      <input id={props.id} type='checkbox' checked={props.checked} onChange={() => props.onChange(props.props)}/>
      <label htmlFor={props.id}>{props.label}</label>
    </Wrapper>
  )
}

export default FormatInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
