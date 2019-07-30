import React from 'react';
import Loader from 'react-loader-spinner';

class UpdateForm extends React.Component {
  state = {
    experience: this.props.experience
  };

  //WITH CHANGING STRING TO NUMBER 
  // handleChanges = e => {
  //   let value = e.target.value;
  //   if (e.target.name === 'price') {
  //     value = parseInt(value, 10);
  //   }

  //   this.setState({
  //     experience: {
  //       ...this.state.experience,
  //       [e.target.name]: value
  //     }
  //   });
  // };

  handleChanges = e => {
    e.preventDefault()
    this.setState({
      experience: {
        ...this.state.experience,
        [e.target.name]: e.target.value
      }
    })
  }
  

  updateExperience = e => {
    this.props.editExperience(e, this.state.experience);
  };

  render() {
    console.log('SSSSSSSSSSSSSSSSS', this.state.experience.title)
    console.log('PPPPPPPPPPPPPPPPP', this.props.experience.title)
    return (
      <div className="edit-form">
        <form className="edit-form" onSubmit={this.updateExperience}>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChanges}
            value={this.state.experience.title}
          />

          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            placeholder="Date"
            onChange={this.handleChanges}
            value={this.state.experience.date}
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.handleChanges}
            value={this.state.experience.location}
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={this.handleChanges}
            value={this.state.experience.price}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.handleChanges}
            value={this.state.experience.description}
          />
          <div className="flex-spacer" />

          <button>
            {this.props.editingExperience ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Save'
            )}
          </button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
