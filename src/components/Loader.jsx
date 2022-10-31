import styled from "styled-components";

const Loader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 200px auto;
    
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #000000;
    border-color: #000000 transparent #000000 transparent;
    animation: lds-dual-ring 5s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
