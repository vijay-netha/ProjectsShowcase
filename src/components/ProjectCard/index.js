import {ProjectItem, Image, Name} from './styledComponents'

const ProjectCard = props => {
  const {card} = props
  const {name, imageUrl} = card
  return (
    <ProjectItem>
      <Image src={imageUrl} alt={name} />
      <Name>{name}</Name>
    </ProjectItem>
  )
}
export default ProjectCard
