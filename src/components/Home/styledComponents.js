import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding-left: 5%;
`
export const Select = styled.select`
  width: 300px;
  border: 1px solid #cbd5e1;
  outline: none;
  height: 40px;
  border-radius: 5px;
  margin: 20px 0;
  padding-left: 10px;
  @media screen and (max-width: 567px) {
    width: 80%;
  }
`
export const Option = styled.option``
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProjectsContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`

export const FailureImage = styled.img`
  width: 450px;
  @media screen and (max-width: 567px) {
    width: 300px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: #475569;
  font-size: 30px;
  font-weight: bold;
  @media screen and (max-width: 567px) {
    font-size: 20px;
  }
`

export const FailureText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #64748b;
  font-weight: 500;
  text-align: center;
`

export const FailureButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
`
