import React from 'react'
import styled from 'styled-components'
import Box from '../Box'
import Align from '../Align'
import Button from '../Button'
import FontAwesome from 'react-fontawesome'

const PokerLocation = styled.div`
  margin-top: 1em;
`

const Trash = ({ className, children }) => (
  <FontAwesome className={className} name="trash"/>
)

const Edit = ({ className, children }) => (
  <FontAwesome className={className} name="edit" />
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

export default props => (
  <PokerLocation>
    <Box>
      <div className="container">
        <div className="grid">
          <div className="grid__col grid__col--9-of-12">
            {props.name}
          </div>
          <div className="grid__col grid__col--3-of-12">
            <Align to="right">
              {/* <DeleteButton /> */}
              <Button bgColor="#e74c3c"><DeleteButton /></Button>
              <Button bgColor="#3498db"><EditButton /></Button>
            </Align>
          </div>
        </div>
      </div>


    </Box>
  </PokerLocation>
)
