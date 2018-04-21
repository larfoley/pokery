import React from 'react'
import styled from 'styled-components'
import Box from '../../Box'
import Align from '../../Align'
import Button from '../../Button'
import Input from '../../Input'
import FontAwesome from 'react-fontawesome'



const Wrapper = styled.div`
  margin-top: 1em;
`

const Trash = ({ className, children }) => (
  <FontAwesome className={className} name="trash"/>
)

const Edit = ({ className, children }) => (
  <FontAwesome className={className} name="edit" />
)

const Close = ({ className, children }) => (
  <FontAwesome className={className} name="times" />
)

const DeleteButton = styled(Trash)`
  color: #e74c3c;
  color: white;
  vertical-align: top;
`
const EditButton = styled(Edit)`
  color: #3498db;
  color: white;
  vertical-align: top;
`

const CloseButton = styled(Close)`
  color: black;
  color: white;
  vertical-align: top;
`

class PokerLocation extends React.Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.onDeleteLocation = this.onDeleteLocation.bind(this);

    this.state = {
      editMode: false,
      name: props.name,
      value: props.name,
      id: props.id
    }
  }

  onInputChange(event) {
    this.setState({value: event.target.value})
  }

  onSaveEdit() {
    var newName = this.state.value;
    var validationErrors = [];

    if (newName !== this.state.name) {

      if (newName.trim() === "") {
      }
      if (newName.trim().length >  40) {
        validationErrors.push("Poker Location must be less that 40 characters.")
      }
      if (validationErrors.length > 0) {
        return validationErrors.forEach(error => window.alert(error))
      }

      this.props.editLivePokerLocation(this.props.id, newName, (err, location) => {
        if (!err) {
          this.setState({editMode: false})
          window.alert("Poker Location Updated")
        } else {
          window.alert("There was an error")
          console.log(err);
        }
      });
    }

  }

  onDeleteLocation() {
    this.props.deleteLivePokerLocation(this.state.id, this.state.name, (err, successful) => {
      if (!err) {
        window.alert("Location deleted")
      } else {
        window.alert("there was an error deleting location")
        console.log(err);
      }
    })
  }

  toggleEditMode() {
    this.setState(prevState => {
      prevState.editMode = !prevState.editMode
      return prevState
    })
  }

  render () {
    return (
      <Wrapper>
        <Box>
          <div className="container">
            <div className="grid">
              <div className="grid__col grid__col--9-of-12">
                {this.state.editMode ?
                  <Input
                    onChange={this.onInputChange}
                    autoFocus
                    value={this.state.value}/> :
                  this.props.name
                }


              </div>

              <div className="grid__col grid__col--3-of-12">
                {!this.state.editMode?

                  <Align to="right">
                    <Button bgColor="#e74c3c" onClick={this.onDeleteLocation}>
                      <DeleteButton />
                    </Button>
                    <Button bgColor="#3498db" onClick={this.toggleEditMode.bind(this)}>
                      <EditButton />
                    </Button>
                  </Align> :

                  <Align to="right">
                    <Button bgColor="black" onClick={this.toggleEditMode.bind(this)}>
                      <CloseButton />
                    </Button>
                  </Align>

                }

              </div>
            </div>
          </div>
          {this.state.editMode?
            <div>
              <Button onClick={this.onSaveEdit}>Save Edit</Button>
            </div>: null}

        </Box>
      </Wrapper>
    )
  }
}

export default PokerLocation
