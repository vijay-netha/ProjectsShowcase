import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import ProjectCard from '../ProjectCard'

import {
  HomeContainer,
  Select,
  Option,
  LoaderContainer,
  ProjectsContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    type: categoriesList[0].id,
    projects: [],
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {type} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${type}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const upDatedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        projects: upDatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  changePro = event => {
    this.setState({type: event.target.value}, this.getProjects)
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  renderProjectsView = () => {
    const {projects} = this.state
    return (
      <ProjectsContainer>
        {projects.map(each => (
          <ProjectCard key={each.id} card={each} />
        ))}
      </ProjectsContainer>
    )
  }

  onClickRetry = () => {
    this.getProjects()
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We cannot seem to find the page you are looking for.
      </FailureText>
      <FailureButton type="button" onClick={this.onClickRetry}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  renderAll = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderProjectsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <Select onChange={this.changePro}>
            {categoriesList.map(each => (
              <Option value={each.id} key={each.id}>
                {each.displayText}
              </Option>
            ))}
          </Select>
          {this.renderAll()}
        </HomeContainer>
      </>
    )
  }
}
export default Home
