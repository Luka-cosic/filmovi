import React from 'react'


const Modal = ({currentMovie}) => {
    
    
    return (
        <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
    <h3 className="modal-title" id="exampleModalLongTitle">{currentMovie.Title}</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <h5>Plot</h5>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <p>{currentMovie.Plot}</p>
                            </div>
                        </div>

                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <h5>Actors:</h5>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-12 text-center">
                                <p>{currentMovie.Actors}</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-6 offset-3">
                                <h5>Year: {currentMovie.Year}</h5>
                            </div>
                        </div>


                     </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
