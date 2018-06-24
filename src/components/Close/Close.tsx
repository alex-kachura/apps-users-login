import styled from 'styled-components'

const Close = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  padding: .9rem;
  line-height: 1;
  cursor: pointer;
  
  .svg-inline--fa {
    color: #363639;
    
    &:hover {
    color: #161616;
    }
  }
`

export default Close
