import  React from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {Col,Row, Conteiner} from 'react-bootstrap';
import './styleModal.scss';

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

    componentDidMount() {
        Modal.setAppElement('body');
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }
render(){

    const home =this.props.homes.houses.filter((el)=>{return el.name == this.props.house});
    const peoples =home[0].people;
    const people =peoples.filter((el)=>{return el.name == this.props.name});
    console.log(people);
    return(

        <div >
            <h2 onDoubleClick={this.openModal}>{this.props.name}</h2>

            <Modal
                isOpen={this.state.modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                // style={customStyles}
                contentLabel="Example Modal"


            >
                <Row>
                    <Col md={6}>
                        <p className='test'>{this.props.name}</p>
                        <p>{this.props.description}</p>
                    </Col>
                    <Col md={6}>
                        <div>I am a modal</div>
                    </Col>
                </Row>

                <button onClick={this.closeModal}>close</button>


            </Modal>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
        homes: state
    };
};
export default connect(mapStateToProps)(People);