import  React from 'react';
import Modal from 'react-modal';
class People extends React.Component{

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }
render(){

    return(
        <div>
            <h2 onDoubleClick={this.openModal}>{this.props.people.name}</h2>

            <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >

                <p>{this.props.people.description}</p>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>

            </Modal>
        </div>
    )
}
}
export default People;