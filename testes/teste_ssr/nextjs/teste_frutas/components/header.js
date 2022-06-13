import styled from 'styled-components'

export default function Header() {

  const Header = styled.div`
    margin: 0;
    background-color: #CC5500;
    color: white;
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100%;
  `

  return (
    <div>
      <Header>
        <h1>Site Teste</h1>
      </Header>
    </div>
  )
}