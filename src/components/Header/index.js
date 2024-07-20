import {HeaderContainer, HeaderImage} from './styledComponents'

const Headerlogo =
  'https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png'

const Header = () => (
  <HeaderContainer>
    <HeaderImage src={Headerlogo} alt="website logo" />
  </HeaderContainer>
)
export default Header
