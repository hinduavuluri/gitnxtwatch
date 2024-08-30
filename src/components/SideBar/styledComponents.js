import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  height: 92%;
  width: 300px;
  position: fixed;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const NavOptions = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
  margin-top: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${props => props.bgColor};
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  color: ${props => props.color};
  margin-left: 10px;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BottomHead = styled.h1`
  font-family: 'Roboto';
  font-size: 29px;
  font-weight: bold;
  color: ${props => props.color};
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`
export const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const BottomDesc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color}
  flex-wrap: wrap;
`
