import React from "react"
import SectionTitle from "../../shared/SectionTitle"
import PageSection from "../../shared/PageSection"
import AddSessionForm from "../../shared/AddSessionForm"

const AddSession = props => (
  <div>
    <PageSection>
      <SectionTitle title="Create a Session"/>

      <AddSessionForm user={props.user}/>

    </PageSection>
  </div>
)

export default AddSession
