import React, {Component} from "react";
import './styles.scss';
import PropTypes from 'prop-types';
import imageMovie from './image-1.jpg';
import Popup from "../Popup/Popup";

class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            isOpenDeletePopup: false
        }
    }
    toggleOpenDeletePopup = () => {
        this.setState({
            isOpenDeletePopup: !this.state.isOpenDeletePopup
        })
    }
    render() {
        return (
            <>
                <div className='movie-item'>
                    <div className='item-image'>
                        <img src={imageMovie} alt=""/>
                    </div>
                    <div className='item-text'>
                        <div className='item-info'>
                            <div className='item-title'>
                                {this.props.title}
                            </div>
                            <div className='item-description'>
                                {this.props.description}
                            </div>
                        </div>
                        <div className='item-year'>
                            {this.props.year}
                        </div>
                    </div>
                    <div className='item-actions'>
                        <ul>
                            <li>Edit</li>
                            <li onClick={this.toggleOpenDeletePopup}>Delete</li>
                        </ul>
                    </div>
                </div>
                <Popup extraClass='small' isOpen={this.state.isOpenDeletePopup} toggleOpen={this.toggleOpenDeletePopup}>
                    <>
                        <div className='popup-title'>Delete MOVIE</div>
                        <form action="">
                            <p>Are you sure you want to delete this movie?</p>
                            <div className='toolbar-actions'>
                                <button className='button-primary'>confirm</button>
                            </div>
                        </form>
                    </>
                </Popup>
            </>
        )
    }
}

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    year: PropTypes.string
}

export default MovieItem;