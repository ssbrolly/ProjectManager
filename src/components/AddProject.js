import React, { Component } from 'react';

class AddProjects extends Component {
  render() {
    return (
      <div>
        <h3>AddProjects</h3>
          <form>
            <div>
              <label>Title</label>
              <br/>
              <input type="text" ref="text" />
            </div>
            <div>
              <label>Categroy</label>
              <br/>
              <input type="text" ref="text" />
            </div>
          </form>
      </div>
    );
  }
}

export default AddProjects;
