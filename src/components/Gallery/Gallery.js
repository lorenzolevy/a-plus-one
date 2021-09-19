import React, { Component, Fragment } from "react"
import FsLightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { Grid, CardWrap, ProjectCard, CardInner } from "./Gallery.styles"

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLightbox: false,
      imageIndex: 0,
      listIndex: 0,
    }
  }
  render() {
    const { data } = this.props
    const { showLightbox, imageIndex, listIndex } = this.state
    const galsList = data?.wpcontent?.projects?.nodes?.map(node =>
      node.projectFields?.gallery?.map(url => url)
    )
    return (
      <Fragment>
        <Grid>
          {!!data && data.length > 0 && data.map((node, index) => (
            <CardWrap
              key={node.projectFields.title}
              onClick={() =>
                this.setState({
                  showLightbox: true,
                  imageIndex: index,
                  listIndex: 0,
                })
              }
            >
              <ProjectCard
                fluid={node.projectFields.image.imageFile.childImageSharp.fluid}
              >
                <CardInner>
                  <h1>{node.projectFields.title}</h1>
                  <p>{node.projectFields.description}</p>
                </CardInner>
              </ProjectCard>
            </CardWrap>
          ))}
        </Grid>
        {showLightbox && (
          <FsLightbox
            mainSrc={galsList[imageIndex][listIndex]}
            nextSrc={
              galsList[imageIndex][
                (listIndex + 1) % galsList[imageIndex].length
              ]
            }
            prevSrc={
              galsList[imageIndex][
                (listIndex + galsList[imageIndex].length - 1) %
                  galsList[imageIndex].length
              ]
            }
            onCloseRequest={() => this.setState({ showLightbox: false })}
            onMovePrevRequest={() =>
              this.setState({
                listIndex:
                  (listIndex + galsList[imageIndex].length - 1) %
                  galsList[imageIndex].length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                listIndex: (listIndex + 1) % galsList[imageIndex].length,
              })
            }
          />
        )}
      </Fragment>
    )
  }
}
