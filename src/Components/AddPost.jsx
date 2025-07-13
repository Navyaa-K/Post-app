import React from 'react'
import { Nav } from './Nav'

export const AddPost = () => {
  return (
    <div
    style={{
        backgroundImage: 'url("https://i.ytimg.com/vi/Dxqjd3iR8lM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZVxkbuA_LCF2dgiFbn2R5SlnMPg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
        <Nav />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>UserId</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Id</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label"><b>Title</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 xl-6 col-xxl-6">
                           <label htmlFor="" className="form-label"><b>body</b></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
