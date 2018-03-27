import React from "react"
import { Redirect } from 'react-router'
import Input from '../Input'
import Button from '../Button'
import FormField from '../FormField'
import Form from '../Form'
import ComboBox '../ComboBox'

class SetPref extends React.Component {
      
    <div>
		
		<Form method="post" action="/register">

        	<FormField>
        		<Input type="ComboBox" placeholder="Theme"/>
        	</FormField>

        	<FormField>
        		<Input type="ComboBox" placeholder="Currency"/>
        	</FormField>
				
			<FormField>
        		<Input type="ComboBox" placeholder="Prefered Poker Game"/>
        	</FormField>
				
			<FormField>
        		<Input type="ComboBox" placeholder="Prefered Game Type"/>
        	</FormField>

        	<Button type="submit" fullWidth>Update</Button>

        </Form>

    </div>
}


