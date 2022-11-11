import styled from "styled-components"
import ClearIcon from '@mui/icons-material/Clear';

const InputCross = (props) => {

  return (
    <Wrapper>
      <input id={props.id} placeholder={props.placeholder} value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
      {props.value && <ClearIcon onClick={() =>  props.onChange('')} style={{cursor: 'pointer'}}/>}
    </Wrapper>
  )
}

export default InputCross;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    outline: none;
  }
`;
