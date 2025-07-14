import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

export const ViewAll = () => {
    const [data, changeData] = useState(
        [
           
        ]
    )
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{changeData(response.data)}
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div
         style={{
        backgroundImage: 'url("https://clubartizen.com/wp-content/uploads/2024/08/PI-UFA-Postcards4-scaled.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">UserId</th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(

                                            (value, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{value.userId}</th>
                                                        <td>{value.id}</td>
                                                        <td>{value.title}</td>
                                                        <td>{value.body}</td>
                                                    </tr>


                                                )
                                            }

                                        )}
                                    </tbody>
                                </table>
</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                )
}
