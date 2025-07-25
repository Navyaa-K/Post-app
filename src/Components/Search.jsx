import React from 'react'
import { Nav } from './Nav'

export const Search = () => {
  return (
    <div
     style={{
        backgroundImage: 'url("https://clubartizen.com/wp-content/uploads/2024/08/PI-UFA-Postcards4-scaled.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    
    >
        <Nav />
        <div className="container-fluid">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
