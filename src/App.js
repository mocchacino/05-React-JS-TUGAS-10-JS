import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
  Grid,
  Container,
  Button,
  Divider,
  Flag,
  Header,
  Image,
  Icon,
  Input,
  Label,
  GridColumn,
} from 'semantic-ui-react'

class App extends Component{
  render(){
    return(
      <Grid columns='equal'>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={1}>
            <Container textAlign='center'>
              <Flag name='id'/>
            </Container>
          </Grid.Column>
          <Grid.Column width={1}>
            <Container textAlign='center'>
              <Icon name="angle left" size='large'/>
            </Container>
          </Grid.Column>
          <Grid.Column width={1}>
            <Container textAlign='center'>
              <Icon name="angle right" size='large'/>
            </Container>
          </Grid.Column>

          <Grid.Column>
            <Container textAlign='center'>
              <Input type="text" placeholder="search" icon={<Icon name="star"/>} style={{width: "100%"}}/>
            </Container>
          </Grid.Column>

          <Grid.Column width={3}>
            <Container textAlign='center'>
              <Header>
                <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" avatar/>
                <span>Wiladhianty</span>
              </Header>
            </Container>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>

        <Divider horizontal> SELAMAT DATANG !!! </Divider>
        <Grid.Row>

        </Grid.Row>
          <Container textAlign='right'>
            <Label color='teal' tag>
              SPORT
            </Label>
          </Container>
        <Grid.Row>
          
        </Grid.Row>

        <Grid.Row>
          <Container textAlign='center'>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
            <Button content='Tambah Tautan ke List' icon='plus' labelPosition='left' color='teal'/>
          </Container>
        </Grid.Row>

        
      </Grid>
    )
  }
}

export default App;
