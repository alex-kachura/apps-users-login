import styled from 'styled-components'

const ListItem = styled.li`
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .24);
  background-color: #ffffff;
  
  & + li {
    margin-top: .7rem;
    border-top: 1px solid #f5f5fa;
  }
  
  a {
    margin-left: 1rem;
    color: #094d89;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  .svg-inline--fa {
    color: #363639;
    
    &:hover {
    color: #161616;
    }
  }
`
export default ListItem
