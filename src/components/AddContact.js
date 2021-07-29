import React from 'react'




class AddContact extends React.Component{
    state={
        name:'',
        email:'',
    }

    add =(e)=>{
        e.preventDefault();
        if (this.state.name===''|| this.state.email===''){
            alert ('All fields are mandatory')
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({name:'',email:''});
    }

    

    render(){
        return(
        <div className='ui main'>
            <h2>Add Contact</h2>
                <form className='ui form'onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text"  
                        name = 'name' 
                        placeholder = 'Name' 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className='field'>
                        <label>E-mail</label>
                        <input type="text"  
                        name = 'name' 
                        placeholder = 'E-mail'
                        value={this.state.email}
                        onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>
                <button className = 'ui button blue'>Add Contact</button>
            </form>
        </div>
     )
    }
}

export default AddContact