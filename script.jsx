import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
	
	getUser(){

		// Clearing the git users div
		document.getElementById("git_users").innerHTML = "";

		//fetching the changed value of input box
		const name = document.getElementById("name").value;
		
		//making request to API
		fetch('http://api.github.com/search/users?q='+name)
		.then(response => response.json())
		.then(response=>{

			var git_items = response.items;
			var len = response.total_count;
			
			for (var i = 0; i < len; i++) {

				//creating the elements dynamically
			    var pele = document.createElement("p");
			    console.log(git_items[i].login);
	 		    
			    var iele = document.createElement("img");
			    iele.src = git_items[i].avatar_url;
			    iele.width = 30;
			    iele.height = 30;
			    pele.appendChild(iele);

			    var aele = document.createElement("a");
			    aele.href = git_items[i].html_url;
			    aele.innerHTML = "   "+git_items[i].login;
			    aele.target = '_blank';
			    pele.appendChild(aele);			    

    			document.getElementById("git_users").appendChild(pele);

			}
		})	
	}

	render(){
		return (
			<input type='text' onChange={this.getUser} ref='name' id='name'/>
		);
	}
}

ReactDOM.render(<MyComponent/>, document.getElementById('content'));