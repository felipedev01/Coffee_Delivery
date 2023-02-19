import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: beige;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  img:nth-child(1) {
    height: 2.5rem;
    width: 5.3rem;
  }
`
export const Actions = styled.span`
  height: 2.5rem;
  img:nth-child(1) {
    height: 2.375rem;
    width: 8.9375rem;
  }
  img:nth-child(2) {
    height: 2.375rem;
    width: 2.375rem;
    margin-left: 0.75rem;
  }
`
